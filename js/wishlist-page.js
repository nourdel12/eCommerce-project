const tableContainer = document.querySelector(".table-responsive");
const tableBody = document.getElementById("table-body");
const emptyWishlistMessage = document.getElementById("empty-wishlist");


let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function renderWishlistPage() {
    
    if (wishlist.length == 0) {
        tableContainer.style.display = "none";
        emptyWishlistMessage.style.display = "block";
        return;
    }


    tableContainer.style.display = "block";
    emptyWishlistMessage.style.display = "none";
    tableBody.innerHTML = "";

    wishlist.forEach((product, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
                <td>
                    <img src="${product.image}" style="width: 70px; height: 70px; object-fit: cover;" class="d-inline me-3">
                    <span class="fw-semibold text-dark">${product.title || product.name}</span>
                </td>
                <td class="align-middle">
                    <span>${product.price}</span>
                </td>
                <td class="align-middle">
                    <span class="instock text-success fw-semibold">In Stock</span>
                </td>
                <td class="align-middle">
                    <button class="rounded-pill py-2 px-4 border-0 bg-success text-white me-2">Add to Cart</button>
                    <button type="button" class="btn-close" aria-label="Close" onclick="removeFromWishlist(${index})"></button>
                </td>
            `;

        tableBody.appendChild(row);
    });

    updateWishlistCounts();
}


removeFromWishlist = function (index) {
    wishlist.splice(index, 1);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    renderWishlistPage();
    updateWishlistCounts();
};

// in header 
function updateWishlistCounts() {
    const wishlistCountElements = document.querySelector(".wishlist-count");
    console.log(wishlistCountElements)
    wishlistCountElements.textContent = wishlist.length;
}


renderWishlistPage();
