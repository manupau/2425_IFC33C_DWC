const nombres = ["Ana", "Luis", "María", "Carlos", "Sofía"];
let ul = document.createElement("ul");
document.getElementsByTagName("body")[0].appendChild(ul);
let li;
for (let nombre of nombres) {
    li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML=nombre;
}