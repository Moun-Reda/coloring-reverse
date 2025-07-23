let body = document.body;
let button = document.createElement("button");
button.textContent = "Click me";
body.append(button);

let container = document.createElement("div");
container.className = "container";
let column1 = document.createElement("div");
column1.className = "column1";
let column2 = document.createElement("div");
column2.className = "column2";
let column3 = document.createElement("div");
column3.className = "column3";
let column4 = document.createElement("div");
column4.className = "column4";
container.append(column1, column2, column3, column4);
body.append(container);

for (let i = 1; i <= 12; i++) {
  let d = addDiv(i);
  switch (i % 4) {
    case 1:
      column1.append(d);
      d.style.backgroundColor = "lightcoral";
      break;
    case 2:
      column2.append(d);
      d.style.backgroundColor = "lightblue";
      break;
    case 3:
      column3.append(d);
      d.style.backgroundColor = "lightcoral";

      break;
    case 0:
      column4.append(d);
      d.style.backgroundColor = "lightblue";
      break;
  }
  d.addEventListener("mouseenter", () => {
    d.style.border = "2px solid black";
    d.style.cursor = "pointer";
  });

  d.addEventListener("mouseleave", () => {
    d.style.border = "none";
  });
}

function addDiv(i) {
  let div = document.createElement("div");
  div.id = `c${i}`;
  div.className = "div";
  let h2 = document.createElement("h2");
  let p = document.createElement("p");
  h2.textContent = `product #${i}`;
  p.textContent = "Product description";
  div.append(h2, p);
  return div;
}
container.childNodes.forEach((column) => {
  column.childNodes.forEach((div) => {
    button.addEventListener("click", () => {
      if (div.style.backgroundColor === "lightcoral") {
        div.style.backgroundColor = "lightblue";
      } else {
        div.style.backgroundColor = "lightcoral";
      }
    });
  });
});
