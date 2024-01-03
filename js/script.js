const container = document.querySelector('.container');
const eyeImage = document.querySelector('#eye-image');
const inputText = document.querySelector('#password');
let toggle = false;

container.addEventListener('click', (e) => {
    if (e.target.nodeName === 'IMG') {
        toggleImage();
    }
});

function toggleImage() {

    if (toggle) {
        eyeImage.src = 'img/eye-close.png';
        inputText.type = 'password'

    } else {
        eyeImage.src = 'img/eye-open.png';
        inputText.type = 'text'
    }

    toggle = !toggle

}