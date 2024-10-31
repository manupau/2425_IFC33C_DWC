let hs;
let hCreate;
document.getElementsByTagName("h2")[0].innerHTML = "Este es el header 2";
for (let i = 1; i <= 6; i++) {
    if (i>=3) {
        hCreate = document.createElement("h"+i);
        document.getElementsByTagName("body")[0].appendChild(hCreate);
        hCreate.innerHTML = "Este es el header "+i; 
    }
    hs = document.getElementsByTagName("h"+i);
    for (let h of hs) {
        h.style.fontSize = (15+5*i)+"px";
    }
}