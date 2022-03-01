

const notes = [
    {
        course: "educacion fisica",
        note: 10,
        credit: 2,
    },
    {
        course: "programacion",
        note: 8,
        credit: 5,
    },
    {
        course: "finanzas personales",
        note: 7,
        credit: 5,
    },
];

const notesWithCredit = notes.map(
    function (noteObject){
        return noteObject.note * noteObject.note;
    }
);


const sumOfNotesWithCredit = notesWithCredit.reduce(
    function(sum = 0, newVal){
        return sum + newVal;
    }
);

const credits = notes.map(
    function(noteObject) {
        return noteObject.credit;
    }
);

const sumOfCredits = credits.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits; 