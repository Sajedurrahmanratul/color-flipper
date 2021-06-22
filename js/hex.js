const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    console.log("clicked")
    let colored = "#";
    for (let i = 0; i < 6; i++) {
        colored += hex[randomNumber()];
    };

    document.body.style.background = colored;
    color.textContent = colored;
});

function randomNumber() {
    return Math.floor(Math.random() * hex.length);
};