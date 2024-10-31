const palos=["hearts","diamonds","clubs","spades"];
const numeros=["ace","2","3","4","5","6","7","8","9","10","jack","queen","king"];
var baraja=[];

function Carta(numero, palo){
    this.numero=numero;
    this.palo=palo;
}

function llenarCartas(numeros,palos,baraja){    
    for (let numero of numeros){
        for (let palo of palos){
            let carta=new Carta(numero, palo);
            baraja.push(carta);
        }
    }
}

function sacarCarta(){
    let min=0;
    let max=baraja.length-1;

    let indice=Math.floor((Math.random() * (max-min) + 1)+min);
    let carta=baraja.splice(indice,1);
    return carta[0];
}

function jugar(){
    if(baraja.length<5){
        console.log("No hay cartas suficientes para jugar, recarga la página!");
        return
    }
    if (document.contains(document.querySelector("body>div"))) {
        document.querySelector("body>div").remove();
    }
    let div=document.createElement("div");
    document.querySelector("body").appendChild(div);
    let cartas=[];
    for (let i=0;i<5;i++){
        let carta=sacarCarta();
        cartas.push(carta);
        let img=document.createElement("img");
        div.appendChild(img);
        img.src="cards/"+carta.numero+"_of_"+carta.palo+".png";
    }
    let coincidencia=false;
    for (let i=0;i<cartas.length&&!coincidencia;i++){
        for (let j = i; j < cartas.length-1; j++) {
            if (cartas[i].numero==cartas[j+1].numero) {
                coincidencia=true;
                break;
            }
        }
    }
    if (coincidencia) {
        console.log("Se ha encontrado pareja!");
    }else{
        console.log("Lo siento, has perdido :(");
    }
}

llenarCartas(numeros,palos,baraja);