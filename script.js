let range = document.querySelector("input");
let main = document.querySelector("#main");
let p = document.querySelector("p");
let size = main.clientWidth / range.value;
for(let i = 0; i < range.value ** 2; i++) {
const div = document.createElement("div");
main.appendChild(div);
}
let divs = document.querySelectorAll("#main > div");
p.textContent = `${range.value} X ${range.value}`;
divs.forEach((div) => {
    div.setAttribute("style", `width: ${size}px; height: ${size}px;`);
    div.addEventListener("mouseover", () => {
    div.style.background = "blue"
    })
});
range.addEventListener("input", function() {
    p.textContent = `${range.value} X ${range.value}`;
    size = main.clientWidth / range.value;
    while (main.lastElementChild) {
        main.removeChild(main.lastElementChild);
    }
    for(let i = 0; i < range.value ** 2; i++) {
        const div = document.createElement("div");
        main.appendChild(div);
        }
        divs = document.querySelectorAll("#main > div");
        divs.forEach((div) => {
            div.setAttribute("style", `width: ${size}px; height: ${size}px;`);
            div.addEventListener("mouseover", () => {
            div.style.background = "blue"
            })
            });
        main.setAttribute("style", `grid-template-columns: repeat(${range.value}, 0fr)`);
    }
);