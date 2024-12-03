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
        boton = document.createElement("button");
        td.appendChild(boton);
        icono = document.createElement("i");
        boton.appendChild(icono);
        icono.classList = valor;
        boton.innerHTML += key;
        if (key == "Borrar") {
            boton.onclick = esborrarElement;
        } else {
            boton.onclick = modificarElement;
        }
    }

}

function esborrarElement(event){
    let tr = event.target.closest("tr");
    let tbody = tr.closest("tbody");
    let indice = Array.from(tbody.children).indexOf(tr) + 1;
    if (window.confirm(`Està segur que vol esborrar l'element ${indice}?`)){
        window.alert("Element esborrat!");
    } else {
        window.alert("Has cancel·lat l'acció");
    }
}

function modificarElement(event){

}

function obrirLogin() {
    let width = window.innerWidth / 2;  // Ancho de la ventana emergente
    let height = window.innerHeight / 2; // Altura de la ventana emergente
    let top = window.screenY + (window.innerHeight / 2 - height / 2); // Centro vertical relativo a la ventana actual
    let left = window.screenX + (window.innerWidth / 2 - width / 2); // Centro horizontal relativo a la ventana actual

    window.open("login.html", "Login", `width=${width},height=${height},top=${top},left=${left}`);
}

