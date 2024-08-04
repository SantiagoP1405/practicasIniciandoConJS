// --------- TITULO ---------
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';

function clickConsole(){ //Se ejecuta esa función cuando se presione el botón de Console en el HTML 
    console.log('El botón fue clicado');
}

function clickPrompt(){ //Se ejecuta esa función cuando se presione el botón de Prompt en el HTML 
    let ciudad = prompt('Dame el nombre de una ciudad en brasil');
    alert(`Estuve en ${ciudad} y me acordé de ti`);
}

function clickAlert(){ //Se ejecuta esa función cuando se presione el botón de Alert en el HTML 
    alert(`Yo amo JS`);
}

function clickSuma(){ //Se ejecuta esa función cuando se presiona el botón Suma en el HTML
    alert('Te pediré 2 números y luego te daré la suma de ambos');
    let numero1ClickSuma = parseInt(prompt('Dame el primer número'));
    let numero2ClickSuma = parseInt(prompt('Dame el segundo número'));
    alert(`La suma de ${numero1ClickSuma} y ${numero2ClickSuma} es ${numero1ClickSuma + numero2ClickSuma}`);
}


