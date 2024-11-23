document.getElementById('loginBtn').addEventListener('click', function () {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (email === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Basic validation example
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    // Redirect to homepage
    alert("Login successful! Redirecting to the homepage...");
    window.location.href = "index.html"; // Replace with your actual homepage URL
});