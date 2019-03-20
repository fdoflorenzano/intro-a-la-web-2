// Definiedo variables
const numero = 1005;
const curso = 'Computación: Ciencia y ...';
let hora = 10;
hora = 11; // Con let, puedo editar el valor.
// La siguente línea arroja un error, descomentar para ver.
// numero = 1006;
// Una constante, ¡debería ser constante!


// // Control de flujo
// const cierto = true;
// const falso = false;
// console.log('Resultado de control de flujo:');
// if (cierto && falso) {
//   console.log('Esto no se imprimirá');
// } else if (cierto || falso) {
//   console.log('Esto sí se imprimirá');
// } else {
//   console.log('Esto tampoco se imprimirá.');
// }

// // Strings
// const cadena1 = 'Computación: ';
// const cadena2 = 'Ciencia y Tecnología ';
// const cadena3 = 'del Mundo Digital';
// const cadenaCompleta = cadena1 + cadena2 + cadena3;
// const largo = cadenaCompleta.length; // 53

// console.log('Largo del nombre del curso: ' + largo);
// console.log(`Largo del nombre del curso: ${largo} `);


// // Arrays
// let listaDePi = [3, 1, 4, 1, 5];
// console.log(`Lista de Pi inicial: ${listaDePi};`);
// listaDePi.push(9);
// console.log(`Lista de Pi después de push: ${listaDePi};`);
// listaDePi.pop();
// console.log(`Lista de Pi después de pop: ${listaDePi};`);
// const largoLista = listaDePi.length;
// console.log(`Largo de lista de Pi: ${largoLista};`);

// const primerElemento = listaDePi[0];
// console.log(`Primer elemento: ${primerElemento}`);
// const ultimoElemento = listaDePi[largoLista - 1];
// console.log(`Último elemento: ${ultimoElemento}`);
// const segundoYTercero = listaDePi.slice(1, 3);
// console.log(`Segundo y tercer elemento: ${segundoYTercero}`);
// const terceroEnAdelante = listaDePi.slice(2);
// console.log(`Tercer elemento en adelante: ${terceroEnAdelante}`);
// const ultimosDos = listaDePi.slice(-2);
// console.log(`Últimos dos elementos: ${ultimosDos}`);

// // for loops

// for (let index = 0; index < largoLista; index ++) {
//   console.log(listaDePi[index]);
// }

// for (const numero of listaDePi) {
//   console.log(numero);
// }

// for (const caracter of 'Computación') {
//   console.log(caracter);
// }

// // objects

// const profesor = {
//   nombre: 'Denis',
//   apellido: 'Parra',
//   cursos: 3
// };

// const nombreProfe = profesor['nombre'];
// const cursosProfe = profesor.cursos;
// console.log(`El nombre del profesor es: ${nombreProfe}`);
// console.log(`El numero de cursos del profesor es: ${cursosProfe}`);

// for (const propiedad in profesor) {
//   console.log(`${propiedad}: ${profesor[propiedad]}`);
// }

// // destructuring

// const tecs = ['HTML', 'CSS', 'JS'];
// const [tec1, tec2, tec3] = tecs;
// console.log(tec3);

// const [primer, ...resto] = tecs;
// console.log(resto);

// const profeDeHoy = {
//   nombre: 'Fernando',
//   apellido: 'Florenzano',
//   cursos: 1
// };
// const {nombre, apellido} = profeDeHoy;
// console.log(nombre);

// // functions

// function sumaCinco(numero) {
//   const resultado = numero + 5;
//   return resultado;
// }
// console.log(`Resultado de sumaCinco(3): ${sumaCinco(3)}`);

// const suma = function (numero1, numero2) {
//   const resultado = numero1 + numero2;
//   return resultado;
// }
// console.log(`Resultado de suma(3, 5): ${suma(3, 5)}`);

// const sumaCincoArrow = (numero) => numero + 5;
// const sumaArrow = (numero1, numero2) => numero1 + numero2;
// console.log(`Resultado de sumaCincoArrow(3): ${sumaCincoArrow(3)}`);
// console.log(`Resultado de sumaArrow(3, 5): ${sumaArrow(3, 5)}`);


// // DOM

// console.log(document.URL);
// console.log(document.children);

// const elemento = document.getElementById('idElemento');
// const nuevoP = document.createElement('p');
// const nodoDeTexto = document.createTextNode('¿Qué tal?');
// nuevoP.appendChild(nodoDeTexto);
// // comenta y descomenta las siguentes líneas 
// // y nota los cambios que provoca
// elemento.appendChild(nuevoP);
// // elemento.removeChild(nuevoP);

// elemento.className = 'magenta';
// console.log(`Clases de elemento: ${elemento.classList}`);
// elemento.classList.add('azul');
// console.log(`Clases de elemento: ${elemento.classList}`);
// elemento.classList.remove('magenta');
// console.log(`Clases de elemento: ${elemento.classList}`);

// elemento.addEventListener('click', () => {
//   console.log('¡click!');
// });

// const contenedor = document.getElementById('contenedor');
// const boton = document.getElementById('boton');
// boton.addEventListener('click', () => {
//   const nuevoH1 = document.createElement('h1');
//   const textoH1 = document.createTextNode('¡Hola!');
//   nuevoH1.appendChild(textoH1);
//   contenedor.appendChild(nuevoH1);
// });