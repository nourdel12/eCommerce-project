// ===============================
// Sticky Navbar
// ===============================

const navbar = document.querySelector(".navbar-section");

if (navbar) {
    window.addEventListener("scroll", () => {
        navbar.classList.toggle("scrolled", window.scrollY > 20);
    });
}

// ===============================
// Mobile Menu
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const menuIcon = menuBtn?.querySelector("i");
const navLinks = document.querySelector(".nav-links");

function openMenu() {
    navLinks.classList.add("show");

    menuIcon.classList.remove("bi-list");
    menuIcon.classList.add("bi-x-lg");
}

function closeMenu() {
    if (window.innerWidth >= 992) return;

    navLinks.classList.remove("show");

    menuIcon.classList.remove("bi-x-lg");
    menuIcon.classList.add("bi-list");

    document.querySelectorAll(".nav-dropdown-menu").forEach(menu => {
        menu.classList.remove("show");
    });
}

if (menuBtn && menuIcon && navLinks) {

    menuBtn.addEventListener("click", (event) => {

        event.stopPropagation();

        if (navLinks.classList.contains("show")) {
            closeMenu();
        } else {
            openMenu();
        }

    });

    document.addEventListener("click", (event) => {

        if (
            !navLinks.contains(event.target) &&
            !menuBtn.contains(event.target)
        ) {
            closeMenu();
        }

    });

}

// ===============================
// Active Navigation Links
// ===============================

document.querySelectorAll(".nav-links .nav-dropdown-menu a").forEach(link => {

    link.addEventListener("click", () => {

        document
            .querySelectorAll(".nav-links a")
            .forEach(item => item.classList.remove("active"));

        link.classList.add("active");

        if (window.innerWidth < 992) {
            closeMenu();
        }

    });

});

document.querySelectorAll(".nav-links > li:not(.dropdown) > a").forEach(link => {

    link.addEventListener("click", () => {

        document
            .querySelectorAll(".nav-links a")
            .forEach(item => item.classList.remove("active"));

        link.classList.add("active");

        if (window.innerWidth < 992) {
            closeMenu();
        }

    });

});

// ===============================
// Reset Mobile Menu on Resize
// ===============================

window.addEventListener("resize", () => {

    if (window.innerWidth >= 992) {
        closeMenu();
    }

});