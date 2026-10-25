
import os

from flask import Flask, request, jsonify
from flask_cors import CORS
from google import genai

app = Flask(__name__)
CORS(app)

# Get the API key from the environment variable
api_key = os.getenv("GEMINI_API_KEY")

if not api_key:
    raise RuntimeError(
        "GEMINI_API_KEY is missing. Set it in the terminal "
        "before starting this service."
    )

client = genai.Client(api_key=api_key)


@app.get("/api/ai/health")
def health():
    return jsonify({
        "status": "success",
        "message": "SkillBridge AI service is running"
    })


@app.post("/api/ai/chat")
def chat():
    data = request.get_json(silent=True) or {}
    question = data.get("message", "")

    if not isinstance(question, str) or not question.strip():
        return jsonify({
            "error": "Please enter a question."
        }), 400

    try:
        response = client.models.generate_content(
            model="gemini-3.8-flash",
            contents=question.strip()
        )

        answer = getattr(response, "text", None)

        if not answer:
            return jsonify({
                "error": "Gemini returned an empty answer. Try another question."
            }), 502

        return jsonify({"answer": answer})

    except Exception as e:
        # Print the real cause in the VS Code server terminal
        app.logger.exception("Gemini request failed: %s", e)
        print("GEMINI ERROR:", repr(e), flush=True)

        # Return a readable error without exposing sensitive details
        error_text = str(e).lower()

        if "api key" in error_text or "unauthenticated" in error_text:
            message = "Gemini API key is invalid or not accepted."
        elif "quota" in error_text or "resource_exhausted" in error_text:
            message = "Gemini API quota exceeded. Check API usage and limits."
        elif "not found" in error_text or "404" in error_text:
            message = "Gemini model or API endpoint was not found."
        else:
            message = (
                "Gemini request failed. Check the VS Code server terminal "
                "for the exact error."
            )

        return jsonify({"error": message}), 502


if __name__ == "__main__":
    app.run(
        host="127.0.0.1",
        port=5001,
        debug=False
    )

