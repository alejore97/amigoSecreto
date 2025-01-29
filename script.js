let nombres = [];

function agregarNombre() {
    let input = document.getElementById("nombre");
    let nombre = input.value.trim();
    
    if (nombre === "") {
        alert("Debe ingresar un nombre.");
        return;
    }
    
    if (!/^[a-zA-ZÁÉÍÓÚáéíóúñÑ ]+$/.test(nombre)) {
        alert("El nombre solo puede contener letras y espacios.");
        return;
    }
    
    nombres.push(nombre);
    input.value = "";
    actualizarListaNombres();
}

function actualizarListaNombres() {
    let listaDiv = document.getElementById("lista-nombres");
    listaDiv.innerHTML = "<strong>Nombres ingresados:</strong> " + nombres.join(", ");
}

function seleccionarAmigoSecreto() {
    if (nombres.length === 0) {
        alert("Debe ingresar al menos un nombre.");
        return;
    }
    
    let indice = Math.floor(Math.random() * nombres.length);
    let amigoSecreto = nombres[indice];
    
    document.getElementById("resultado").innerText = "El amigo secreto es: " + amigoSecreto;
    nombres = [];
    actualizarListaNombres();
}
