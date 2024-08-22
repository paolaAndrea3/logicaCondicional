

do {
  console.clear(); // Limpia la consola antes de mostrar el menú nuevamente
  console.log("Menú de Ejercicios:");
  console.log("1. Comparar Edad");
  console.log("2. Número Positivo o Negativo");
  console.log("3. Par o Impar");
  console.log("4. Cálculo de Descuento");
  console.log("5. Comparar Dos Números");
  console.log("6. Clasificación por Edad");
  console.log("7. Clasificación de Notas");
  console.log("8. Elección de Menú");
  console.log("9. Tipo de Triángulo");
  console.log("10. Adivinar un Número");
  console.log("11. Cálculo del Precio Final");
  console.log("12. Verificar el Año Bisiesto");
  console.log("13. Autenticación de Usuario");
  console.log("14. Determinar Horario del Día");
  console.log("15. Clasificación de Masa Corporal");
  console.log("16. Salir");

  let opcion = parseInt(prompt("Seleccione una opción del menú (1-16):"));

  switch (opcion) {
    case 1:
      // Código del Ejercicio 1
      let edad = prompt("Ingrese su edad");
      let edadNumerica = parseInt(edad);
      if (edadNumerica >= 18) {
        console.log("Eres mayor de edad");
      } else {
        console.log("Eres menor de edad");
      }
      break;
    case 2:
      // Código del Ejercicio 2
      let numberUsuario = parseInt(prompt("Ingrese un número"));
      if (numberUsuario >= 0) {
        console.log("El número es positivo");
      } else {
        console.log("El número es negativo");
      }
      break;
    case 3:
      // Código del Ejercicio 3
      let numberParInpar = parseInt(prompt("Ingresa un número"));
      if (numberParInpar % 2 === 0) {
        console.log("El número es par");
      } else {
        console.log("El número es impar");
      }
      break;
    case 4:
      // Código del Ejercicio 4
      let totalDeCompra = parseFloat(prompt("Ingrese el total de la compra "));
      if (totalDeCompra > 100) {
        let descuento = totalDeCompra * 10 / 100;
        let descuentoFinal = totalDeCompra - descuento;
        console.log("Valor a pagar con descuento es " + descuentoFinal);
      } else {
        console.log("El precio a pagar es " + totalDeCompra);
      }
      break;
    case 5:
      // Código del Ejercicio 5
      let num1 = parseInt(prompt("Ingrese el primer número"));
      let num2 = parseInt(prompt("Ingrese el segundo número"));
      if (num1 > num2) {
        console.log("El número mayor es " + num1);
      } else if (num2 > num1) {
        console.log("El número mayor es " + num2);
      } else {
        console.log("Los números son iguales");
      }
      break;
    case 6:
      // Código del Ejercicio 6
      let edadParaClasificar = prompt("Ingrese su edad");
      if (edadParaClasificar < 12) {
        console.log("Eres un niño");
      } else if (edadParaClasificar >= 12 && edadParaClasificar <= 17) {
        console.log("Eres un adolescente");
      } else if (edadParaClasificar >= 18 && edadParaClasificar <= 64) {
        console.log("Eres un adulto");
      } else if (edadParaClasificar >= 65) {
        console.log("Eres un adulto mayor");
      }
      break;
    case 7:
      // Código del Ejercicio 7
      let notaEstudiante = prompt("Ingrese su nota de 0 al 100");
      if (notaEstudiante >= 90) {
        console.log("Excelente");
      } else if (notaEstudiante >= 70) {
        console.log("Bueno ");
      } else if (notaEstudiante >= 50) {
        console.log("Regular");
      } else if (notaEstudiante < 50) {
        console.log("Insuficiente");
      }
      break;
    case 8:
      // Código del Ejercicio 8
      let menu = parseInt(prompt("Elige una opción de menú: 1-Pizza  2-Hamburguesa  3-Tacos"));
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
        default:
          console.log("Opción no válida");
          break;
      }
      break;
    case 9:
      // Código del Ejercicio 9
      let ladoUno = parseInt(prompt("Ingrese lado uno del triángulo"));
      let ladoDos = parseInt(prompt("Ingrese lado dos del triángulo"));
      let ladoTres = parseInt(prompt("Ingrese lado tres del triángulo"));
      if (ladoUno == ladoDos && ladoDos == ladoTres) {
        console.log("El triángulo es equilátero");
      } else if (ladoUno == ladoDos || ladoDos == ladoTres || ladoUno == ladoTres) {
        console.log("El triángulo es isósceles");
      } else {
        console.log("El triángulo es escaleno");
      }
      break;
    case 10:
      // Código del Ejercicio 10
      let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
      let adivinanzaUsuario = parseInt(prompt("Adivina un número entre 1 y 10."));
      if (adivinanzaUsuario === numeroAleatorio) {
        alert("¡Has acertado!");
      } else {
        alert("Intenta de nuevo.");
      }
      break;
    case 11:
      // Código del Ejercicio 11
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
      break;
    case 12:
      // Código del Ejercicio 12
      let año = parseInt(prompt("Ingrese un año para verificar si es bisiesto:"));
      if (año % 4 === 0 && año % 100 !== 0) {
        console.log(año + " es bisiesto.");
      } else if (año % 400 === 0) {
        console.log(año + " es bisiesto.");
      } else {
        console.log(año + " no es bisiesto.");
      }
      break;
    case 13:
      // Código del Ejercicio 13
      let UsuarioAdm = prompt("Ingrese su nombre de usuario");
      let UsuarioContraseña = prompt("Ingrese su contraseña");
      if (UsuarioAdm == "admin" && UsuarioContraseña == "1234") {
        console.log("Acceso concedido");
      } else {
        console.log("Acceso denegado");
      }
      break;
    case 14:
      // Código del Ejercicio 14
      let horaIngresadaUsuario = parseInt(prompt("Ingrese una hora de 0 a 23 hrs"));
      if (horaIngresadaUsuario >= 6 && horaIngresadaUsuario < 12) {
        console.log("Buenos días");
      } else if (horaIngresadaUsuario >= 12 && horaIngresadaUsuario < 18) {
        console.log("Buenas tardes");
      } else if (horaIngresadaUsuario >= 18 && horaIngresadaUsuario <= 24 || horaIngresadaUsuario >= 0 || horaIngresadaUsuario <= 6) {
        console.log("Buenas noches");
      }
      break;
    case 15:
      // Código del Ejercicio 15
      let peso = parseFloat(prompt("Ingrese su peso en kilogramos:"));
      let altura = parseFloat(prompt("Ingrese su altura en metros:"));
      let imc = peso / (altura * altura);
      if (imc < 18.5) {
        console.log("Bajo peso");
      } else if (imc >= 18.5 && imc <= 24.9) {
        console.log("Peso normal");
      } else if (imc >= 25 && imc <= 29.9) {
        console.log("Sobrepeso");
      } else if (imc > 30) {
        console.log("Obesidad");
      }
      break;
    case 16:
      console.log("Saliendo...");
      break;
    default:
      console.log("Opción no válida");
  }
} while (opcion != 16);
//---------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
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

