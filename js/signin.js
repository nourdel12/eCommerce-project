const signinForm = document.getElementById("signinForm");

if (signinForm) {

    signinForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const email = document
            .getElementById("signinEmail")
            .value
            .trim()
            .toLowerCase();

        const password = document
            .getElementById("signinPassword")
            .value;

        const users = getUsers();

        const user = users.find(user =>
            user.email === email &&
            user.password === password
        );

        if (!user) {
            alert("Invalid email or password.");
            return;
        }

        setCurrentUser(user);

        alert("Login successful!");

        window.location.href = "dashboard.html";

    });

}