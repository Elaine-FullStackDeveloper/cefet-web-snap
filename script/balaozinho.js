const balaozinho = document.querySelector('#balaozinho');
const marcacoes = document.querySelectorAll('.marcacao');

function mouseOverMarcacao(event) {
    let marcacao = event.currentTarget;
    const titulo = marcacao.getAttribute('data-titulo');
    const conteudo = marcacao.getAttribute('data-conteudo');
    const cor = marcacao.getAttribute('data-cor');
    balaozinho.innerHTML = `<h2>${titulo}</h2><p>${conteudo}</p>`;
    balaozinho.style.background = cor;
    balaozinho.style.top = `${event.pageY}px`;
    balaozinho.style.left = `${event.pageX}px`;
}

function mouseOutMarcacao(event) {
    balaozinho.innerHTML = '';
}

function mouseMoveMarcacao(event) {
    balaozinho.style.top = `${event.pageY}px`;
    balaozinho.style.left = `${event.pageX}px`;
}

for (let marcacao of marcacoes) {
    marcacao.addEventListener('mouseover', mouseOverMarcacao);
    marcacao.addEventListener('mouseout', mouseOutMarcacao);
    marcacao.addEventListener('mousemove', mouseMoveMarcacao);
}