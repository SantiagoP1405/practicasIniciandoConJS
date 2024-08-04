/* 
1. Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
*/ 
let dia = prompt('¿Qué día de la semana es?'); //Variable del día
console.log('dia: ', dia);

if (dia == 'Sábado' || dia == 'Domingo'){ //Condicional para saber si es fin de semana
    alert('Buen fin de semana');
}

else{ //Si no es fin de semana
    alert('Buena semana')
}

/*
2. Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
*/

let numeroUsuario = prompt('Ingresa cualquier número que quieras, ya sea positivo, negativo o 0.'); //Variable del número de usuario
console.log('numeroUsuario: ', numeroUsuario);

if (numeroUsuario > 0){ //condicional para número positivo
    alert('Este es un número positivo');
}

else if (numeroUsuario < 0){ //condicional para número negativo
    alert('Este es un número negativo');
}

else{ //condicional para 0
    alert('Este número es 0');
}

/*
3. Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".
*/

let puntuacion = 105; //Ejemplo de puntuación
console.log('puntuacion: ', puntuacion); //manda la variable puntuacion a la consola
alert(`Tu puntuación es de ${puntuacion} puntos`); //manda a imprimir su puntuación

if (puntuacion >= 100){ //condicional para cuando gana
    alert('¡Felicidades, has ganado!');
    console.log('Ganó'); //añade su estatus a la consola
}

else{
    alert('Inténtalo nuevamente para ganar'); //condicional para cuando pierde
    console.log('Perdió');
}

/*
4. Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
*/
let saldo = 5000; //ejemplo de saldo
console.log('saldo: ', saldo); //añade la variable saldo a la consola
alert(`El saldo de tu cuenta es de ${saldo} MXN`); //mensaje con template string

/*
5. Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
*/
let nombre = prompt('Ingresa tu nombre: '); //variable que pide al usuario ingresar su nombre en un prompt
console.log('nombre:', nombre); //añade la variable nombre a la consola
alert(`Bienvenido, ${nombre}.`);




