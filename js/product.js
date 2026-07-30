const items = JSON.parse(localStorage.getItem('products')) ||[]
const parms = new URLSearchParams(window.location.search)
const id =Number(parms.get('id'))
let wishlistData = JSON.parse(localStorage.getItem("wishlist")) || [];
 
//  function showModel
function openModel(id){
     const product =items.find(item => item.id === id);
       let model=`
     

      <div class="modal-body">

                    <div class="row align-items-center g-2">

                        <!-- Images -->
                        <div class="col-lg-6 mb-3">

                            <div class="row">

                                <!-- Thumbnails -->
                                
                                <div class="col-3 col-md-2 col-xl-2">
                                    <img src="../images/items/apple.png" class="img-fluid border rounded mb-3 thumb active">
                                    <img src="../images/items/banana.png" class="img-fluid border rounded mb-3 thumb">
                                    <img src="${product.image}" class="img-fluid border rounded mb-3 thumb">
                                    <img src="../images/items/orange.png" class="img-fluid border rounded thumb">
                                </div>

                                <!-- Main Image -->
                                <div class="col-9 col-md-10 col-xl-10">
                                    <img id='mainImage'  src="${product.image}"
                                         class="img-fluid w-100 main-img">
                                </div>

                            </div>

                        </div>

                        <!-- Product Details -->
                        <div class="col-lg-6">

                            <div class="d-flex align-items-center mb-1">

                                <h2 class="fw-bold me-3">
                                    ${product.name}
                                </h2>

                                ${
                                    product.inStock
                                    ? `<span class="badge bg-success-subtle text-success">
                                            In Stock
                                       </span>`
                                    : `<span class="badge bg-danger">
                                            Out Of Stock
                                       </span>`
                                }

                            </div>

                            <div class="mb-1">

                              

                                <i class="fa-solid fa-star text-warning"></i>
                                  <i class="fa-solid fa-star text-warning"></i>
                                   <i class="fa-solid fa-star text-warning"></i>
                                    <i class="fa-solid fa-star text-warning"></i>
                                     <i class="fa-solid fa-star text-secondary"></i>

                                <span class="text-muted">
                                    (${product.customerFeedback.rating})
                                </span>

                            </div>

                            <div class="my-4">

                                ${
                                    product.oldPrice
                                    ? `
                                    <span class="text-decoration-line-through text-secondary fs-5">
                                        ${product.oldPrice} EGP
                                    </span>
                                    `
                                    : ""
                                }

                                <span class="text-success fw-bold fs-4  ms-2">
                                    ${product.price} EGP
                                </span>

                                ${
                                    product.discount > 0
                                    ? `
                                    <span class="badge bg-danger ms-2">
                                        ${product.discount}% OFF
                                    </span>
                                    `
                                    : ""
                                }

                            </div>

                            <div class="d-block d-md-flex justify-content-between mb-2">

                                <div>

                                    <strong>
                                        Brand:
                                    </strong>

                                    ${product.brand.name}

                                </div>

                                <div>

                                    <strong>Share:</strong>

                                    <i class="fa-brands fa-facebook-f ms-2"></i>
                                    <i class="fa-brands fa-twitter ms-2"></i>
                                    <i class="fa-brands fa-pinterest ms-2"></i>
                                    <i class="fa-brands fa-instagram ms-2"></i>

                                </div>

                            </div>

                            <p class="text-secondary fs-6">
                                ${product.description}
                            </p>

                            <hr>
                            <div class="d-flex align-items-center gap-3 mb-2">

    <div class="input-group quantity" style="width:140px">

        <button class="btn btn-light "
        id='decreaseBtn'>
            -
        </button>

        <input
            type="text"
            value="1"
            class="form-control text-center quantity-input"
            id='quantityInput'
            readonly
            >

        <button class="btn btn-light"
        id='increaseBtn'
        >
            +
        </button>

    </div>

    <button id='addToCartBtn' class="btn btn-success rounded-pill flex-grow-1 py-2">

        Add To Cart
        <i class="fa-solid fa-bag-shopping mx-2"></i>

    </button>

    <button id='wishlistBtn' class="btn btn-light rounded-circle">

        <i class="fa-solid fa-heart '}"></i>

    </button>

</div>

<div class="small">

    <p>
        <strong>Category:</strong>
        ${product.category.name}
    </p>

    <p>
        <strong>Brand:</strong>
        ${product.brand.name}
    </p>


    <p>
        <strong>Tags:</strong>

        ${product.tags.map(tag => `
            <span class="badge bg-light text-dark border me-1">
                ${tag}
            </span>
        `).join("")}

    </p>

    <hr>


</div>

</div>

</div>

</div>

`
document.getElementById("modalBody").innerHTML = model;


let wishlistBtn = document.getElementById('wishlistBtn')
slider()
cartActions(product)
wishlistBtn.addEventListener("click", function () {
    toggleWishlist2(product.id);
});
}

