OrderSummery = document.getElementById("OrderSummery")

let checkout = JSON.parse(localStorage.getItem("cart")) || [];
console.log(checkout) 

OrderSummery.innerHTML=""

function makesum() {

    checkout.forEach((element , i) => {
        let div = document.createElement("div")
        div.innerHTML = `<div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex align-items-center gap-1">
                            <img src="${element.image}" class="" style="width: 50px; height: 50px; object-fit: cover;" alt="">
                            <span>${element.title}</span>
                            <span> × ${element.quantity}</span>
                        </div>
                        <h6>${element.price}</h6>
                    </div>`
        OrderSummery.append(div)
    });
}
makesum()

let firstNameInput = document.getElementById("inputFirstName");
let lastNameInput = document.getElementById("inputLastName");
let emailInput = document.getElementById("inputEmail");
let phoneInput = document.getElementById("inputPhone");
console.log(phoneInput)

function validateText(inputElement) {
  let value = inputElement.value;
  let isValid = /^[A-Za-z]+$/.test(value);
  
  if (!isValid) {
    inputElement.classList.add("is-invalid");
  } else {
    inputElement.classList.remove("is-invalid");
  }
}

function validateEmail(inputElement) {
  let value = inputElement.value;
  let isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  
  if (!isValid) {
    inputElement.classList.add("is-invalid");
  } else {
    inputElement.classList.remove("is-invalid");
  }
}

function validatePhone(inputElement) {
  let value = inputElement.value;
  let isValid = /^\d*$/.test(value);
  
  if (!isValid) {
    inputElement.classList.add("is-invalid");
  } else {
    inputElement.classList.remove("is-invalid");
  }
}

firstNameInput.addEventListener("input", function() {
  validateText(firstNameInput);
});

lastNameInput.addEventListener("input", function() {
  validateText(lastNameInput);
});

emailInput.addEventListener("input", function() {
  validateEmail(emailInput);
});

phoneInput.addEventListener("input", function() {
  validatePhone(phoneInput);
});
