//Criando os áudios das teclas
const pianokeys = document.querySelectorAll(".piano-keys .key"); //pegando as teclas do piano e armazenando em uma variável

// fazendo o volume
const volumeSlider = document.querySelector(".volume-slider input");

// fazendo o controle de teclas
const keysCheck = document.querySelector(".keys-check input");

let mapedKeys = []

let audio = new Audio("./src/tunes/a.wav");

const playTune = (key) => {
    audio.src = `./src/tunes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {clickedKey.classList.remove("active")}, 150);
};

pianokeys.forEach((key) => {
    key.addEventListener("click", () => playTune (key.dataset.key));
    mapedKeys.push(key.dataset.key);
});

// fazendo sair som ao clicar no teclado
document.addEventListener("keydown", (event) => {
    
    if(mapedKeys.includes(event.key)){
        playTune(event.key);
    }
});

const handleVolume = (event) => {
    audio.volume = event.target.value;
}

const showHidenKeys = (event) => {
    pianokeys.forEach((key) => key.classList.toggle("hide"));
};

volumeSlider.addEventListener("input", handleVolume);

keysCheck.addEventListener("click", showHidenKeys);