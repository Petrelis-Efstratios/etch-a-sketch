let range = document.querySelector("input");
let x = range.value;
let main = document.querySelector("#main");
let p = document.querySelector("p");
for(let i = range.value; i < 256; i++) {
const div = document.createElement("div");
main.appendChild(div);
}
let divs = document.querySelectorAll("#main > div");
var timer = setInterval(check, 100);
divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
    div.style.background = "blue"
    })
});
function check() {
    if(x !== range.value) {
        while (main.lastElementChild) {
            main.removeChild(main.lastElementChild);
        }
        for(let i = range.value; i < range.value ** 2; i++) {
            const div = document.createElement("div");
            main.appendChild(div);
            }
            divs = document.querySelectorAll("#main > div");
            divs.forEach((div) => {
                div.addEventListener("mouseover", () => {
                div.style.background = "blue"
                })
            });
            main.setAttribute("style", `grid-template-columns: repeat(${range.value}, 0fr);`)
            x = range.value;
        }
        p.textContent = `${range.value} X ${range.value}`;
}
