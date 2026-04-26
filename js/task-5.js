function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector("body");

const btn = body.querySelector(".change-color");

const colorCode = body.querySelector(".color");

btn.addEventListener("click", handleBtnClick);
function handleBtnClick(e) {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  colorCode.textContent = newColor;
}
