/*
1. Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
*/

let contador = 1;
while (contador <= 10){
    console.log(contador);
    contador++;
}
console.log('---------------------------------');

/*
2. Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
*/

contador = 10;
while (contador >= 0){
    console.log(contador);
    contador--;
}
console.log('---------------------------------');

/* 
3. Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
*/

let numeroMaximo = prompt('Dame un número para el contador. Primero aparecerá la cuenta progresiva desde 0 hasta ese número, y luego una cuenta regresiva desde ese número hasta 0: ')
contador = 0;
while(contador <= numeroMaximo){
    console.log(contador);
    contador++
}
console.log('---------------------------------');

/*
4. Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
*/ 
while(numeroMaximo >=0){
    console.log(numeroMaximo);
    numeroMaximo--;
}