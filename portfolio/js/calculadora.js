// Obtener referencia a la pantalla
const pantalla = document.getElementById('pantalla');

// Insertar valores al presionar botones
function insertar(valor) {
  pantalla.value += valor;
}

// Borrar todo
function borrar() {
  pantalla.value = '';
}

// Borrar último carácter
function borrarUno() {
  pantalla.value = pantalla.value.slice(0, -1);
}

// Calcular resultado
function calcular() {
  try {
    // Evalúa la expresión matemática ingresada
    pantalla.value = eval(pantalla.value);
  } catch (error) {
    pantalla.value = 'Error';
  }
}