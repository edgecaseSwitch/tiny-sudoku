const gridEl = document.getElementById("grid");
const cells = [];

for (let i = 0; i <81; i++) {
    const el = document.createElement("button");
    el.type = "button";
    el.className = "cell";
    el.textContent = i;
    gridEl.appendChild(el);
    cells.push(el);
}