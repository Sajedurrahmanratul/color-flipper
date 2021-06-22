const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const colorCode = document.querySelector(".color");

btn.addEventListener("click", function () {
    let color = randomNumber();
    document.body.style.background = colors[color];
    colorCode.textContent = colors[color];
});

function randomNumber() {
    return Math.floor(Math.random() * colors.length);
};