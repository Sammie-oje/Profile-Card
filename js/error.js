"use strict"


const fields = document.querySelectorAll("input, textarea");
const form = document.querySelector("form");
const successMessage = document.querySelector("#success-message");

const errorMessages = {
  "full-name": "Please enter your full name (first and last name)",
  message: "Message should be about 10 characters long",
  email: "Let your email be in this format (name@example.com)",
  subject: "Please enter a valid subject name"
}

//Validate each field , set the error messages according to the failed tests e.g (!field.validity.valid)
function validateField(field) {
  const errorEl = document.getElementById(`error-${field.id}-desc`);
  
  //Clear any previous messages
  errorEl.textContent = "";
  
  if (!field.validity.valid) {
    let message = "";
    
    if (field.validity.valueMissing || !field.value.trim()) {
      message = `${field.labels[0].textContent} is required`;
    } 
    else if (field.validity.patternMismatch || field.validity.typeMismatch) {
      message = errorMessages[field.id] || "Invalid format";
    }
    else if (field.validity.tooShort) {
      message = errorMessages[field.id] || `Must be at least ${field.minLength} characters`
    }
    
    field.classList.add("error");
    errorEl.textContent = message;
    return false;
  }
  
  field.classList.remove("error");
  return true;
}

//Real time validation on blur and input
fields.forEach(field => {
  field.addEventListener("blur", () => validateField(field));
  field.addEventListener("input", () => {
    if(field.classList.contains("error")) validateField(field);
  })
});

//Validate on submit of form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let allValid = true;
  
  fields.forEach((field) => {
    const valid = validateField(field);
    if (!valid) allValid = false;
  });
  
  //Show success message for 3 seconds and reset form data
  if(allValid) {
    successMessage.classList.add("show");
    fields.forEach(field => field.classList.remove("error"));
    setTimeout(() => successMessage.classList.remove("show"), 3000);
    form.reset();
  }
});
