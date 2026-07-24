// ================================
// Authentication Helper
// ================================

const currentUser = getCurrentUser();

function isLoggedIn() {

    return currentUser !== null;

}

// ================================
// Logout
// ================================

function logout() {

    logoutUser();

    window.location.href = "pages/signin.html";

}