//Traigo valores del storage
let l = localStorage.getItem("listaFinal");
let listaFinal = JSON.parse(l);
let asadoPrecioTotal = parseInt(localStorage.getItem("asadoPrecioTotal"));
let descuento = parseInt(localStorage.getItem("descuento"));
let precioFinal = parseInt(localStorage.getItem("precioFinal"));
console.log(listaFinal);
console.log(asadoPrecioTotal);
console.log(descuento);
console.log(precioFinal);
document.querySelector('#precioFinal').innerHTML = new Intl.NumberFormat('es-AR', { currency: 'ARS', style: 'currency' }).format(precioFinal);

//Le doy formato a las variables de dinero
let asadoPrecioTotalCurrency = new Intl.NumberFormat('es-AR', { currency: 'ARS', style: 'currency' }).format(asadoPrecioTotal);
let descuentoCurrency = new Intl.NumberFormat('es-AR', { currency: 'ARS', style: 'currency' }).format(descuento);
let precioFinalCurrency = new Intl.NumberFormat('es-AR', { currency: 'ARS', style: 'currency' }).format(precioFinal);
console.log(asadoPrecioTotalCurrency);
console.log(descuentoCurrency);
console.log(precioFinalCurrency);

//Si tengo la tarjeta de beneficios, descuento un 20% al total
if (descuento !== 0) {
    beneficiosLeyenda = `<p>¡Con tu tarjeta de beneficios te ahorraste <span>${descuentoCurrency}</span>!</p>`;
} else {
    descuento = 0;
    beneficiosLeyenda = `<p class="opacity-3">No tenés la tarjeta de beneficios</p>`;
};

//Genero la lista
let listado = document.querySelector("#listado");
listado.innerHTML = "";

for (const corte of listaFinal) {
    listadoItems = document.createElement("li");
    listadoItems.innerHTML =
        `<strong> ${corte.nombre}:</strong> ${corte.peso}kg<br>
    <span>(a ${new Intl.NumberFormat('es-AR', { currency: 'ARS', style: 'currency' }).format(corte.precioKilo)} el kilo, son ${new Intl.NumberFormat('es-AR',
            { currency: 'ARS', style: 'currency' }).format(corte.precioTotal)})</span>`;



    listado.appendChild(listadoItems);
    console.log(`Listado final HTML: ${listadoItems.innerHTML}`)
}

listado.innerHTML += beneficiosLeyenda;

let conclusion = document.querySelector("#conclusion");
conclusion.innerHTML = `Vas a necesitar llevar: <span>${precioFinalCurrency}</span>`;
console.log(`Vas a necesitar llevar ${precioFinalCurrency}`)

//EVENTOS
document.addEventListener('DOMContentLoaded', () => {
    precioFinal;
})
let btnVolver = document.querySelector('#btnVolver');
btnVolver.onclick = () => {
    localStorage.clear();
    window.location = "index.html";
}
