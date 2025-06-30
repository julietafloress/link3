// Elementos del DOM
const input = document.getElementById("nuevaTarea");
const lista = document.getElementById("listaTareas");

let filtro = "todas";

document.addEventListener("DOMContentLoaded", () => {
  renderizarTareas();
  crearControlesFiltro();
});

function agregarTarea() {
  const texto = input.value.trim();
  if (!texto) return;

  const tareas = obtenerTareas();
  tareas.push({ texto, completada: false });
  guardarTareas(tareas);
  input.value = "";
  renderizarTareas();
}

function obtenerTareas() {
  return JSON.parse(localStorage.getItem("tareas")) || [];
}

function guardarTareas(tareas) {
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

function renderizarTareas() {
  lista.innerHTML = "";
  const tareas = obtenerTareas();
  const filtradas = tareas.filter(t => {
    if (filtro === "completadas") return t.completada;
    if (filtro === "pendientes") return !t.completada;
    return true;
  });

  filtradas.forEach((tarea, index) => {
    const li = document.createElement("li");
    li.className = tarea.completada ? "completada animate-tachado" : "animate-tarea";
    li.innerHTML = `
      <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
        <input type="checkbox" onchange="toggleTarea(${index})" ${tarea.completada ? "checked" : ""}>
        <span>${tarea.texto}</span>
      </label>
      <button onclick="borrarTarea(${index})">🗑️</button>
    `;
    lista.appendChild(li);
  });
}

function toggleTarea(index) {
  const tareas = obtenerTareas();
  tareas[index].completada = !tareas[index].completada;
  guardarTareas(tareas);
  renderizarTareas();
}

function borrarTarea(index) {
  const tareas = obtenerTareas();
  tareas.splice(index, 1);
  guardarTareas(tareas);
  renderizarTareas();
}

function crearControlesFiltro() {
  const contenedor = document.querySelector(".tareas");
  const controles = document.createElement("div");
  controles.style.marginTop = "20px";
  controles.innerHTML = `
    <button onclick="setFiltro('todas')">Todas</button>
    <button onclick="setFiltro('pendientes')">Pendientes</button>
    <button onclick="setFiltro('completadas')">Completadas</button>
  `;
  contenedor.appendChild(controles);
}

function setFiltro(valor) {
  filtro = valor;
  renderizarTareas();
}