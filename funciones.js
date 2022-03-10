//Chequeo si algún valor (peso x kilo o precio) no es un número. Si es así, lo convierte en 0
const checkIsNAN = () => {
    const valoresCeroInput = () => document.querySelector('#valoresCeroInput').innerHTML = 'Hay valores vacíos o no son números. <strong>Los tomo como ceros</strong>.';
    for (const item of asado) {
        if (isNaN(item.peso)) {
            valoresCeroInput();
            console.log(`query: ${valoresCeroInput}`);
            console.log('No ingresaste un número. Lo tomo como un 0');
            item.peso = parseFloat(0);
            item.precioTotal = parseFloat(0);
        }
        else {
            console.log('es un numero')
        }
    }
    for (const item of asado) {
        if (isNaN(item.precioKilo)) {
            valoresCeroInput();
            console.log(`query: ${valoresCeroInput}`);
            console.log('No ingresaste un número. Lo tomo como un 0');
            item.precioKilo = parseFloat(0);
            item.precioTotal = parseFloat(0);
        }
        else {
            console.log('es un numero')
        }
    }
}

//Construcción objeto CorteAsado
function CorteAsado(nombre, peso, preciokilo) {
    this.nombre = nombre;
    this.peso = peso;
    this.precioKilo = preciokilo;
    this.precioTotal = this.peso * this.precioKilo;
}

const calcularForm = () => {
    //Declaramos el array asado
    asado = []

    //Definimos variables del array
    vacioPeso = parseFloat(document.querySelector('#vacioPesoInput').value);
    costillaPeso = parseFloat(document.querySelector('#costillaPesoInput').value);
    entranaPeso = parseFloat(document.querySelector('#entranaPesoInput').value);

    vacioPrecio = parseFloat(document.querySelector('#vacioPrecioInput').value);
    costillaPrecio = parseFloat(document.querySelector('#costillaPrecioInput').value);
    entranaPrecio = parseFloat(document.querySelector('#entranaPrecioInput').value);

    carbonBoolean = document.querySelector('#carbonBooleanCheckbox').checked;
    beneficiosBoolean = document.querySelector('#beneficiosBooleanCheckbox').checked;

    //Creamos los array por corte de carne y carbon
    asado.push(new CorteAsado("Vacío", vacioPeso, vacioPrecio));
    asado.push(new CorteAsado("Costilla", costillaPeso, costillaPrecio));
    asado.push(new CorteAsado("Entraña", entranaPeso, entranaPrecio));
    asado.push(new CorteAsado("Carbón", 4, 20));

    checkIsNAN();

    //Función para sumar el array para el carbón si necesito
    if (carbonBoolean == false) {
        asado[3].peso = parseFloat(0);
        asado[3].precioTotal = parseFloat(0);
    };
}

//Función que muestra resultado
const resultado = () => {
    document.querySelector('#precioFinal').innerHTML = new Intl.NumberFormat('es-AR', { currency: 'ARS', style: 'currency' }).format(precioFinal);
    document.querySelector('#valoresCeroInput').innerHTML = '';
    document.querySelector('#alcanzaInput').innerHTML = '';

    calcularForm();

    //Declaro precios finales del asado
    vacioprecioTotal = asado[0].precioTotal;
    costillaprecioTotal = asado[1].precioTotal;
    entranaprecioTotal = asado[2].precioTotal;
    carbonprecioTotal = asado[3].precioTotal;
    asadoPrecioTotal = asado.reduce((sumas, item) => sumas + item.precioTotal, 0);
    console.log(`Mostrar totales: ${asadoPrecioTotal}`)

    //Creo un nuevo filtrando los array que no tienen un valor 0
    listaFinal = asado.filter((item) => item.peso !== 0);

    //Si tengo la tarjeta de beneficios, descuento un 20% al total
    if (beneficiosBoolean == true) {
        descuento = Math.round(asadoPrecioTotal * 100 * 0.2) / 100;
    } else {
        descuento = 0;
    };

    //Defino la constante total con el resultado final
    precioFinal = parseFloat(asadoPrecioTotal) - descuento;
    document.querySelector('#precioFinal').innerHTML = new Intl.NumberFormat('es-AR', { currency: 'ARS', style: 'currency' }).format(precioFinal);

    cuantoPesa();
    consola();
}
//Función que muestra resultado
const generarLista = () => {
    resultado();

    //STORAGE
    //Guardo el nuevo array con la lista final
    const listaToJSON = JSON.stringify(listaFinal);
    localStorage.setItem('listaFinal', listaToJSON)
    //Guardo las variables de cantidad de comensales, precio final, descuento,  precio con descuento
    localStorage.setItem('asadoPrecioTotal', asadoPrecioTotal);
    localStorage.setItem('descuento', descuento);
    localStorage.setItem('precioFinal', precioFinal);

    window.location = "lista.html";
}
