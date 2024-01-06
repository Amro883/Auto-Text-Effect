let textElement = document.querySelector("h1");
let speedElement = document.querySelector("#speed");
let index = 1;
text = "Hello In My WebSite";
let speed = 300 / speedElement.value;
const writeText = () => {
  textElement.innerText = text.slice(0, index);
  index++;
  if (index > text.length) index = 1;
  setTimeout(writeText, speed);
};
writeText();
speedElement.addEventListener("input", () => {
  speed = 300 / speedElement.value;
});
