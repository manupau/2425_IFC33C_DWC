function Persona(nombre, apellidos, genero, edad) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.genero = genero;
    this.edad = edad;
}

let personas = [
    new Persona("Manu","Guerrero","Hombre", 28),
    new Persona("Marc","Corcoles","Hombre", 19),
    new Persona("Yuk","Han","Hombre", 23),
    new Persona("Helena","Gonçalvez","Mujer", 28),
    new Persona("Tomeu","Molla","Hombre", 25)
]

let table = document.createElement("table");
let thead = document.createElement("thead");
let tr = document.createElement("tr");
let th;

document.getElementsByTagName("body")[0].appendChild(table);
table.appendChild(thead);
thead.appendChild(tr);

for (let atributo in personas[0]) {
    th = document.createElement("th");
    tr.appendChild(th);
    th.innerHTML = atributo;
}

let tbody = document.createElement("tbody");
table.appendChild(tbody);
let td;

for (let persona of personas) {
    tr = document.createElement("tr");
    tbody.appendChild(tr);
    for (let valor of Object.values(persona)) {
        td = document.createElement("td");
        tr.appendChild(td);
        td.innerHTML = valor;
    }
}
