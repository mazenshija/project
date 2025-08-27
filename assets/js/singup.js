const emailRe = /^[A-Za-z][A-Za-z0-9_]{2,}@[A-Za-z]{2,}\.[A-Za-z]{2,}$/;
const phoneRe = /^\+962[789]\d{7}$/;
const passwordRe = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

const form = document.getElementById("signupForm");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const phone = document.getElementById("phone");
const gender = document.getElementById("gender");

const inputs = [fullName, email, password, phone, gender];


window.addEventListener("DOMContentLoaded", () => {
  const savedData = JSON.parse(localStorage.getItem("signupData"));
  if (savedData) {
    fullName.value = savedData.fullName || "";
    email.value = savedData.email || "";
    password.value = savedData.password || "";
    phone.value = savedData.phone || "";
    gender.value = savedData.gender || "";
  }
});

function setError(input, message) {
  const errorEl = input.parentElement.querySelector(".error-message");
  if (message) {
    errorEl.textContent = message;
    errorEl.classList.remove("hidden");
  } else {
    errorEl.textContent = "";
    errorEl.classList.add("hidden");
  }
}

function saveSignupInformation() {
  const data = {
    fullName: fullName.value.trim(),
    email: email.value.trim(),
    password: password.value,
    phone: phone.value.trim(),
    gender: gender.value
  };
  localStorage.setItem("signupData", JSON.stringify(data));
}

function validateName() {
  if (!fullName.value.trim()) {
    setError(fullName, "Full name is required.");
    return false;
  }
  setError(fullName, "");
  saveSignupInformation();
  return true;
}

function validateEmail() {
  if (!email.value.trim()) {
    setError(email, "Email is required.");
    return false;
  }
  if (!emailRe.test(email.value.trim())) {
    setError(email, "Invalid email format.");
    return false;
  }
  setError(email, "");
  saveSignupInformation();
  return true;
}

function validatePhone() {
  if (!phone.value.trim()) {
    setError(phone, "Phone number is required.");
    return false;
  }
  if (!phoneRe.test(phone.value.trim())) {
    setError(phone, "Phone must be +962 followed by 7/8/9 and 7 digits.");
    return false;
  }
  setError(phone, "");
  saveSignupInformation();
  return true;
}

function validatePassword() {
  if (!password.value) {
    setError(password, "Password is required.");
    return false;
  }
  if (!passwordRe.test(password.value)) {
    setError(password, "Password must be ≥8 chars, include a capital, a number, and a special character.");
    return false;
  }
  setError(password, "");
  saveSignupInformation();
  return true;
}

function validateGender() {
  if (!gender.value) {
    setError(gender, "Please select a gender.");
    return false;
  }
  setError(gender, "");
  saveSignupInformation();
  return true;
}


email.addEventListener("input", validateEmail);
phone.addEventListener("input", validatePhone);
password.addEventListener("input", validatePassword);
fullName.addEventListener("input", validateName);
gender.addEventListener("change", validateGender);

form.addEventListener("submit", (e) => {
  const ok =
    validateName() &&
    validateEmail() &&
    validatePassword() &&
    validatePhone() &&
    validateGender();

  if (!ok) {
    e.preventDefault();
  }
});
