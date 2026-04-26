const form = document.querySelector(".login-form");
console.log(form);
form.addEventListener("submit", handleFormSubmit);
function handleFormSubmit(e) {
  e.preventDefault();
  const elEmail = e.target.elements.email;
  const elPassword = e.target.elements.password;
  if (elEmail.value === "" || elPassword.value === "") {
    alert("All form fields must be filled in");
  } else {
    const inputs = form.querySelectorAll("input");
    const data = {};

    for (const input of inputs) {
      data[input.name] = input.value;
    }
    console.log(data);
    form.reset();
  }
}
