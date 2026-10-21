const btnEL = document.querySelectorAll(".btn");
const accord = document.querySelectorAll("#sec-section");

btnEL.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    console.log("clicked");
    const second = accord[index];

    second.style.display = second.style.display === "block" ? "none" : "block";
  });
});

const names = ["ay", "tunde"];

console.log(names[0]);
