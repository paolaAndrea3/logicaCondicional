
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

//Ejercicio 8: Elección de Menú//
let menu = parseInt(prompt("elija una opcion de menu: 1-pizza  2-Hamburguesa  3-Tacos"))
 

switch (menu) {
  case 1:
    console.log("Has escogido la Pizza");
    break;
  case 2:
    console.log("Has escojido la Hamburguesa");
    break;
  case 3:
    console.log("Has escojido los Tacos");
    break;
     Tacos;
  default:
    console.log("opcion no valida")
    break;
}
//-----------------------------------------------------------------------------------

//Ejercicio 9: Tipo de Triángulo //


let ladoUno = parseInt(prompt("ingresa lado uno del triangulo"));
let ladoDos  = parseInt(prompt("ingresa lado dos del triangulo"));
let ladoTres  = parseInt(prompt("ingresa lado tres del triangulo"));

if(ladoUno==ladoDos && ladoDos==ladoTres){
 console.log("el triangulo es equilatero")
}
else if (ladoUno==ladoDos || ladoDos==ladoTres || ladoUno==ladoTres){
  console.log("el triangulo es isosceles")
}
else{
  console.log("el triangulo es escaleno")

}


//-----------------------------------------------------------------------------------


//Ejercicio 10: Adivinar un Número //

let numeroAleatorio = Math.floor(Math.random() * 10) + 1;

let adivinanzaUsuario = parseInt(prompt("Adivina un número entre 1 y 10."));

if (adivinanzaUsuario === numeroAleatorio) {
    alert("¡Has acertado!");
} else {
    alert("Intenta de nuevo.");
}

//-----------------------------------------------------------------------------------

//Ejercicio 11: Cálculo del Precio Final //

let precioBase = parseFloat(prompt("Ingrese el precio base del producto:"));

let descuento;

if (precioBase > 500) {
    descuento = precioBase * 0.15; 
} else if (precioBase >= 300) {
    descuento = precioBase * 0.10; 
} else {
    descuento = precioBase * 0.05; 
}

let precioFinal = precioBase - descuento;

console.log("El precio final después del descuento es: " + precioFinal);


//-----------------------------------------------------------------------------------

//Ejercicio 12: Verificar el Año Bisiesto //
let año = parseInt(prompt("Ingrese un año para verificar si es bisiesto:"));

if (año % 4 === 0 && año % 100 !== 0) {
    console.log(año + " es bisiesto.");
} else if (año % 400 === 0) {
    console.log(año + " es bisiesto.");
} else {
    console.log(año + " no es bisiesto.");
}


//-----------------------------------------------------------------------------------

//Ejercicio 13: Autenticación de Usuario //

let UsuarioAdm = prompt("Ingrese su nombre de usuario")
let UsuarioCrontraseña = prompt("Ingrese su contraseña")

if (UsuarioAdm == "admin" && UsuarioCrontraseña == "1234") {
  console.log("Acceso consedido")
}
else{
  console.log("Acceso denegado")

}

//-----------------------------------------------------------------------------------

//Ejercicio 14: Determinar Horario del Día//
let horaIngresadaUsuario = parseInt(prompt("inresa una hora de 0 a 23hrs"))

if (horaIngresadaUsuario >= 6 && horaIngresadaUsuario<12) {
  console.log("Buenos dias")
}
else if (horaIngresadaUsuario >= 12 && horaIngresadaUsuario <
  18) {
    console.log("Buenas tardes")

}
else if (horaIngresadaUsuario >=18 && horaIngresadaUsuario<=24 || horaIngresadaUsuario>=0 || horaIngresadaUsuario<=6) {
  console.log("Buenas noches")
 
}


//-----------------------------------------------------------------------------------