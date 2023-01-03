/**
* * Bienvenidos a la segunda parte del desafío E-Contact, la cual esta destinada a evaluar los conocimientos adquiridos de Javascript.
* * Este prueba constará de 20 ejercicios

* * NOTA1: El examen es individual
* * NOTA2: Fecha límite de entrega: Miércoles 11/01/2023 - 23:59hs

* * INFORMACION SOBRE EL DESARROLLO DE LOS EJERCICIOS:
* * Algunos ejercicios no tendrán que operar con el arreglo u objeto establecido a continuación, otros sí.
* * NO MODIFICAR el arreglo y objeto definido a continuación:
* * (Los datos son ficticios. El objeto es evaluar los conocimientos del alumno)
*/

const arregloFijo = [1, 3, 4, 7, 12, 18, 20, 26];
const numerosReales = [34.4552, 25.1543, 17.9438, 90.5, 67.82, 5, 9.99, 62.037];

const objetoFijo = {
  empresa: "E-Contact",
  datos: {
    empleados: 100,
    direccion: {
      calle: "Calle Córdoba",
      numero: 476,
      piso: 3,
    },
    sectores: [
      "Contabilidad",
      "Finanzas",
      "Informática",
      "Atención al público",
    ],
    sedes: {
      Chile: { telefono: 56227566262, empleados: 35 },
      Peru: { telefono: 5116358614, empleados: 25 },
      EEUU: { telefono: 17864978777, empleados: 43 },
      Ecuador: { telefono: null, empleados: 19 },
      Colombia: { telefono: 3178952449, empleados: 28 },
    },
  },
};

//? ================================= INICIO DEL DESAFIO. EXITOS A TODOS !!! =============================================================================

/**
 *? EJERCICIO 1: Crear una función la cual reciba un parámetro de tipo string con el nombre de la persona y retornar un nuevo string
 *? dependiendo del largo del nombre:
 *? Si el largo se encuentra entre 0 y 5 retornar "Es un nombre corto. Su largo es de: "
 *? Si el largo es 11 o mayor retornar "Es un nombre largo. Su largo es de: "
 *? IMPORTANTE: validar que el parámetro recibido sea un string al inicio de la función, de lo contrario, retornar "El parámetro recibido es invalido"
 *? RECORDATORIO: al leer la sentencia "return" termina la ejecución de la función.
 */

function largoDelNombre(nombre = "") {
  if (typeof nombre !== "string") {
    return "El parámetro recibido es inválido";
  }

  if (nombre.length > 0 && nombre.length <= 5) {
    return `Es un nombre corto. Su largo es de: ${nombre.length}`;
  } else if (nombre.length >= 11) {
    return `Es un nombre largo. Su largo es de: ${nombre.length}`;
  }else if (nombre.length > 5 && nombre.length < 11) {
    return `El nombre no tiene un largo determinado por el ejercicio. Su largo es de: ${nombre.length}`;
  }
}
console.log("---------------------------------");
console.log("ejercicio 1");
console.log(largoDelNombre("johnny"));



//! =======================================================================================================================================================

/**
 *? EJERCICIO 2: Crear una función que reciba un arreglo como parámetro y cuente cuantos valores de tipo "number" se encuentran dentro de dicho arreglo
 */

function contarTipoNumber(arreglo = []) {
  let contador = 0;
  for (let i = 0; i < arreglo.length; i++) {
    if (typeof arreglo[i] === "number") {
      contador++;
    }
  }
  return contador;
}
console.log("---------------------------------");
console.log("ejercicio 2");
console.log(contarTipoNumber([1, 2, 3, 4, 5, "hola", "chao", 6, 7, 8, 9,14, 10]));

//! =======================================================================================================================================================

/**
 *? EJERCICIO 3: Crear una función que reciba un objeto como parámetro con los claves nombre, edad y altura, y retornar un string usando template literals
 *? con el siguiente formato: "Esta persona se llama XXX, tiene XXX años y su altura es de XXX"
 *? NOTA: Desestructurar los valores del objeto antes de utilizarlos
 */