openModel(id)

// function cartActions
function cartActions(product) {

    let quantity = 1;

    const quantityInput = document.getElementById("quantityInput");
    const increaseBtn = document.getElementById("increaseBtn");
    const decreaseBtn = document.getElementById("decreaseBtn");
    const addToCartBtn = document.getElementById("addToCartBtn");

    increaseBtn.addEventListener("click", function () {
        quantity++;
        quantityInput.value = quantity;
    });

    decreaseBtn.addEventListener("click", function () {
        if (quantity > 1) {
            quantity--;
            quantityInput.value = quantity;
        }
    });

    addToCartBtn.addEventListener("click", function () {

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        let order = {
            id: product.id,
            title: product.name,
            image: product.image,
            price: product.price,
            quantity: quantity,
            totalPrice: product.price * quantity
        };

        let index = cart.findIndex(item => item.id === product.id);

        if (index !== -1) {
            cart[index].quantity += quantity;
            cart[index].totalPrice = cart[index].quantity * cart[index].price;
            window.location.href='cart.html'
        } else {
            cart.push(order);
             window.location.href='cart.html'
        }

        localStorage.setItem("cart", JSON.stringify(cart));
    });

}

// function slider

function slider() {
    const mainImage = document.getElementById("mainImage");
    const thumbs = document.querySelectorAll(".thumb");

    thumbs.forEach(img => {
        img.addEventListener("click", function () {
            mainImage.src = this.src;
        });
    });
}

function updateWishlistCount() {
    const wishlistCount = document.querySelector(".wishlist-count");
    const wishlistData = JSON.parse(localStorage.getItem("wishlist")) || [];

    wishlistCount.textContent = wishlistData.length;
}

// function Wishlist
function toggleWishlist2(id) {

    let product = products.find(item => item.id === id);

    let index = wishlistData.findIndex(item => item.id === id);

    if (index !== -1) {
        wishlistData.splice(index, 1);
        alert('Removed from Wishlist')
       
    } else {
  wishlistData.push({
            id: product.id,
           title: product.name,
            image: product.image,
            price: product.price
        });
alert('add Wishlist')

    }

    localStorage.setItem("wishlist", JSON.stringify(wishlistData));
   
    showProducts(products);
    
    updateWishlistCount()
  

}




// function Products
function showProducts(products) {
   
    let cartoona = "";
   
    for (let index = 0; index < 4; index++) {
       let product  = items[index];
         cartoona += `
        <div class="col-lg-3 col-md-4 col-sm-6 my-4">
            <div class="card product-card border-0 rounded-3">

                <div class="position-relative overflow-hidden product-img">
                       
                
                <!-- Button trigger modal -->


                    <button onclick="openModel(${product.id})" type="button" class="border-0 bg-body" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <img src="${product.image}" class="card-img-top p-4" alt="${product.name}">
                    </button>
                     ${product.inStock?'' :`
                       <div class="position-absolute top-15 text-light bg-black text-center p-1"> 
                     Out of stock
                    
                     </div>`}
                    

                    <div class="product-icons position-absolute text-center top-0 end-0 m-3">

                    <button onclick='toggleWishlist2(${product.id})' class="border-0 icon d-block mb-2 bg-transparent">

                           <i class="fa-solid fa-heart"></i>

                           
      
    </button>
                        

                        <a href="product-details.html?id=${product.id}" class="icon">
                            <i class="fa-regular fa-eye"></i>
                        </a>

                    </div>

                </div>

                <div class="card-body d-flex justify-content-between align-items-center">

                    <div>
                        <h5 class=' text-card'>${product.name}</h5>
                        <h4 class=' text-card2'>${product.price} EGP</h4>
                          <div class="mb-1">

                                <i class="fa-solid fa-star text-warning"></i>
                                  <i class="fa-solid fa-star text-warning"></i>
                                   <i class="fa-solid fa-star text-warning"></i>
                                    <i class="fa-solid fa-star text-warning"></i>
                                     <i class="fa-solid fa-star text-secondary"></i>
                                <span class="text-muted">
                                    (${product.customerFeedback.rating})
                                </span>

                            </div>
                    </div>

                    <button class="btn btn-success rounded-circle">
                       
                   <a href="cart.html?id=${product.id}">
                    <i class="fa-solid fa-bag-shopping"></i></a>
                    </button>

                </div>

            </div>
        </div>

      
        `;
   ;

    }
   
       
    document.getElementById("container-items").innerHTML = cartoona;
    
}


showProducts(items)