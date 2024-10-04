function saludarCliente() {
    let cliente = prompt("¿Cuál es su nombre?");
    alert("Hola, bienvenido " + cliente);
}

const frutas = ["manzana", "naranja", "frutilla", "uva"];

saludarCliente();

let seguirComprando = true;

while (seguirComprando) {
    let catalogo = prompt("¿Cuál de estas es tu favorita? " + frutas);

    switch (catalogo) {
        case "manzana":
            if (confirm("Muy buena elección, contamos con 11kg en stock. ¿Deseas comprar?")) {
                let cantidad = prompt("¿Cuánto deseas comprar?");
                alert("Has comprado " + cantidad + " kg de Manzana.");
            }
            break;

        case "naranja":
            if (confirm("Muy buena elección, contamos con 15kg en stock. ¿Deseas comprar?")) {
                let cantidad = prompt("¿Cuánto deseas comprar?");
                alert("Has comprado " + cantidad + " kg de naranjas.");
            }
            break;

        case "frutilla":
            if (confirm("Muy buena elección, contamos con 12kg en stock. ¿Deseas comprar?")) {
                let cantidad = prompt("¿Cuánto deseas comprar?");
                alert("Has comprado " + cantidad + " kg de frutillas.");
            }
            break;

        case "uva":
            if (confirm("Muy buena elección, contamos con 22kg en stock. ¿Deseas comprar?")) {
                let cantidad = prompt("¿Cuánto deseas comprar?");
                alert("Has comprado " + cantidad + " kg de uva.");
            }
            break;

        default:
            alert("No tenemos esa fruta en stock.");
            break;
    }

    seguirComprando = confirm("¿Quieres seguir comprando?");
}

alert("Gracias por tu compra!");
