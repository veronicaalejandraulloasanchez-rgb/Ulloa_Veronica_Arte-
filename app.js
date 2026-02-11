const disciplinas = [
    { nombre: "Pintura Contemporánea", puntos: 0 },
    { nombre: "Ilustración Digital", puntos: 0 },
    { nombre: "Fotografía Artística", puntos: 0 },
    { nombre: "Arte Conceptual", puntos: 0 },
    { nombre: "Escultura Experimental", puntos: 0 },
    { nombre: "Animación 2D/3D", puntos: 0 },
    { nombre: "Diseño Visual", puntos: 0 },
    { nombre: "Arte Urbano", puntos: 0 },
    { nombre: "Videoarte", puntos: 0 },
    { nombre: "Instalación Multimedia", puntos: 0 }
];

let totalComparaciones = 0;
let maxComparaciones = 15;
let opcionActualA, opcionActualB;

function generarComparacion() {
    opcionActualA = disciplinas[Math.floor(Math.random() * disciplinas.length)];
    opcionActualB = disciplinas[Math.floor(Math.random() * disciplinas.length)];

    while (opcionActualA === opcionActualB) {
        opcionActualB = disciplinas[Math.floor(Math.random() * disciplinas.length)];
    }

    document.getElementById("optionA").innerText = opcionActualA.nombre;
    document.getElementById("optionB").innerText = opcionActualB.nombre;
}

function vote(opcion) {
    if (opcion === 'A') {
        opcionActualA.puntos++;
    } else {
        opcionActualB.puntos++;
    }

    totalComparaciones++;

    if (totalComparaciones >= maxComparaciones) {
        mostrarResultados();
    } else {
        generarComparacion();
    }
}

function mostrarResultados() {
    document.getElementById("comparison").classList.add("hidden");
    document.getElementById("results").classList.remove("hidden");

    disciplinas.sort((a, b) => b.puntos - a.puntos);

    const lista = document.getElementById("rankingList");
    lista.innerHTML = "";

    disciplinas.forEach(d => {
        const li = document.createElement("li");
        li.innerText = d.nombre + " - " + d.puntos + " puntos";
        lista.appendChild(li);
    });
}

function restart() {
    disciplinas.forEach(d => d.puntos = 0);
    totalComparaciones = 0;

    document.getElementById("comparison").classList.remove("hidden");
    document.getElementById("results").classList.add("hidden");

    generarComparacion();
}

generarComparacion();
const disciplinas = [
    { nombre: "Pintura Contemporánea", puntos: 0 },
    { nombre: "Ilustración Digital", puntos: 0 },
    { nombre: "Fotografía Artística", puntos: 0 },
    { nombre: "Arte Conceptual", puntos: 0 },
    { nombre: "Escultura Experimental", puntos: 0 },
    { nombre: "Animación 2D/3D", puntos: 0 },
    { nombre: "Diseño Visual", puntos: 0 },
    { nombre: "Arte Urbano", puntos: 0 },
    { nombre: "Videoarte", puntos: 0 },
    { nombre: "Instalación Multimedia", puntos: 0 }
];

let totalComparaciones = 0;
let maxComparaciones = 15;
let opcionActualA, opcionActualB;

function generarComparacion() {
    opcionActualA = disciplinas[Math.floor(Math.random() * disciplinas.length)];
    opcionActualB = disciplinas[Math.floor(Math.random() * disciplinas.length)];

    while (opcionActualA === opcionActualB) {
        opcionActualB = disciplinas[Math.floor(Math.random() * disciplinas.length)];
    }

    document.getElementById("optionA").innerText = opcionActualA.nombre;
    document.getElementById("optionB").innerText = opcionActualB.nombre;
}

function vote(opcion) {
    if (opcion === 'A') {
        opcionActualA.puntos++;
    } else {
        opcionActualB.puntos++;
    }

    totalComparaciones++;

    if (totalComparaciones >= maxComparaciones) {
        mostrarResultados();
    } else {
        generarComparacion();
    }
}

function mostrarResultados() {
    document.getElementById("comparison").classList.add("hidden");
    document.getElementById("results").classList.remove("hidden");

    disciplinas.sort((a, b) => b.puntos - a.puntos);

    const lista = document.getElementById("rankingList");
    lista.innerHTML = "";

    disciplinas.forEach(d => {
        const li = document.createElement("li");
        li.innerText = d.nombre + " - " + d.puntos + " puntos";
        lista.appendChild(li);
    });
}

function restart() {
    disciplinas.forEach(d => d.puntos = 0);
    totalComparaciones = 0;

    document.getElementById("comparison").classList.remove("hidden");
    document.getElementById("results").classList.add("hidden");

    generarComparacion();
}

generarComparacion();
