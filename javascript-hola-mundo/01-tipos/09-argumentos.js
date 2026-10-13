function suma(a, b){
    console.log(arguments);
    return a + b;
}

suma(8); //+imprime el resultado de la funcion suma sin almacenarlo en una variable

let resultado = suma(2, 3, 4, 5, 6, 7); //+almacena el resultado de la funcion suma en la variable resultado
console.log(resultado);
console.log(typeof suma);