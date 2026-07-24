// ================================
// Local Storage Keys
// ================================

const USERS_KEY = "shoperyUsers";
const CURRENT_USER_KEY = "shoperyCurrentUser";

// ================================
// Users
// ================================

function getUsers() {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
}

function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

// ================================
// Current User
// ================================

function getCurrentUser() {
    return JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
}

function setCurrentUser(user) {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
}

function logoutUser() {
    localStorage.removeItem(CURRENT_USER_KEY);
}