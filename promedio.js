
// ----------Promedio------------
//---------promedio con ciclo for---------

const lista1 = [
    100, 200, 300, 500
];

let sumaLista1 = 0;
for (let i = 0; i < lista1.length; i++ ) {
    sumaLista1 = sumaLista1 + lista1[i];
}

const promedioLista1 = sumaLista1 / lista1.length; 

function calcularMediaAritmeticaFor(lista1) {
    let sumaLista1 = 0;
    for (let i = 0; i < lista1.length; i++ ) {
        sumaLista1 = sumaLista1 + lista1[i];
    }
    const promedioLista1 = sumaLista1/ lista1.length; 
    return promedioLista1
}


//------Promedio con el metodo REDUCE de los array---------


function calcularMediaAritmeticaReduce(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista/ lista.length; 
    return promedioLista;
}

   



// ----------Mediana------------