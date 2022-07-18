let nombre = "Comision" + " E.";
let saludo = "Les doy la bienvenida";
let fraseCompleta = saludo + nombre;

console.log(fraseCompleta);


let frase = "Javascript" + " es un lenguaje" + " esenial para crear" + " sitios web poderosos.";

console.log(frase);

let numeroString1 = "10";
let numeroString2 = "20";
let numeroString3 = "30";

let concatenaNumeros = numeroString1 + numeroString2 + numeroString3;

console.log(concatenaNumeros);

var edad = prompt("Cual es tu edad:");
console.warn(edad)

var sexo = prompt("Cual es tu sexo hombre o mujer:");
console.warn(sexo)

if (sexo == 'hombre' && edad >= 18){
    alert("Puedes entrar, eres mayor de edad.");
} 
else if (sexo == 'mujer' && edad >= 20){
    alert("Puedes entrar, eres mayor de edad.");
}
else {
    alert("No puedes entrar, eres menor de edad.");
}