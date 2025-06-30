// Lista de imágenes
const imagenes = document.querySelectorAll('.galeria-grid img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

let indiceActual = 0;

// Abrir lightbox con imagen seleccionada
function abrirLightbox(imgElement) {
  const imagenesArray = Array.from(imagenes);
  indiceActual = imagenesArray.indexOf(imgElement);
  lightboxImg.src = imgElement.src;
  lightbox.style.display = 'flex';
  document.body.style.overflow = 'hidden'; // bloquear scroll de fondo
}

// Cerrar lightbox
function cerrarLightbox() {
  lightbox.style.display = 'none';
  document.body.style.overflow = '';
}

// Ir a la siguiente imagen
function siguienteImagen() {
  indiceActual = (indiceActual + 1) % imagenes.length;
  lightboxImg.src = imagenes[indiceActual].src;
}

// Ir a la anterior imagen
function anteriorImagen() {
  indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
  lightboxImg.src = imagenes[indiceActual].src;
}

// Navegar con el teclado
document.addEventListener('keydown', function(e) {
  if (lightbox.style.display === 'flex') {
    if (e.key === 'ArrowRight') siguienteImagen();
    if (e.key === 'ArrowLeft') anteriorImagen();
    if (e.key === 'Escape') cerrarLightbox();
  }
});