// ==================================================
// Top Bar Dropdowns
// ==================================================

function setupDropdown(dropdownSelector, valueSelector, dataAttribute) {

    const dropdown = document.querySelector(dropdownSelector);

    if (!dropdown) return;

    const button = dropdown.querySelector(".dropdown-btn");
    const menu = dropdown.querySelector(".dropdown-menu");
    const value = dropdown.querySelector(valueSelector);
    const items = dropdown.querySelectorAll("li");

    button.addEventListener("click", (event) => {

        event.stopPropagation();

        document.querySelectorAll(".dropdown-menu").forEach(other => {

            if (other !== menu) {
                other.classList.remove("show");
            }

        });

        menu.classList.toggle("show");

    });

    items.forEach(item => {

        item.addEventListener("click", () => {

            value.textContent = item.dataset[dataAttribute];

            menu.classList.remove("show");

        });

    });

}

setupDropdown(
    ".currency-dropdown",
    ".selected-currency",
    "currency"
);

setupDropdown(
    ".language-dropdown",
    ".selected-language",
    "language"
);

// ==================================================
// Navbar Dropdowns
// ==================================================

const navDropdowns = document.querySelectorAll(".nav-item.dropdown");

navDropdowns.forEach(dropdown => {

const button = dropdown.querySelector(".dropdown-toggle-btn");
const menu = dropdown.querySelector(".nav-dropdown-menu");

if (!button || !menu) return;

button.addEventListener("click", (event) => {

        if (window.innerWidth >= 992) return;

        event.stopPropagation();

        document.querySelectorAll(".nav-dropdown-menu").forEach(other => {

            if (other !== menu) {
                other.classList.remove("show");
            }

        });

        menu.classList.toggle("show");

    });
});

// ==================================================
// Close Dropdowns
// ==================================================

document.addEventListener("click", () => {

    document.querySelectorAll(".dropdown-menu").forEach(menu => {
        menu.classList.remove("show");
    });

    if (window.innerWidth < 992) {

        document.querySelectorAll(".nav-dropdown-menu").forEach(menu => {
            menu.classList.remove("show");
        });

    }

});

// ==================================================
// Mobile Dropdown Links
// ==================================================

document.querySelectorAll(".nav-dropdown-menu a").forEach(link => {

    link.addEventListener("click", () => {

        document.querySelectorAll(".nav-dropdown-menu").forEach(menu => {
            menu.classList.remove("show");
        });

        if (typeof closeMenu === "function") {
            closeMenu();
        }

    });

});
