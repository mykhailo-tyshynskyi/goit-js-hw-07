const input  = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
input.addEventListener('input',handleInputInput)
function handleInputInput(e){
const name = e.target.value.trim();
if (name===""){output.textContent = "Anonymous"
}
else {output.textContent = `${name}`}
}