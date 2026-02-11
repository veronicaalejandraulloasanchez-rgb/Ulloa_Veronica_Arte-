let disciplinas = [
    { nombre: "Pintura", puntos: 0 },
    { nombre: "Escultura", puntos: 0 },
    { nombre: "Fotografía", puntos: 0 },
    { nombre: "Ilustración Digital", puntos: 0 },
    { nombre: "Arte Urbano", puntos: 0 },
    { nombre: "Animación", puntos: 0 },
    { nombre: "Diseño Gráfico", puntos: 0 },
    { nombre: "Grabado", puntos: 0 }
];

let opcionA;
let opcionB;

function nuevaComparacion() {
    let indices = [];

    while (indices.length < 2) {
        let random = Math.floor(Math.random() * disciplinas.length);
        if (!indices.includes(random)) {
            indices.push(random);
        }
    }

    opcionA = disciplinas[indices[0]];
    opcionB = disciplinas[indices[1]];

    document.getElementById("opcionA").innerText = opcionA.nombre;
    document.getElementById("opcionB").innerText = opcionB.nombre;
}

document.getElementById("opcionA").addEventListener("click", function() {
    opcionA.puntos++;
    actualizarRanking();
    nuevaComparacion();
});

document.getElementById("opcionB").addEventListener("click", function() {
    opcionB.puntos++;
    actualizarRanking();
    nuevaComparacion();
});

function actualizarRanking() {
    disciplinas.sort((a, b) => b.puntos - a.puntos);

    let lista = document.getElementById("rankingLista");
    lista.innerHTML = "";

    disciplinas.forEach(function(disciplina, index) {
        let li = document.createElement("li");
        li.textContent = (index + 1) + ". " + disciplina.nombre + " (" + disciplina.puntos + ")";
        lista.appendChild(li);
    });
}

function reiniciar() {
    disciplinas.forEach(function(d) {
        d.puntos = 0;
    });
    actualizarRanking();
    nuevaComparacion();
}

nuevaComparacion();
