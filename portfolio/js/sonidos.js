const sonidos = {};

function reproducirSonido(nombre) {
  const boton = event.currentTarget;
  boton.classList.add("rebote");

  setTimeout(() => {
    boton.classList.remove("rebote");
  }, 300);

  if (sonidos[nombre]) {
    sonidos[nombre].currentTime = 0;
    sonidos[nombre].play();
  } else {
    const audio = new Audio(`../assets/audio/${nombre}.mp3`);
    sonidos[nombre] = audio;
    audio.play();
  }
}