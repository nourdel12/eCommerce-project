const viewButtons = document.querySelectorAll(".view-btn");
const overlay = document.querySelector(".quick-view-overlay");

const modalImage = document.querySelector(".quick-view-image img");
const modalTitle = document.querySelector(".quick-title");
const modalPrice = document.querySelector(".quick-price");
const modalDescription = document.querySelector(".quick-description");

const closeModal = document.querySelector(".close-modal");

console.log("quickView loaded");
console.log(viewButtons.length);
console.log(overlay);
console.log(closeModal);

viewButtons.forEach(button => {

    button.addEventListener("click", () => {
        button.addEventListener("click", () => {
    console.log("clicked");
});

        const productCard = button.closest("[data-id]");

        if (!productCard) return;

        modalImage.src =
            productCard.querySelector("img").src;

        modalTitle.textContent =
            productCard.querySelector(".product-title").textContent;

        modalPrice.textContent =
            productCard.querySelector(".product-price").textContent;

        modalDescription.textContent =
            productCard.dataset.description;

        overlay.classList.add("active");

    });

});

closeModal.addEventListener("click", () => {
    overlay.classList.remove("active");
});


overlay.addEventListener("click", (e) => {

    if (e.target === overlay) {
        overlay.classList.remove("active");
    }

});
