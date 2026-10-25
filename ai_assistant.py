
import os

from flask import Flask, request, jsonify
from flask_cors import CORS
from google import genai

app = Flask(__name__)

# Allow requests from the deployed frontend.
# Set FRONTEND_URL in Render to your live website URL.
frontend_url = os.getenv("FRONTEND_URL", "").strip()

if frontend_url:
    CORS(app, resources={
        r"/api/ai/*": {"origins": [frontend_url]}
    })
else:
    # Temporary fallback; configure FRONTEND_URL in Render.
    CORS(app, resources={
        r"/api/ai/*": {"origins": "*"}
    })

MODEL_NAME = os.getenv("GEMINI_MODEL", "gemini-2.5-flash")


def get_gemini_client():
    api_key = os.getenv("GEMINI_API_KEY")
    if not api_key:
        return None
    return genai.Client(api_key=api_key)


@app.get("/")
def home():
    return jsonify({
        "status": "success",
        "message": "SkillBridge AI backend is running"
    })


@app.get("/api/ai/health")
def health():
    return jsonify({
        "status": "success",
        "message": "SkillBridge AI service is running",
        "api_key_configured": bool(os.getenv("GEMINI_API_KEY"))
    })


@app.post("/api/ai/chat")
def chat():
    data = request.get_json(silent=True) or {}
    question = data.get("message", "")

    if not isinstance(question, str) or not question.strip():
        return jsonify({
            "error": "Please enter a question."
        }), 400

    if len(question) > 10000:
        return jsonify({
            "error": "Please keep your question under 10,000 characters."
        }), 400

    try:
        client = get_gemini_client()

        if client is None:
            app.logger.error("GEMINI_API_KEY is not configured.")
            return jsonify({
                "error": "AI service is not configured yet. Please try again later."
            }), 503

        response = client.models.generate_content(
            model=MODEL_NAME,
            contents=question.strip()
        )

        answer = getattr(response, "text", None)

        if not answer or not answer.strip():
            return jsonify({
                "error": "The AI returned an empty response. Please try again."
            }), 502

        return jsonify({
            "answer": answer.strip()
        }), 200

    except Exception as exc:
        app.logger.exception("Gemini request failed")

        error_text = str(exc).lower()

        if "api key" in error_text or "unauthenticated" in error_text or "permission_denied" in error_text:
            message = "Gemini API key is invalid or does not have permission."
        elif "quota" in error_text or "resource_exhausted" in error_text or "429" in error_text:
            message = "Gemini API quota or rate limit reached. Please try again later."
        elif "not found" in error_text or "404" in error_text:
            message = "The configured Gemini model was not found. Check GEMINI_MODEL."
        else:
            message = "The AI request failed. Please try again later."

        return jsonify({"error": message}), 502
        
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5001))
    app.run(
        host="0.0.0.0",
        port=port,
        debug=False
    )




