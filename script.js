
document.addEventListener('keydown', e => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return; // termina la funcion si la tecla no tiene audio
    audio.currentTime = 0; // vuelve al incio 
    key.classList.add('tocando')
    setTimeout(() => {
        key.classList.remove('tocando')
    }, 400);
    audio.play();
})

function playAudio(div) {
    const data = div.getAttribute('data-key');
    const audio = document.querySelector(`audio[data-key="${data}"]`)
    audio.play()
    div.classList.add('tocando')
    audio.currentTime = 0; // vuelve al incio 
    setTimeout(() => {
        div.classList.remove('tocando')
    }, 400);

}