function datosPersona(persona = {}) {
  const { nombre, edad, altura } = persona;
  return `Esta persona se llama ${nombre}, tiene ${edad} años y su altura es de ${altura}`;
}
console.log("---------------------------------");
console.log("ejercicio 3");
console.log(datosPersona({ nombre: "johnny", edad: 25, altura: 1.75 }));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 4: Crear una función que reciba 2 (dos) parámetros de tipo "number" con el inicio y fin del rango a operar. Evaluar cuántos números dentro de
 *? ese rango son "pares". Luego, retornar un string con la frase "La cantidad de números pares obtenido fue de: "
 *?
 */

function obtenerCantidadDePares(numero1, numero2) {
  let contador = 0;
  for (let i = numero1; i <= numero2; i++) {
    if (i % 2 === 0) {
      contador++;
    }
  }
  return `La cantidad de números pares obtenido fue de: ${contador}`;
}
console.log("---------------------------------");
console.log("ejercicio 4");
console.log(obtenerCantidadDePares(1, 10));

//! =======================================================================================================================================================

/**
 *? EJERCICIO 5: Crear una función que reciba el "objetoFijo" definido al inicio y retornar la "cantidad" de sedes que posee.
 *? Ayuda inicial: Primero asegurarse de obtener correctamente el objeto "sedes"
 *? De ser necesario utilizar un "contador" (no es obligatorio para su resolución)
 *? Recordar el método "Object.keys(nombreDelObjeto)" nos devuelve un arreglo de strings con los claves del objeto.
 *?
 */

function obtenerCantidadDeSedes(econtact = {}) {
  const {datos} = econtact;
  const { sedes } = datos;
  const arregloDeSedes = Object.keys(sedes);
  return arregloDeSedes.length;
}
console.log("---------------------------------");
console.log("ejercicio 5");
console.log("sedes "+obtenerCantidadDeSedes(objetoFijo));

//! =======================================================================================================================================================

/**
 *? EJERCICIO 6: Crear una función que reciba el "objetoFijo" definido al inicio y retornar el teléfono de "Peru".
 *? Validar al inicio de la función si el teléfono de Perú existe. Caso contrario retornar un string que diga "Perú no tiene asignado un teléfono"
 */

function obtenerTelefonoPeru(econtact = {}) {
  const {datos} = econtact;
  const { sedes } = datos;
  const { Peru } = sedes;
  const { telefono } = Peru;
  if (telefono) {
    return telefono;
  } else {
    return "Perú no tiene asignado un teléfono";
  }
}
console.log("---------------------------------");
console.log("ejercicio 6");
console.log(obtenerTelefonoPeru(objetoFijo));

//! =======================================================================================================================================================

/**
 *? EJERCICIO 7: Crear una función que reciba el "objetoFijo" definido al inicio y retornar la cantidad de paises que cuentan con telefono asignado
 *?
 */

function obtenerPaisesConTelefono(econtact = {}) {
  const {datos} = econtact;
  const { sedes } = datos;
  const arregloDeSedes = Object.keys(sedes);
  let contador = 0;
  for (let i = 0; i < arregloDeSedes.length; i++) {
    if (sedes[arregloDeSedes[i]].telefono) {
      contador++;
    }
  }
  return contador;
}
console.log("---------------------------------");
console.log("ejercicio 7");
console.log(obtenerPaisesConTelefono(objetoFijo));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 8: Crear una función que reciba 3 (tres) parámetros: uno de tipo "string" con la operación matemática a realizar,
 *? un segundo y tercer parámetro ambos de tipo number. Dependiendo de ello realizar la operación correspondiente y retornar el resultado de esa operación.
 *? Los valores permitidos a recibir son:
 *? "+"
 *? "-"
 *? "*"
 *? "/"
 *? En caso contrario, retornar un string con la frase "La operación matemática que intenta realizar es inexistente"
 */

