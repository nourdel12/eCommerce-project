const contactForm = document.querySelector("#contactForm");

const textInputs = contactForm.querySelectorAll('input[type="text"]');

const nameInput = textInputs[0];
const subjectInput = textInputs[1];
const emailInput = contactForm.querySelector('input[type="email"]');
const messageInput = contactForm.querySelector("textarea");

contactForm.noValidate = true;


function showError(input, message) {
  removeError(input);

  const errorMessage = document.createElement("p");

  errorMessage.className = "error-message";
  errorMessage.textContent = message;

  errorMessage.style.color = "red";
  errorMessage.style.fontSize = "12px";
  errorMessage.style.marginTop = "5px";
  errorMessage.style.marginBottom = "0";

  input.style.borderColor = "red";

  input.parentElement.appendChild(errorMessage);
}


function removeError(input) {
  const errorMessage =
    input.parentElement.querySelector(".error-message");

  if (errorMessage) {
    errorMessage.remove();
  }

  input.style.borderColor = "";
}


contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let formIsValid = true;

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const subjectValue = subjectInput.value.trim();
  const messageValue = messageInput.value.trim();


  if (nameValue.length < 3) {
    showError(
      nameInput,
      "Please enter at least 3 characters."
    );

    formIsValid = false;
  } else {
    removeError(nameInput);
  }


  if (
    emailValue === "" ||
    !emailValue.includes("@") ||
    !emailValue.includes(".")
  ) {
    showError(
      emailInput,
      "Please enter a valid email address."
    );

    formIsValid = false;
  } else {
    removeError(emailInput);
  }


  if (subjectValue.length < 3) {
    showError(
      subjectInput,
      "Please enter at least 3 characters."
    );

    formIsValid = false;
  } else {
    removeError(subjectInput);
  }


  if (messageValue.length < 10) {
    showError(
      messageInput,
      "Please write at least 10 characters."
    );

    formIsValid = false;
  } else {
    removeError(messageInput);
  }


  if (formIsValid) {
    alert("Your message has been sent successfully!");

    contactForm.reset();

    removeError(nameInput);
    removeError(emailInput);
    removeError(subjectInput);
    removeError(messageInput);
  }
});


nameInput.addEventListener("input", function () {
  removeError(nameInput);
});

emailInput.addEventListener("input", function () {
  removeError(emailInput);
});

subjectInput.addEventListener("input", function () {
  removeError(subjectInput);
});

messageInput.addEventListener("input", function () {
  removeError(messageInput);
});