//Mensaje y calculo de cantidad de comensales
const cuantosSomosSelect = document.querySelector("#cuantosSomosSelect");

//Declaro la variable individual del peso por persona
let pesoXPersona = 0.450;
let cuantosSomosPeso = pesoXPersona;

//Declaro variable del input y hago que escuche el evento
let cuantosSomosInput = document.querySelector('#cuantosSomosInput').innerHTML;
cuantosSomosSelect.addEventListener('input', () => {
    console.log(cuantosSomosSelect.value);
    cuantosSomosPeso = pesoXPersona * cuantosSomosSelect.value;
    console.log(cuantosSomosPeso);
    document.querySelector('#cuantosSomosInput').innerHTML = `Vamos a necesitar comprar, por lo menos <strong>${cuantosSomosPeso}kg</strong> en total.`;
    resultado();
});

//Mensaje check si alcanza la cantidad en kg
const cuantosSomos = document.querySelector("#cuantosSomos");
const cuantoPesa = () => {
    let pesoCarbon = asado[3].peso;
    let totalPeso = asado.reduce((sumas, item) => sumas + item.peso, 0);
    let totalPesoSinCarbon = totalPeso - pesoCarbon;
    console.log(`pesoCarbon: ${pesoCarbon}`);
    console.log(`totalPeso: ${totalPeso}`);
    console.log(`totalPesoSinCarbon: ${totalPesoSinCarbon}`);
    console.log(`cuantosSomosPeso: ${cuantosSomosPeso}`);

    if (totalPesoSinCarbon >= cuantosSomosPeso) {
        document.querySelector('#alcanzaInput').innerHTML = '';
        console.log('Alcanza');
        document.querySelector('#btnCalcular').disabled = false;
    } else {
        document.querySelector('#alcanzaInput').innerHTML = `Somos <strong>${cuantosSomosSelect.value}</strong>, necesitamos <strong>${cuantosSomosPeso}kg</strong> y estamos comprando <strong>${totalPesoSinCarbon}kg</strong>. ¡NO ALCANZA!`;
        console.log('No alcanza');
        document.querySelector('#btnCalcular').disabled = true;
    }
}

//Hago que vuelva a tomar la variable de los input y que escuche el evento
vacioPeso = document.getElementById("vacioPesoInput");
vacioPeso.addEventListener('input', () => {
    console.log(parseFloat(vacioPeso.value));
    resultado();
});
vacioPrecio = document.getElementById("vacioPrecioInput");
vacioPrecio.addEventListener('input', () => {
    console.log(parseFloat(vacioPrecio.value));
    resultado();
});

costillaPeso = document.getElementById("costillaPesoInput");
costillaPeso.addEventListener('input', () => {
    console.log(parseFloat(costillaPeso.value));
    resultado();
});
costillaPrecio = document.getElementById("costillaPrecioInput");
costillaPrecio.addEventListener('input', () => {
    console.log(parseFloat(costillaPrecio.value));
    resultado();
});

entranaPeso = document.getElementById("entranaPesoInput");
entranaPeso.addEventListener('input', () => {
    console.log(parseFloat(entranaPeso.value));
    resultado();
});
entranaPrecio = document.getElementById("entranaPrecioInput");
entranaPrecio.addEventListener('input', () => {
    console.log(parseFloat(entranaPrecio.value));
    resultado();
});

carbonBoolean = document.getElementById("carbonBooleanCheckbox");
carbonBoolean.addEventListener('input', () => {
    console.log(carbonBoolean.checked);
    resultado();
});
beneficiosBoolean = document.getElementById("beneficiosBooleanCheckbox");
beneficiosBoolean.addEventListener('input', () => {
    console.log(beneficiosBoolean.checked);
    resultado();
});
