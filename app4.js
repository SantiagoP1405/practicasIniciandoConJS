/*
1. Crea una lista vacía llamada "listaGenerica".
*/

let listaGenerica = [];

/*
2. Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'. 
*/

let lenguagesDeProgramacion = ['JavaScript','C','C++','Kotlin','Python'];

/*
3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
*/

lenguagesDeProgramacion.push('Java','Ruby','GoLang');

/*
4. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
*/

function mostrarLenguajesDeProgramacion(){
    for (let i = 0; i < lenguagesDeProgramacion.length ; i++){
        console.log(lenguagesDeProgramacion[i]);
    }
}

mostrarLenguajesDeProgramacion();

/*
5. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
*/

function mostrarLenguajesDeProgramacionInverso(){
    for (let i = lenguagesDeProgramacion.length -1 ; i >=0 ; i--){
        console.log(lenguagesDeProgramacion[i]);
    }
}

mostrarLenguajesDeProgramacionInverso();

/*
6. Crea una función que calcule el promedio de los elementos en una lista de números.
*/

function promedio(lista){
    let contador = 0;
    for (let i = 0; i < lista.length ; i++){
        contador += lista[i];
    }

    return contador / lista.length;
}

let promedioLista = [10,20,30];
console.log(promedio(promedioLista));

/*
7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
*/

function mayorMenor(lista){
    let mayor = lista[0];
    let menor = lista[0];

    for (let i = 0 ; i < lista.length ; i++){
        if (lista[i] > mayor){
            mayor = lista[i];
        }

        if (lista[i] < menor){
            menor = lista[i];
        }
    }

    console.log(`El número mayor de la lista es ${mayor}, y el menor es ${menor}`);
}

let lista = [15, 8, 25, 5, 12];
console.log(mayorMenor(lista));

/*
8. Crea una función que devuelva la suma de todos los elementos en una lista.
*/

function sumaLista(lista){
    let suma = 0;

    for (i = 0 ; i < lista.length ; i++){
        suma += lista[i];
    }
    
    return suma;
}

console.log(sumaLista(lista));

/*
9. Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
*/

function encontrarIndiceElemento(lista, elemento) {
    if (lista.includes(elemento)){
        console.log(elemento);
    }

    else{
        console.log(-1);
    }

}

let list = [1,2,3,4,5];
encontrarIndiceElemento(list,2);
encontrarIndiceElemento(list,6);

/*
10. Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
*/

function sumaDeDosListas(lista1, lista2){
    let nuevaLista = [];
    let suma = 0;
    for (i = 0 ; i < lista1.length ; i++){
        suma = lista1[i] + lista2[i];
        nuevaLista.push(suma);
    }

    return console.log(nuevaLista);
}

let lista1 = [1,2,3,4,5];
let lista2 = [9,8,7,6,5];

sumaDeDosListas(lista1,lista2);

/*
11. Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
*/

function cuadradoDeUnaLista(lista){
    let nuevaLista = [];
    for (i = 0 ; i < lista.length ; i++){
        nuevaLista.push(lista[i]**2);
    }

    return console.log(nuevaLista);
}

let listaCuadrado = [2,4,6,8,10];
cuadradoDeUnaLista(listaCuadrado);
