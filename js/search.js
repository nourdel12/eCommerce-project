// ===============================
// Search Form
// ===============================

const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchInput");

if (searchForm && searchInput) {

    searchForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const query = searchInput.value.trim();

        if (!query) {
            alert("Please enter a search term.");
            searchInput.focus();
            return;
        }

        console.log("Searching for:", query);

        // Future:
        // window.location.href = `shop.html?search=${encodeURIComponent(query)}`;

    });

}