/*
1. Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
*/

function calcularIMC(peso, altura){
    let imc = peso / (altura**2);
    return imc;
}

console.log(`Mi índice de masa corporal es de ${calcularIMC(61,1.72)} kg/m^2`);

/*
2.Crea una función que calcule el valor del factorial de un número pasado como parámetro.
*/
function calcularFactorial(numero) {
    if (numero < 0) {
        return "El factorial no está definido para números negativos.";
    }
    let resultado = 1; 
    for (let i = numero; i > 0; i--) {
        resultado *= i; 
    return resultado; 
}
}

let numero = 5;
console.log(`El factorial de ${numero} es ${calcularFactorial(numero)}`);

/*
3. Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
*/

function dolarAPesos(dolar){
    let dolarPesos = 17.66;
    let pesos = dolar * dolarPesos;
    return pesos;
}

let dolar = 50;
console.log(`$${dolar} dólares equivalen a $${dolarAPesos(dolar)} pesos`);

/*
4. Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
*/

function areaPerimetroRectangular(altura, anchura){
    let area = altura*anchura;
    let perimetro = (altura*2) + (anchura*2);
    console.log(`Una sala de ${altura} m de largo y de ${anchura} m de largo tiene un área de ${area} m^2 y un perímetro de ${perimetro} m.`);    
}

areaPerimetroRectangular(5,8);

/*
5. Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
*/

function areaPerimetroCircular(radio){
    let pi = 3.14;
    let area = pi*(radio ** 2);
    let perimetro = pi * (2 * radio);
    console.log(`Considerando pi como ${pi}, un círculo con radio de ${radio} metros, tiene un área de ${area} m^2, y un perímetro de ${perimetro} m.`)
}

areaPerimetroCircular(6);

/*
6. Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
*/

function tablaDeMultiplicar(numero){
    console.log(`La tabla de multiplicar del ${numero} es:`);
    for(let i = 1; i < 11; i++){
        console.log(`${numero} * ${i} = ${numero*i}`);
    }
}

tablaDeMultiplicar(6);
