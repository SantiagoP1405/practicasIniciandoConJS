/*
1. Crear una función que muestre "¡Hola, mundo!" en la consola.
*/
function holaMundo(){
    console.log('Hola Mundo');
}

holaMundo();

/*
2. Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
*/

function holaNombre(nombre){
    console.log(`Hola ${nombre}`);
}

holaNombre('Santiago');

/*
3. Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
*/

function dobleDeUnNumero(numero){
    return numero * 2;
}

let resultadoDoble = dobleDeUnNumero(4);
console.log(resultadoDoble);

/*
4. Crear una función que reciba tres números como parámetros y devuelva su promedio.
*/

function promedioTresNumeros(numero1, numero2, numero3){
    return (numero1 + numero2 + numero3) / 3;
}

let resultadoPromedio = promedioTresNumeros (3, 4, 5);
console.log(resultadoPromedio);

/*
5. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
*/

function numeroMayor(a, b){
    return a > b ? a : b;
}

let mayor = numeroMayor(5,3);
console.log(mayor);

/*
6. Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
*/

function numeroMultiplicado(numero){
    return numero ** 2;
}

let cuadrado = numeroMultiplicado(9);
console.log(cuadrado);