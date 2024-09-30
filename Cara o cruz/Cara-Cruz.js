let numAleatorio = Math.floor(Math.random()*2)
let divMoneda = document.querySelector(".moneda")
if (numAleatorio==1){
    divMoneda.innerHTML = "Cara"
} else {
    divMoneda.innerHTML = "Cruz"
}