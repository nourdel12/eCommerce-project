// ===============================
// Wishlist
// ===============================

const wishlistButtons = document.querySelectorAll(".wishlist-btn");
const wishlistCount = document.querySelector(".wishlist-count");
// Load wishlist from localStorage
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
updateWishlistCount();
// Highlight saved wishlist items
wishlistButtons.forEach((button) => {
    const productCard = button.closest("[data-id]");

    if (!productCard) return;

    const productId = productCard.dataset.id;

    if (wishlist.some(product => product.id === productId)) {
        const heart = button.querySelector("i");

        heart.classList.remove("fa-regular");
        heart.classList.add("fa-solid");
        heart.style.color = "#00B207";
    }
});

// Toggle Wishlist
wishlistButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const productCard = button.closest("[data-id]");

        if (!productCard) return;

        const id = productCard.dataset.id;
        const title = productCard.querySelector(".product-title, h5").textContent.trim();

        let priceElement =
            productCard.querySelector(".product-price") ||
            productCard.querySelector(".price");

        const price = priceElement.textContent.trim();

        const image = productCard.querySelector("img").src;

        const heart = button.querySelector("i");

        const existingProduct = wishlist.find(product => product.id === id);

        if (existingProduct) {

            wishlist = wishlist.filter(product => product.id !== id);

            heart.classList.remove("fa-solid");
            heart.classList.add("fa-regular");
            heart.style.color = "";

        } else {

            wishlist.push({
                id,
                title,
                price,
                image
            });

            heart.classList.remove("fa-regular");
            heart.classList.add("fa-solid");
            heart.style.color = "#00B207";
        }

        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        updateWishlistCount();
        console.log(wishlist);

    });

});

//couter
function updateWishlistCount() {

    if (!wishlistCount) return;

    wishlistCount.textContent = wishlist.length;

    if (wishlist.length === 0) {
        wishlistCount.style.display = "none";
    } else {
        wishlistCount.style.display = "flex";
    }

}