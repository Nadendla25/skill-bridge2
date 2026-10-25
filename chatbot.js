
const API_URL = "http://127.0.0.1:5001/api/ai/chat";

const chatForm = document.getElementById("chatForm");
const questionInput = document.getElementById("question");
const messages = document.getElementById("messages");
const sendBtn = document.getElementById("sendBtn");
const typing = document.getElementById("typing");

console.log("SkillBridge chatbot JavaScript loaded!");

chatForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const message = questionInput.value.trim();

    if (!message || sendBtn.disabled) {
        return;
    }

    addMessage(message, "user-message");

    questionInput.value = "";
    sendBtn.disabled = true;
    sendBtn.textContent = "Wait...";
    typing.classList.remove("hidden");

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: message
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "AI request failed.");
        }

        if (!data.answer) {
            throw new Error("The AI returned an empty answer.");
        }

        addMessage(data.answer, "ai-message");

    } catch (error) {
        console.error("Chatbot error:", error);

        addMessage(
            "Sorry, I couldn't get a response. " + error.message,
            "ai-message"
        );
    } finally {
        typing.classList.add("hidden");
        sendBtn.disabled = false;
        sendBtn.textContent = "Send ↑";
        questionInput.focus();
    }
});

function addMessage(text, className) {
    const messageElement = document.createElement("div");

    messageElement.className = "message " + className;
    messageElement.textContent = text;

    messages.appendChild(messageElement);
    messages.scrollTop = messages.scrollHeight;
}
