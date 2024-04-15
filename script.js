let audioRepduciendo = [];

//Para escritorio
document.addEventListener('keydown', e => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return; // termina la funcion si la tecla no tiene audio
    audio.currentTime = 0; // vuelve al incio 
    key.classList.add('tocando')
    audioRepduciendo.push(audio)
    setTimeout(() => {
        key.classList.remove('tocando')
    }, 400);
    audio.play();
    console.log(audio)
})

// Para movil
function playAudio(div) {
    const data = div.getAttribute('data-key');
    const audio = document.querySelector(`audio[data-key="${data}"]`)
    audio.play()
    audioRepduciendo.push(audio)
    div.classList.add('tocando')
    audio.currentTime = 0; // vuelve al incio 
    setTimeout(() => {
        div.classList.remove('tocando')
    }, 400);
}

function stop() {
    audioRepduciendo.forEach(audio => audio.pause())
}
document.addEventListener('keydown', function (event) {
    if (event.keyCode === 66) {
        stop();
    }
});