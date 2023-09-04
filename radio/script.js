// Elementos del DOM
const elements = {
    stationSelect: document.getElementById("stationSelect"),
    playButton: document.getElementById("playButton"),
    stopButton: document.getElementById("stopButton"),
    audioPlayer: document.getElementById("audioPlayer"),
    radioImage: document.getElementById("radioImage"),
};

// Estaciones de radio
const stations = {
    "94.5": "inicio.mp3",
    "102.3": "Tocoa-Colon.mp3",
    "107.9": "volvemos-1.mp3",
    "107.9": "Yo.mp3" // ¡Ten en cuenta que tienes una clave duplicada aquí!
};

// Función para reproducir la estación seleccionada
function playStation() {
    const selectedStation = elements.stationSelect.value;
    if (stations[selectedStation]) {
        elements.audioPlayer.src = stations[selectedStation];
        elements.audioPlayer.play();
        elements.radioImage.src = "icono-radio.png";
    }
}

// Función para detener la reproducción
function stopStation() {
    elements.audioPlayer.pause();
    elements.audioPlayer.currentTime = 0;
    elements.radioImage.src = "icono-radio.png";
}

// Event Listeners
elements.playButton.addEventListener("click", playStation);
elements.stopButton.addEventListener("click", stopStation);
// Agrega funcionalidad para abrir y cerrar la pestaña desplegable
const accordion = document.querySelector('.accordion');
accordion.addEventListener('click', () => {
    accordion.classList.toggle('active');
});
