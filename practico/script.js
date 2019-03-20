
const contenedor = document.getElementById('lists-container');


const crearBotonMarcar = (nodoTarea) => {
  const nuevoBoton = document.createElement('button');
  nuevoBoton.appendChild(document.createTextNode('Marcar'));
  nuevoBoton.addEventListener('click', () => {
    if (nodoTarea.classList.contains('terminada')) {
      nodoTarea.classList.remove('terminada');
    } else {
      nodoTarea.classList.add('terminada');
    }
  });
  return nuevoBoton;
};

const crearBotonRemover = (nodoLista, nodoTarea) => {
  const nuevoBoton = document.createElement('button');
  nuevoBoton.appendChild(document.createTextNode('Remover'));
  nuevoBoton.addEventListener('click', () => nodoLista.removeChild(nodoTarea));
  return nuevoBoton;
};

const agregarNodoTarea = (nodoLista, tarea, nodoInput) => {
  const {texto, terminado} = tarea;
  const nodoTarea = document.createElement('div');
  nodoTarea.className = 'tarea';
  if (terminado) {
    nodoTarea.classList.add('terminada');
  }
  nodoTarea.appendChild(document.createTextNode(`- ${texto}`));
  nodoTarea.appendChild(crearBotonMarcar(nodoTarea));
  nodoTarea.appendChild(crearBotonRemover(nodoLista, nodoTarea));
  nodoLista.insertBefore(nodoTarea, nodoInput);
};

const crearInputDeTareas = (nodoLista) => {
  const nodoContenedor = document.createElement('div');
  nodoContenedor.appendChild(document.createTextNode('Nueva tarea: '));
  const nodoInput = document.createElement('input');
  nodoContenedor.appendChild(nodoInput);
  nodoInput.addEventListener('keydown', (evento) => {
    const {keyCode, target: {value}} = evento;
    if (keyCode === 13) {
      const nuevaTarea = {texto: value, terminado: false};
      agregarNodoTarea(nodoLista, nuevaTarea, nodoContenedor);
    }
  });
  return nodoContenedor;
};

const agregarNodoLista = (lista) => { 
  const {titulo, tareas} = lista;
  const nodoLista = document.createElement('div');
  nodoLista.className = 'lista';
  const tituloLista = document.createElement('h3'); 
  tituloLista.appendChild(document.createTextNode(titulo));
  nodoLista.appendChild(tituloLista);
  const nodoInput = crearInputDeTareas(nodoLista);
  nodoLista.appendChild(nodoInput);
  for (tarea of tareas) {
    agregarNodoTarea(nodoLista, tarea, nodoInput);
  }
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