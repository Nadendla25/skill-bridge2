
document.addEventListener("DOMContentLoaded", () => {
    const API_URL = "http://127.0.0.1:5000/api";

    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");

    function showMessage(elementId, message, type = "error") {
        const element = document.getElementById(elementId);
        if (!element) return;

        element.textContent = message;
        element.className = `auth-message ${type}`;
    }

    // REGISTER
    if (registerForm) {
        registerForm.addEventListener("submit", async (event) => {
            event.preventDefault();

            const name = document.getElementById("register-name").value.trim();
            const email = document.getElementById("register-email").value.trim();
            const password = document.getElementById("register-password").value;
            const confirmPassword = document.getElementById("confirm-password").value;
            const termsAccepted = document.getElementById("accept-terms").checked;
            const button = registerForm.querySelector('button[type="submit"]');

            if (!name || name.length < 2) {
                showMessage("register-message", "Please enter your full name.");
                return;
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                showMessage("register-message", "Please enter a valid email address.");
                return;
            }

            if (password.length < 8 || password.length > 128) {
                showMessage("register-message", "Password must contain 8 to 128 characters.");
                return;
            }

            if (password !== confirmPassword) {
                showMessage("register-message", "Passwords do not match.");
                return;
            }

            if (!termsAccepted) {
                showMessage("register-message", "Please accept the terms to continue.");
                return;
            }

            if (button) {
                button.disabled = true;
                button.textContent = "Creating account...";
            }

            try {
                const response = await fetch(`${API_URL}/register`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name, email, password })
                });

                const result = await response.json();
                console.log("Registration response:", result);

                if (!response.ok) {
                    showMessage("register-message", result.message || "Registration failed.");
                    return;
                }

                showMessage(
                    "register-message",
                    "Account created successfully! Redirecting to login...",
                    "success"
                );

                registerForm.reset();

                setTimeout(() => {
                    window.location.href = "login.html";
                }, 1200);

            } catch (error) {
                console.error("Registration error:", error);
                showMessage(
                    "register-message",
                    "Cannot connect to the backend. Check whether Flask is running."
                );
            } finally {
                if (button) {
                    button.disabled = false;
                    button.textContent = "Create Account →";
                }
            }
        });
    }

    // LOGIN
    if (loginForm) {
        loginForm.addEventListener("submit", async (event) => {
            event.preventDefault();

            const email = document.getElementById("login-email").value.trim();
            const password = document.getElementById("login-password").value;
            const button = loginForm.querySelector('button[type="submit"]');

            if (!email || !password) {
                showMessage("login-message", "Please enter your email and password.");
                return;
            }

            if (button) {
                button.disabled = true;
                button.textContent = "Logging in...";
            }

            showMessage("login-message", "Checking your details...", "success");

            try {
                const response = await fetch(`${API_URL}/login`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password })
                });

                const result = await response.json();

                console.log("Login response:", result);
                console.log("User details:", result.user);

                if (!response.ok) {
                    showMessage(
                        "login-message",
                        result.message || "Invalid email or password."
                    );
                    return;
                }

                if (!result.user) {
                    showMessage(
                        "login-message",
                        "Login response is missing user information."
                    );
                    return;
                }

                sessionStorage.setItem(
                    "skillbridgeUser",
                    JSON.stringify(result.user)
                );

                showMessage(
                    "login-message",
                    "Login successful! Opening dashboard...",
                    "success"
                );

                setTimeout(() => {
                    window.location.href = "dashboard.html";
                }, 800);

            } catch (error) {
                console.error("Login error:", error);
                showMessage(
                    "login-message",
                    "Cannot connect to the backend. Check whether Flask is running."
                );
            } finally {
                if (button) {
                    button.disabled = false;
                    button.textContent = "Login";
                }
            }
        });
    }

    // FORGOT PASSWORD
    const forgotPassword = document.getElementById("forgot-password");

    if (forgotPassword) {
        forgotPassword.addEventListener("click", (event) => {
            event.preventDefault();
            showMessage("login-message", "Password reset is not implemented yet.");
        });
    }
});
