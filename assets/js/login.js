const emailRe = /^[A-Za-z][A-Za-z0-9_]{2,}@[A-Za-z]{2,}\.[A-Za-z]{2,}$/;
const passwordRe = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;


const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");


const inputs = [, email, password];


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
  return true;
}


email.addEventListener("input", validateEmail);

password.addEventListener("input", validatePassword);



form.addEventListener("submit", (e) => {
  const ok =
   
    validateEmail() &&
    validatePassword() 

  if (!ok) {
    e.preventDefault();
  }
});