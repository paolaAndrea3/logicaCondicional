
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


//Ejercicio 4: Cálculo de Descuento//

let totalDeCompra = parseFloat(prompt("ingresa el total de la compra "));

if(totalDeCompra >100){
 let descuento = totalDeCompra*10 / 100;
 let descuentoFinal = totalDeCompra-descuento;
 console.log("valor a pagar con descuento es " + descuentoFinal);
}

else{
  console.log("el precio a pagar es "+ totalDeCompra)
} 


//----------------------------------------------------------------------------------

//Ejercicio 5: Comparar Dos Números

let num1 = parseInt(prompt ("ingresa el primer numero"))
let num2 = parseInt(prompt ("ingresa em segundo numero"))
if(num1>num2 ){
console.log("el numero mayor es " + num1)
}
if(num2>num1 ){
  console.log("el numero mayor es " + num2)
  }

else if (num1==num2){
  console.log("los numeros son iguales")
}

//------------------------------------------------------------------------------------


//Ejercicio 6: Clasificación por Edad //

let edadParaClasificar = prompt("ingrese su edad")

if(edadParaClasificar < 12){
console.log("Eres un niño")
}
else if (edadParaClasificar >=12 && edadParaClasificar <=17) {
  console.log("Eres un adolecente")
}
else if (edadParaClasificar >=18 && edadParaClasificar <=64) {
  console.log("Eres un adulto")
}
else if (edadParaClasificar >=65 ) {
  console.log("Eres un adulto mayor")
}

//-----------------------------------------------------------------------------------

//Ejercicio 7: Clasificación de Notas//


let notaEstudiante = prompt("ingrese su nota de 0 al 100")
 
if(notaEstudiante >= 90){
console.log("Excelente")
}
else if (notaEstudiante >=70) {
  console.log("Bueno ")
}
else if (notaEstudiante >= 50 ) {
  console.log("Regular")
}
else if (notaEstudiante < 50) {
  console.log("Insuficiente")
}

//-----------------------------------------------------------------------------------