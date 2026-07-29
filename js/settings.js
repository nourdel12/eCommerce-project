let currentUser = getCurrentUser();

if (!currentUser) {
  window.location.href = "signin.html";
}


// Account Settings Inputs

const accountForm =
  document.getElementById("accountSettingsForm");

const firstNameInput =
  document.getElementById("accountFirstName");

const lastNameInput =
  document.getElementById("accountLastName");

const emailInput =
  document.getElementById("accountEmail");

const phoneInput =
  document.getElementById("accountPhone");


// Billing Address Inputs

const billingForm =
  document.getElementById("billingAddressForm");

const billingFirstName =
  document.getElementById("billingFirstName");

const billingLastName =
  document.getElementById("billingLastName");

const billingCompany =
  document.getElementById("billingCompany");

const billingAddress =
  document.getElementById("billingAddress");

const billingCountry =
  document.getElementById("billingCountry");

const billingState =
  document.getElementById("billingState");

const billingZipCode =
  document.getElementById("billingZipCode");

const billingEmail =
  document.getElementById("billingEmail");

const billingPhone =
  document.getElementById("billingPhone");


// Display Account Data

firstNameInput.value =
  currentUser.firstName || "";

lastNameInput.value =
  currentUser.lastName || "";

emailInput.value =
  currentUser.email || "";

phoneInput.value =
  currentUser.phone || "";


// Display Billing Address

if (currentUser.billingAddress) {
  const billing = currentUser.billingAddress;

  billingFirstName.value = billing.firstName || "";
  billingLastName.value = billing.lastName || "";
  billingCompany.value = billing.company || "";
  billingAddress.value = billing.address || "";
  billingCountry.value = billing.country || "";
  billingState.value = billing.state || "";
  billingZipCode.value = billing.zipCode || "";
  billingEmail.value = billing.email || "";
  billingPhone.value = billing.phone || "";
} else {
  billingEmail.value = currentUser.email || "";
}


// Save User Data

function saveCurrentUser() {
  const users = getUsers();

  const userIndex = users.findIndex(function (user) {
    return user.id === currentUser.id;
  });

  if (userIndex !== -1) {
    users[userIndex] = currentUser;
  }

  saveUsers(users);
  setCurrentUser(currentUser);
}


// Save Account Settings

accountForm.addEventListener("submit", function (event) {
  event.preventDefault();

  currentUser.firstName =
    firstNameInput.value.trim();

  currentUser.lastName =
    lastNameInput.value.trim();

  currentUser.email =
    emailInput.value.trim().toLowerCase();

  currentUser.phone =
    phoneInput.value.trim();

  saveCurrentUser();

  alert("Account settings saved successfully.");
});


// Save Billing Address

billingForm.addEventListener("submit", function (event) {
  event.preventDefault();

  currentUser.billingAddress = {
    firstName: billingFirstName.value.trim(),
    lastName: billingLastName.value.trim(),
    company: billingCompany.value.trim(),
    address: billingAddress.value.trim(),
    country: billingCountry.value,
    state: billingState.value,
    zipCode: billingZipCode.value.trim(),
    email: billingEmail.value.trim(),
    phone: billingPhone.value.trim()
  };

  saveCurrentUser();

  alert("Billing address saved successfully.");
});