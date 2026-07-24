// =========================================
// Elements
// =========================================

const cartButtons = document.querySelectorAll(".add-cart-btn");
const cartCount = document.querySelector(".cart-count");

const toast = document.querySelector(".toast-notification");
const toastTitle = document.querySelector(".toast-title");
const toastMessage = document.querySelector(".toast-message");

// =========================================
// Local Storage
// =========================================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// =========================================
// Cart Counter
// =========================================

function updateCartCount() {
    if (!cartCount) return;

    cartCount.textContent = cart.length;
    cartCount.style.display = cart.length ? "flex" : "none";
}

// =========================================
// Save Cart
// =========================================

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

// =========================================
// Toast Notification
// =========================================

let toastTimer;

function showToast(title, message) {
    if (!toast) return;

    clearTimeout(toastTimer);

    toastTitle.textContent = title;
    toastMessage.textContent = message;

    toast.classList.add("show");

    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);
}

// =========================================
// Add Product To Cart
// =========================================

function addToCart(productCard) {
    const id = productCard.dataset.id;

    const title = productCard
        .querySelector(".product-title, h5")
        .textContent
        .trim();

    const price = productCard
        .querySelector(".product-price, .price")
        .textContent
        .trim();

    const image = productCard.querySelector("img").src;

    const existingProduct = cart.find(product => product.id === id);

    if (existingProduct) {
        existingProduct.quantity++;
        showToast("Quantity Updated", title);
    } else {
        cart.push({
            id,
            title,
            price,
            image,
            quantity: 1
        });

        showToast("Added to Cart", title);
    }

    saveCart();

    console.log(cart);
}

// =========================================
// Event Listeners
// =========================================

cartButtons.forEach(button => {
    button.addEventListener("click", () => {
        const productCard = button.closest("[data-id]");

        if (!productCard) return;

        addToCart(productCard);
    });
});

// =========================================
// Initialize
// =========================================

updateCartCount();