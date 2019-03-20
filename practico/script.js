
const contenedor = document.getElementById('lists-container');

const crearBotonMarcar = (nodoTarea) => {
  const nuevoBoton = document.createElement('button');
  // rellenar aquí
  return nuevoBoton;
};

const crearBotonRemover = (nodoLista, nodoTarea) => {
  const nuevoBoton = document.createElement('button');
  // rellenar aquí
  return nuevoBoton;
};

const agregarNodoTarea = (nodoLista, tarea, nodoInput) => {
  // rellenar aquí
};

const crearInputDeTareas = (nodoLista) => {
  const nodoContenedor = document.createElement('div');
  // rellenar aquí
  return nodoContenedor;
};

const agregarNodoLista = (lista) => { 
  const nodoLista = document.createElement('div');
  // rellenar aquí
  contenedor.appendChild(nodoLista);
}

const inputListas = document.getElementById('input-listas');

// Agregamos un evento de tecla oprimida o 'keydown'
inputListas.addEventListener('keydown', (evento) => {
  const {keyCode, target: {value}} = evento;
  // keyCode contiene un código de la tecla apretada
  // value contiene el valor dentro del input al oprimir la tecla

  if (keyCode === 13) { // el código 13 es para la tecla enter
    const nuevaLista = {titulo: value, tareas: []};
    agregarNodoLista(nuevaLista);
  }
});




// Creamos un array de listas de tareas inicial
const listas = [
  {
    titulo: 'Exploratorio de computación',
    tareas: [
      {
        texto: 'Hacer práctico de HTML + CSS',
        terminado: true
      },
      {
        texto: 'Ir a clase de JS',
        terminado: true
      },
      {
        texto: 'Hacer práctico de JS',
        terminado: false
      }
    ]
  }
];

// Agregamos cada lista inicial
for (lista of listas) {
  agregarNodoLista(lista);
}