function calculoMatematico(operacion, numero1, numero2) {
  switch (operacion) {
    case "+":
      return numero1 + numero2;
    case "-":
      return numero1 - numero2;
    case "*":
      return numero1 * numero2;
    case "/":
      return numero1 / numero2;
    default:
      return "La operación matemática que intenta realizar es inexistente";
  }
}
console.log("---------------------------------");
console.log("ejercicio 8");
console.log(calculoMatematico("+", 1, 2));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 9: Crear una función que reciba un número como parámetro y, a partir de ahi, ir agregando ese mismo valor y los siguientes a un arreglo hasta que
 *? el número a ser evaluado sea igual al doble de ese número recibido como parámetro
 *? Validar al inicio de la función que el número sea positivo. De lo contrario retornar la frase "El número ingresado debe ser mayor a 0"
 *? Ayuda: usar ciclo while y recordar el método "push" para ir agregando valores al arreglo
 */

function cargarArreglo(numero) {
  if (numero > 0) {
    let arreglo = [];
    let i = numero;
    while (i <= numero * 2) {
      arreglo.push(i);
      i++;
    }
    return arreglo;
  } else {
    return "El número ingresado debe ser mayor a 0";
  }
}
console.log("---------------------------------");
console.log("ejercicio 9");
console.log(cargarArreglo(5));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 10: Crear una función que reciba un arreglo de números como parámetro y calcule cuántos de esos números son divisibles por 5.
 *? La función debe retornar la cantidad de números divisibles por 5.
 *?  Ayuda: Usar el operador módulo (o resto) "%"
 */

