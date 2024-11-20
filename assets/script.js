document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('register-form');
    const passwordInput = document.getElementById('password');
    const passwordStrength = document.getElementById('password-strength');

    // Password strength indicator
    passwordInput.addEventListener('input', function () {
        const value = passwordInput.value;

        if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/.test(value)) {
            passwordStrength.textContent = 'Strong password';
            passwordStrength.className = 'password-hint strong';
        } else {
            passwordStrength.textContent = 'Weak password';
            passwordStrength.className = 'password-hint';
        }
    });

    // Register form submission
    registerForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        let valid = true;

        if (!/^[a-zA-Z0-9_-]{3,20}$/.test(username)) {
            valid = false;
            showToast('Invalid username format.', 'error');
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            valid = false;
            showToast('Invalid email format.', 'error');
        }

        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/.test(password)) {
            valid = false;
            showToast('Weak password.', 'error');
        }

        if (password !== confirmPassword) {
            valid = false;
            showToast('Passwords do not match.', 'error');
        }

        if (valid) {
            showToast('Registration successful!', 'success');
            console.log({ username, email, password });
            setTimeout(() => {
                window.location.href = "login.html";
              }, 2000);
        }
    });
});

// Toastify notification function
function showToast(message, type) {
    Toastify({
        text: message,
        duration: 3000,
        gravity: 'top',
        position: 'right',
        backgroundColor: type === 'success' ? 'green' : 'red',
        stopOnFocus: true,
    }).showToast();
}

document.addEventListener("DOMContentLoaded", () => {
    const logoutButton = document.getElementById("logout-button");

    // Logout functionality
    logoutButton.addEventListener("click", () => {
        // Clear user session (simulate logout)
        localStorage.removeItem("user");

        // Show Toastify message
        Toastify({
            text: "You have successfully logged out.",
            duration: 3000,
            gravity: "top",
            position: "right",
            style: {
                background: "linear-gradient(to right, #ff5f6d, #ffc371)",
            },
        }).showToast();

        // Redirect to login page
        setTimeout(() => {
            window.location.href = "login.html";
        }, 2000);
    });

    // Display username dynamically
    const usernameDisplay = document.getElementById("username-display");
    const user = localStorage.getItem("user") || "Username";
    usernameDisplay.textContent = user;
});

