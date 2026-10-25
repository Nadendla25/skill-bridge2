

import os
import re

from flask import Flask, jsonify, request
from flask_cors import CORS
from dotenv import load_dotenv
from mysql.connector import connect, Error, IntegrityError
from werkzeug.security import (
    generate_password_hash,
    check_password_hash,
)

load_dotenv()

app = Flask(__name__)
CORS(app)


# ---------------- DATABASE CONNECTION ----------------

def get_db_connection():
    return connect(
        host=os.getenv("DB_HOST", "localhost"),
        port=int(os.getenv("DB_PORT", "3306")),
        user=os.getenv("DB_USER", "root"),
        password=os.getenv("DB_PASSWORD", ""),
        database=os.getenv("DB_NAME", "skillbridge"),
    )


# ---------------- HOME ----------------

@app.route("/", methods=["GET"])
def home():
    return jsonify({
        "message": "Welcome to SkillBridge Backend!"
    })


# ---------------- TEST DATABASE ----------------

@app.route("/api/test-db", methods=["GET"])
def test_db():
    connection = None
    cursor = None

    try:
        connection = get_db_connection()
        cursor = connection.cursor()
        cursor.execute("SELECT DATABASE()")
        database_name = cursor.fetchone()[0]

        return jsonify({
            "status": "success",
            "database": database_name,
            "message": "MySQL connection successful!"
        })

    except (Error, ValueError):
        app.logger.exception("Database test failed")
        return jsonify({
            "status": "error",
            "message": "Database connection failed. Check server configuration."
        }), 500

    finally:
        if cursor is not None:
            cursor.close()
        if connection is not None and connection.is_connected():
            connection.close()


# ---------------- REGISTER ----------------

@app.route("/api/register", methods=["POST"])
def register():
    data = request.get_json(silent=True)

    if not isinstance(data, dict):
        return jsonify({
            "status": "error",
            "message": "Please submit valid registration details."
        }), 400

    name = data.get("name", "")
    email = data.get("email", "")
    password = data.get("password", "")

    if not all(
        isinstance(value, str)
        for value in (name, email, password)
    ):
        return jsonify({
            "status": "error",
            "message": "Invalid registration details."
        }), 400

    name = name.strip()
    email = email.strip().lower()

    if not 2 <= len(name) <= 100:
        return jsonify({
            "status": "error",
            "message": "Name must contain 2 to 100 characters."
        }), 400

    if not re.fullmatch(r"[^@\s]+@[^@\s]+\.[^@\s]+", email):
        return jsonify({
            "status": "error",
            "message": "Please enter a valid email address."
        }), 400

    if not 8 <= len(password) <= 128:
        return jsonify({
            "status": "error",
            "message": "Password must contain 8 to 128 characters."
        }), 400

    password_hash = generate_password_hash(password)

    connection = None
    cursor = None

    try:
        connection = get_db_connection()
        cursor = connection.cursor()

        cursor.execute(
            """
            INSERT INTO users (full_name, email, password_hash)
            VALUES (%s, %s, %s)
            """,
            (name, email, password_hash)
        )
        connection.commit()

        return jsonify({
            "status": "success",
            "message": "Account created successfully. Please log in."
        }), 201

    except IntegrityError:
        if connection is not None:
            connection.rollback()

        return jsonify({
            "status": "error",
            "message": "This email is already registered. Please log in."
        }), 409

    except Error:
        if connection is not None:
            connection.rollback()

        app.logger.exception("Registration failed")
        return jsonify({
            "status": "error",
            "message": "Could not create the account. Please try again."
        }), 500

    finally:
        if cursor is not None:
            cursor.close()
        if connection is not None and connection.is_connected():
            connection.close()


# ---------------- LOGIN ----------------

@app.route("/api/login", methods=["POST"])
def login():
    data = request.get_json(silent=True)

    if not isinstance(data, dict):
        return jsonify({
            "status": "error",
            "message": "Please submit valid login details."
        }), 400

    email = data.get("email", "")
    password = data.get("password", "")

    if not isinstance(email, str) or not isinstance(password, str):
        return jsonify({
            "status": "error",
            "message": "Invalid login details."
        }), 400

    email = email.strip().lower()

    if not email or not password:
        return jsonify({
            "status": "error",
            "message": "Enter your email and password."
        }), 400

    connection = None
    cursor = None

    try:
        connection = get_db_connection()
        cursor = connection.cursor(dictionary=True)

        cursor.execute(
            """
            SELECT id, full_name, email, password_hash
            FROM users
            WHERE email = %s
            """,
            (email,)
        )

        user = cursor.fetchone()

        if (
            user is None
            or not check_password_hash(
                user["password_hash"], password
            )
        ):
            return jsonify({
                "status": "error",
                "message": "Invalid email or password."
            }), 401

        return jsonify({
            "status": "success",
            "message": "Login successful!",
            "user": {
                "id": user["id"],
                "name": user["full_name"],
                "email": user["email"]
            }
        }), 200

    except Error:
        app.logger.exception("Login database operation failed")
        return jsonify({
            "status": "error",
            "message": "Login failed. Please try again."
        }), 500

    finally:
        if cursor is not None:
            cursor.close()
        if connection is not None and connection.is_connected():
            connection.close()


# ---------------- RUN SERVER ----------------

if __name__ == "__main__":
    app.run(
        host="127.0.0.1",
        port=5000,
        debug=True
    )
    