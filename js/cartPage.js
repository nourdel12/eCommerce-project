/**
 * Local Storage
 * */
let orders = JSON.parse(localStorage.getItem("orders")) || [];
const products = JSON.parse(localStorage.getItem('products')) ||[]
const cartData = JSON.parse(localStorage.getItem('cart')) || [];

/*
Elemments
**/ 
const couponInput = document.getElementById("couponInput");
const couponMessage = document.getElementById("couponMessage");
const applyCoupon = document.getElementById("applyCoupon");
const validCoupons = ["SALE", "DISCOUNT", "WELCOME", "SAVE"];


// function showProducts

function cartProduct() {
let cartoona=''
if (cartData.length == 0) {

    document.getElementById("trContainer").innerHTML = `
       <div class="w-100 my-2">
        <p class='text-center fs-4'>Your cart is empty</p>
         <a href="shop.html" class="bg-success text-light p-2 rounded-2">Add Products</a>
       
       </div> 

            
    `;

    return;
}else{
 cartoona = cartData.map(product => `
        <tr>
            <td class="text-start">
                <div class="d-flex align-items-center gap-3">
                    <img src="${product.image}" alt="${product.title}" class='img-cart'>
                    <span>${product.title}</span>
                </div>
            </td>

            <td>$${product.price}</td>

            <td>
               <div class="quantity d-inline-flex align-items-center">
    <button class="btn" onclick="decreaseQuantity(${product.id})">-</button>

    <span class="mx-3">${product.quantity}</span>

    <button class="btn" onclick="increaseQuantity(${product.id})">+</button>
</div>
            </td>

            <td class="fw-bold">$${(product.price*product.quantity)}</td>

            <td>
               <button class="btn p-0 text-secondary" onclick="deleteProduct(${product.id})">
       <i class="fa-solid fa-xmark"></i>
    </button>
       </td>
        </tr>
    `).join("");

}
    
    document.getElementById("trContainer").innerHTML = cartoona;
}

// function Total Price

function cartTotal() {

    let total = 0;

   cartData.forEach(product => {
        total += (product.price * product.quantity);
    });

    document.getElementById("subTotal").innerHTML = `$${total.toFixed(2)}`;
    document.getElementById("total").innerHTML = `$${total.toFixed(2)}`;
}


//  function CheckOut
function checkout() {

    let order = {
        id: Date.now(),
        products: cartData.map(product => ({
            id: product.id,
           title: product.title,
            price: product.price,
            quantity: product.quantity
        }))
    };

    orders.push(order);

    localStorage.setItem("orders", JSON.stringify(orders));
}

//  function Delete Product
function deleteProduct(id) {

    let index = cartData.findIndex(product => product.id == id);

    if (index !== -1) {
        cartData.splice(index, 1);
    }

    localStorage.setItem("cart", JSON.stringify(cartData));

    cartProduct();
    cartTotal();
}


//  function quantity
function increaseQuantity(id) {
    
console.log(id);
    let product = cartData.find(item => item.id == id);

    if (product) {
        product.quantity++;
        
        localStorage.setItem("cart", JSON.stringify(cartData));

        cartProduct();
        cartTotal();
    }
}
function decreaseQuantity(id) {
console.log(cartData);
console.log(id);
    let product = cartData.find(item => item.id == id);

    if (product && product.quantity > 1) {
        product.quantity--;
        product.totalPrice = product.price * product.quantity;

        localStorage.setItem("cart", JSON.stringify(cartData));

        cartProduct();
        cartTotal();
    }
}

// Coupon

applyCoupon.addEventListener("click", function () {
  const coupon = couponInput.value.trim().toUpperCase();

 
  const lettersOnly = /^[A-Z]+$/;

  if (coupon === "") {
    couponMessage.textContent = "Please enter a coupon code.";
    return;
  }

  if (!lettersOnly.test(coupon)) {
    couponMessage.textContent = "Coupon must contain letters only.";
    return;
  }

  if (!validCoupons.includes(coupon)) {
    couponMessage.textContent = "Invalid coupon code.";
    return;
  }

  couponMessage.classList.remove("text-danger");
  couponMessage.classList.add("text-success");
  couponMessage.textContent = "Coupon applied successfully!";
});
couponInput.addEventListener("input", function () {
  couponMessage.textContent = "";
  couponMessage.classList.remove("text-success");
  couponMessage.classList.add("text-danger");
});

// call functions
cartProduct();
cartTotal();