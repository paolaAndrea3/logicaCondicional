
//Ejercicio 1: Comparar Edad //

let edad = prompt("ingrese su edad")
let edadNumerica = parseInt(edad);
if (edad >= 18) {
  console.log("Eres mayor de edad")
}
else {
  console.log("Eres menor de edad")

}

//----------------------------------------------------------------------------


//Ejercicio 2:  Número Positivo o Negativo//

let numberUsuario = parseInt(prompt("ingrese un numero"));

if (numberUsuario >= 0) {
  console.log("El numero es positivo")
}
else {
  console.log("El numero es negativo")

}

//-------------------------------------------------------------------------------


//Ejercicio 3: Par o Impar//

let numberParInpar = parseInt(prompt("ingresa un numero"));
if (numberParInpar % 2 === 0) {
  console.log("El numero es par")
}
else {
  console.log("El numero es impar")
}

//--------------------------------------------------------------------------------