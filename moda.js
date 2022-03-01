const lista1 = [
    2, 3, 6, 2, 3, 7, 9, 2, 3, 5, 2, 7, 3,
];

const lista1Count = {};

lista1.map(
    function(elemento){
        if(lista1Count[elemento]) {
            lista1Count[elemento] += 1;
        } else {
            lista1Count[elemento] = 1;
        }
    }
);

const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB) {
        return elementoA[1] - elementoB[1];
    }
);

const moda = lista1Array[lista1Array.length - 1];
