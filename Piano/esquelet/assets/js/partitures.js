let section = document.getElementsByTagName("section")[0];
let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");
let tr = document.createElement("tr");
let td;

section.appendChild(table);
table.appendChild(thead);
table.appendChild(tbody);
thead.appendChild(tr);

let th = document.createElement("th");
tr.appendChild(th);
th.innerHTML = "Títol";
th = document.createElement("th");
tr.appendChild(th);
th.innerHTML = "Idioma Original";
th = document.createElement("th");
tr.appendChild(th);
th.innerHTML = "Accions";

registros = [
    { Titol: "Sant Antoni i el Dimoni", IdiomaOriginal: "ca"},
    { Titol: "Merry Christmas", IdiomaOriginal: "en"},
    { Titol: "La Balanguera", IdiomaOriginal: "ca"},
    { Titol: "Frere Jackques", IdiomaOriginal: "fr"}
];

while (registros.length < 100) {
    registros.push(registros[3]);
}

acciones = { Editar: "fa-regular fa-pen-to-square", Borrar: "fa-solid fa-trash-can"};

let boton;
let icono;
for (let partitura of registros){
    tr = document.createElement("tr");
    tbody.appendChild(tr);
    
    for (let valor of Object.values(partitura)){
        td = document.createElement("td");
        tr.appendChild(td);
        td.innerHTML = valor;
    }

    td = document.createElement("td");
    tr.appendChild(td);
    for (let [key, valor] of Object.entries(acciones)){
        icono = document.createElement("i");
        td.appendChild(icono);
        icono.classList = valor;
        boton = document.createElement("button");
        td.appendChild(boton);
        boton.innerHTML = key;
    }

}