function divisiblesPorCinco(numeros = []) {
  let contador = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 5 === 0) {
      contador++;
    }
  }
  return contador;
}
console.log("---------------------------------");
console.log("ejercicio 10");
console.log(divisiblesPorCinco([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 11: Crear una función que reciba un arreglo de números y realice la sumatoria de los mismos.
 *? La función debe retornar la sumatoria de esos números.
 *?
 */

function sumatoria(numeros = []) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  return suma;
}
console.log("---------------------------------");
console.log("ejercicio 11");
console.log(sumatoria([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//! =======================================================================================================================================================

/**
 *? EJERCICIO 12: Crear una función que reciba el "objetoFijo" definido al inicio y verificar si la cantidad total de empleados de E-Contact indicada (100) es igual
 *? a la sumatoria de los empleados de las sedes.
 *? La función debe retornar True si son iguales, o False en caso de no ser iguales
 */

function CantidadEmpleados(econtact = {}) {
  let contador = 0;
  const arregloDeSedes = Object.keys(econtact.datos.sedes);
  for (let i = 0; i < arregloDeSedes.length; i++) {
    contador += econtact.datos.sedes[arregloDeSedes[i]].empleados;
  }
  return contador === 100;

}
console.log("---------------------------------");
console.log("ejercicio 12");
console.log(CantidadEmpleados(objetoFijo));

//! =======================================================================================================================================================

/**
 *? EJERCICIO 13: Crear una función que retorne un nuevo arreglo con el cuadrado de cada número del "arregloFijo" definido al inicio
 *? Ayuda: para calcular el cuadrado de un número podemos usar la expresión "**" o la clase "Math" con su método "pow". Ver ejemplos a continuación:
 *? Ejemplo de 3 al cuadrado:
 *? console.log(3 ** 2)
 *? Ejemplo de 5 al cuadrado:
 *? console.log(Math.pow(5, 2))
 */

function calcularCuadrados(arreglo = []) {
  let arregloCuadrados = [];
  for (let i = 0; i < arreglo.length; i++) {
    arregloCuadrados.push(arreglo[i] ** 2);
  }
  return arregloCuadrados;
}
console.log("---------------------------------");
console.log("ejercicio 13");
console.log(calcularCuadrados(arregloFijo));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 14: Crear una función que reciba como parámetro un arreglo de 6 (seis) números como mínimo y realizar la sumatoria de los mismos.
 *? Si la sumatoria supera un valor de 100 retornar True.
 *? Caso contrario retornar False.
 *? Validar al inicio de la función que el arreglo cuente con la condición establecida. Si no cumple la misma, retornar False
 */

function validarArreglo(numeros = []) {
  if (numeros.length < 6) {
    return false;
  }
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  return suma > 100;
}
console.log("---------------------------------");
console.log("ejercicio 14");
console.log(validarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 15: Crear una función que reciba dos parámetros: un arreglo de strings con diferentes nombres, y un segundo parámetro con un nombre (string) cualquiera.
 *? La función debe retornar True si en ese arreglo se encuentra el nombre pasado como segundo parámetro. Caso contrario retornar False.
 *? Recordar que Javascript es "Case Sensitive", es decir, distingue entre mayúsculas y minúsculas.
 */

function validarNombre(nombres = [], nombre) {
  for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] === nombre) {
      return true;
    }
  }
  return false;
}
console.log("---------------------------------");
console.log("ejercicio 15");
console.log(validarNombre(["Juan", "Pedro", "Maria", "Jose","Johnny"], "Johnny"));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 16: Crear una función que reciba 2 (dos) parámetros: un arreglo de números y número. La función debe retornar la posición de ese valor en el arreglo
 */

function devolverPosicion(numeros = [], numero) {
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === numero) {
      return i;
    }
  }
  return -1;
}
console.log("---------------------------------");
console.log("ejercicio 16");
console.log(devolverPosicion([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 17: Crear una función que reciba 2 (dos) parámetros: el "objetoFijo" definido al inicio y un string. Retornar True si el segundo parámetro se encuentra
 *? dentro de los sectores de E-Contact. Caso contrario, retornar False
 */

function verificarSector(econtact = {}, sector) {
  for (let i = 0; i < econtact.datos.sectores.length; i++) {
    if (econtact.datos.sectores[i] === sector) {
      return true;
    }
  }
  return false;

}
console.log("---------------------------------");
console.log("ejercicio 17");
console.log(verificarSector(objetoFijo, "Finanzass"));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 18: Crear una función que reciba 2 (dos) parámetros: el "objetoFijo" definido al inicio y un número (cantidad de empleados).
 *? La función debe retornar la cantidad de sedes que tengan una cantidad de empleados menor a la cantidad establecida como segundo parámetro.
 */

function verificarCantidadEmpleados(econtact = {}, cantidad) {
  let cantidadSedes = 0;
  const arregloDeSedes = Object.keys(econtact.datos.sedes);
  for (let i = 0; i < arregloDeSedes.length; i++) {
    if (econtact.datos.sedes[arregloDeSedes[i]].empleados < cantidad) {
      cantidadSedes++;
    }
  }
return cantidadSedes;
}
console.log("---------------------------------");
console.log("ejercicio 18");
console.log(verificarCantidadEmpleados(objetoFijo, 20));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 19: Crear una función que reciba 2 (dos) parámetros: un objeto y un string (clave a verificar). Si el objeto cuenta con la clave que se solicita
 *? como segundo parámetro, retornar True. Caso contrario retornar False.
 *? Ejemplo: El siguiente objeto cuenta con las claves nombre, edad y profesion. PERO no cuenta con la clave "altura" por ejemplo.
 *? const alumno = { nombre: 'Juan', edad: 35, profesion: 'programador' }
 *?
 */

function verificarClave(objeto = {}, clave) {
  const arregloDeClaves = Object.keys(objeto);
  for (let i = 0; i < arregloDeClaves.length; i++) {
    if (arregloDeClaves[i] === clave) {
      return true;
    }
  }
  return false;
}
console.log("---------------------------------");
console.log("ejercicio 19");
console.log(verificarClave({ nombre: "Juan", edad: 35, profesion: "programador" }, "altura"));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 20: Crear una función que reciba un arreglo de numeros reales y retornar un nuevo arreglo con los mismos numeros pero quitando su parte decimal.
 *? Recordatorio: al inicio hay un arreglo de numeros reales como ejemplo.
 */

function quitarParteDecimal(arregloNumerosReales = []) {
  const nuevoArreglo = [];
  for (let i = 0; i < arregloNumerosReales.length; i++) {
    nuevoArreglo.push(Math.trunc(arregloNumerosReales[i]));
  }
  return nuevoArreglo;
}
console.log("---------------------------------");
console.log("ejercicio 20");
console.log(quitarParteDecimal(numerosReales));
