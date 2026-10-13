//personaje de tv
let nombre = "Homero Simpson";
let serie = "Los Simpson";
let edad = 45;

let personaje = {
    nombre: "Homero Simpson",
    anime: "Los Simpson",
    edad: 45,
};

console.log(personaje);
console.log(personaje.nombre);

personaje.edad = 35;

let llave = edad;
personaje[llave] = 16;

delete personaje.serie; //+elimina la propiedad serie del objeto personaje

