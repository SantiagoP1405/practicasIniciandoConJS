/*
1. Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
*/

console.log('Bienvenido');

/*
2. Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
*/

nombre = 'Santiago';
console.log(`¡Hola, ${nombre}!`);

/*
3. Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".
*/

alert(`¡Hola, ${nombre}!`);

/*
4. Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.
*/

let lenguaje = prompt('¿Cuál es el lenguaje de programación que más te gusta?');
console.log(`El lenguaje de programación que más me gusta es ${lenguaje}.`);

/*
5. Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
*/

let valor1 = 10;
let valor2 = 4;
let resultado = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}.`);

/*
6. Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.
 */

let resultado2 = valor1 - valor2;
console.log(`La diferencia entre ${valor1} y ${valor2} es igual a ${resultado2}.`);

/*
7. Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.
*/

let edad = parseInt(prompt('¿Cuál es tu edad?'));
console.log(`Tienes ${edad} años.`);
if (edad >= 18){
    console.log('Eres mayor de edad.');
}
else{
    console.log('Eres menor de edad.');
}

/*
8. Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.
*/

let numero = parseFloat(prompt('Ingresa el número que quieras'));
if (numero > 0){
    console.log(`El número ${numero} es positivo.`);
}
else if (numero < 0){
    console.log(`El número ${numero} es negativo.`);
}
else{
    console.log(`Ingresaste el número 0`);
}

/*
9. Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
*/

let contador = 1;
while (contador <=10){
    console.log(contador);
    contador++;
}

/*
10. Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
*/

let nota = 8;
console.log(`Tu nota fue de ${nota}`);
if (nota >= 7){
    console.log('Aprobado');
}
else{
    console.log('Reprobado');
}

/*
11. Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.
*/

let aleatorio = Math.random();
console.log(`El número aleatorio fue ${aleatorio}`)

/*
12. Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.
*/

aleatorio = Math.floor(Math.random() * 10) + 1;
console.log(`El número aleatorio entre 1 y 10 fue ${aleatorio}`)

/*
13. Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.
*/

aleatorio = Math.floor(Math.random() * 1000) + 1;
console.log(`El número aleatorio entre 1 y 1000 fue ${aleatorio}`)