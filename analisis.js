
//--------------HELPERS----------------

function esPar(numero) {
    return (numero % 2 === 0 );
};

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista/ lista.length; 
    return promedioLista;
}


//-----------------CALCULADORA DE MEDIANA--------------


function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personasMitad1 = lista[mitad -1];
        const personasMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([
            personasMitad1, 
            personasMitad2]);

            return mediana;

    } else {
        const personasMitad = lista[mitad];
        return personasMitad;
    }
}

//--------------MEDIANA GENERAL--------------

const salariosArg = argentina.map (
    function (personas) {
        return personas.salary;
    }
);

const salariosArgSorted = salariosArg.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

const medianaGeneralArg = medianaSalarios(salariosArgSorted);

//---------MEDIANA DEL TOP 10%--------------

const spliceStart = (salariosArgSorted.length * 90) / 100;
const spliceCount = salariosArgSorted.length - spliceStart;

const salariosArgTop10 = salariosArgSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTopArg = medianaSalarios(salariosArgTop10);


console.log([
    medianaGeneralArg,
    medianaTopArg,
]);