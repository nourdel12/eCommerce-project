const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const email = document
            .getElementById("signupEmail")
            .value
            .trim()
            .toLowerCase();

        const password = document
            .getElementById("signupPassword")
            .value;

        const confirmPassword = document
            .getElementById("confirmPassword")
            .value;

        // Validation

        if (!email || !password || !confirmPassword) {

            alert("Please fill all fields.");
            return;
        }

        if (password.length < 6) {

            alert("Password must be at least 6 characters.");
            return;
        }

        if (password !== confirmPassword) {

            alert("Passwords do not match.");
            return;
        }

        const users = getUsers();

        const emailExists = users.some(user => user.email === email);

        if (emailExists) {

            alert("Email already exists.");
            return;
        }

        const newUser = {

            id: Date.now(),

            email,

            password,

            createdAt: new Date().toISOString()

        };

        users.push(newUser);

        saveUsers(users);

        alert("Account created successfully!");

        window.location.href = "signin.html";

    });

}

// ================= PASSWORD TOGGLE =================

document.querySelectorAll(".toggle-password").forEach(icon => {

    icon.addEventListener("click", function () {

        const input = this.previousElementSibling;

        if (input.type === "password") {

            input.type = "text";

            this.classList.remove("fa-eye");
            this.classList.add("fa-eye-slash");

        } else {

            input.type = "password";

            this.classList.remove("fa-eye-slash");
            this.classList.add("fa-eye");

        }

    });

});