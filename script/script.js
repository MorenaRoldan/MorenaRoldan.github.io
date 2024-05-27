function saludo() {
    var nombre = prompt("por favor, ingresa tu nombre:");
    if (nombre){
        alert("Bienvenido/a, " + nombre + "!" );
        //agregamos el console.log
        console.log("nombre ingresado: " + nombre + "!" );
    } else{
        alert("Porfavor, ingresa tu nombre para recibir la bienvenida.");

    }
}
//llama a la funcion para probarla
saludo();
function goHome() {
    window.location.href = "about:blank";
}