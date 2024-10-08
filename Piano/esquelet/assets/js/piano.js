var busquedaNotas = [];
var partituras = [];

function Nota(nota,tipo){
    this.nota=nota;
    this.tipo=tipo;
}

function Partitura(titulo,partitura){
    this.titulo=titulo;
    this.partitura=partitura;
}

function AddBusq(nombre, tipo){
    busquedaNotas.push(new Nota(nombre,tipo));
    console.log(busquedaNotas);
}

function Buscador(array){
    let resultado="";
    for (let index = 0; index < partituras.length; index++) {
        for (let index2 = 0, index3=0; index2 < partituras[index].partitura.length&&index3<array.length; index2++) {
            if (array[index3].nota==partituras[index].partitura[index2].nota&&array[index3].tipo==partituras[index].partitura[index2].tipo) {
                index3++;
            }else{
                if (array[0].nota==partituras[index].partitura[index2].nota&&array[0].tipo==partituras[index].partitura[index2].tipo) {
                    index3=1;
                }else{
                    index3=0;
                }
            }
            if (index3==array.length) {
                resultado+=partituras[index].titulo+":";
                for (let index4 = 0; index4 < partituras[index].partitura.length; index4++) {
                    resultado+=" ";
                    resultado+=partituras[index].partitura[index4].nota;
                    if (partituras[index].partitura[index4].tipo=="sostenido") {
                        resultado+="#";
                    }
                }
                resultado+="\n";
            }
        }
    }
    if (resultado=="") {
        resultado="No se ha encontrado nada";
    }
    busquedaNotas=[];
    console.log(resultado);
}

function CrearPartituras(){

    let balanguera=[new Nota("Do","normal"),new Nota("Re","normal"),new Nota("Mi","normal")
                    ,new Nota("Fa","normal"),new Nota("Fa","normal"),new Nota("Sol","normal")
                    ,new Nota("Sol","normal"),new Nota("La","sostenido"),new Nota("La","sostenido")]
    
    let happyB=[new Nota("Do","normal"),new Nota("Do","normal"),new Nota("Re","normal"),new Nota("Do","normal")
                    ,new Nota("Fa","normal"),new Nota("Mi","normal"),new Nota("Do","normal"),new Nota("Do","normal")
                    ,new Nota("Re","normal"),new Nota("Do","normal"),new Nota("Sol","normal"),new Nota("Fa","normal")]
    
    partituras.push(new Partitura("La Balanguera",balanguera),new Partitura("Happy Birthday",happyB));
}

CrearPartituras();
AddBusq("Do","normal");
AddBusq("Re","normal");
Buscador(busquedaNotas);