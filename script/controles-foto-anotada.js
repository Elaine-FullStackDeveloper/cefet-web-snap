const foto = document.querySelector('.foto-anotada > img');
const filtro = document.querySelector('#filtro-da-foto');

function displayImage(event) {
    if (event.target.files.length > 1) {
        console.log('Só pode uma foto, camarada!')
    }
    const nova_foto = event.target.files[0];
    if (nova_foto.type && !nova_foto.type.startsWith('image/')) {
        console.log('Tem que ser foto, camarada!');
    }
    const reader = new FileReader();
    reader.addEventListener('load', event => {
        foto.src = event.target.result;
    });
    reader.readAsDataURL(nova_foto);
}

filtro.addEventListener('change', event => {
    foto.style.filter = filtro.value;
});

document.querySelector('#imagem').addEventListener('change', displayImage);