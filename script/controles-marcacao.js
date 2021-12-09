const checkbox = document.querySelector('#visibilidade-das-marcacoes');
// no need to declare marcacoes because it was already declared at balaozinho.js
// selectors
const x_selector = document.querySelector('#x-da-marcacao');
const y_selector = document.querySelector('#y-da-marcacao');
const largura_selector = document.querySelector('#largura-da-marcacao');
const altura_selector = document.querySelector('#altura-da-marcacao');
const titulo_selector = document.querySelector('#titulo-da-marcacao');
const conteudo_selector = document.querySelector('#conteudo-da-marcacao');
const cor_selector = document.querySelector('#cor-da-marcacao');
const formato = document.querySelectorAll('input[name="formato-da-marcacao"]');
const retangular_selector = formato[0];
const oval_selector = formato[1];

// atualiza os seletores com base na marcacao selecionada
function atualizaInputs(marcacao) {
    x_selector.value = parseInt(marcacao.style.left, 10);
    y_selector.value = parseInt(marcacao.style.top, 10);
    largura_selector.value = parseInt(marcacao.style.width, 10);
    altura_selector.value = parseInt(marcacao.style.height, 10);
    titulo_selector.value = marcacao.getAttribute('data-titulo');
    conteudo_selector.value = marcacao.getAttribute('data-conteudo');
    cor_selector.value = marcacao.getAttribute('data-cor');
    retangular_selector.checked = !marcacao.classList.contains('formato-oval');
    oval_selector.checked = marcacao.classList.contains('formato-oval');
}

// seleciona marcacao ao clique
function selecionarMarcacao(event) {
    let currentMarcacao = event.currentTarget;
    for (marcacao of marcacoes) {
        marcacao.classList.remove('selecionada');
    }
    currentMarcacao.classList.add('selecionada');
    atualizaInputs(currentMarcacao);
}

// event listener for the markers
for (marcacao of marcacoes) {
    marcacao.addEventListener('click', selecionarMarcacao);
}

// event listener for the markers selectors
document.addEventListener('change', function(event) {
    const currentMarcacao = document.querySelector('.marcacao.selecionada');
    const value = event.target.value;
    if (event.target === checkbox) {
        for (marcacao of marcacoes) {
            marcacao.style.display = checkbox.checked ? 'none' : '';
        }
    }
    if (event.target === x_selector) currentMarcacao.style.left = `${value}px`;
    if (event.target === y_selector) currentMarcacao.style.top = `${value}px`;
    if (event.target === largura_selector) currentMarcacao.style.width = `${value}px`;
    if (event.target === altura_selector) currentMarcacao.style.height = `${value}px`;
    if (event.target === titulo_selector) currentMarcacao.setAttribute('data-titulo', value);
    if (event.target === conteudo_selector) currentMarcacao.setAttribute('data-conteudo', value);
    if (event.target === cor_selector) currentMarcacao.setAttribute('data-cor', value);
    if (event.target === retangular_selector && retangular_selector.checked) currentMarcacao.classList.remove('formato-oval');
    if (event.target === oval_selector && oval_selector.checked) currentMarcacao.classList.add('formato-oval');  
});

atualizaInputs(document.querySelector('.marcacao.selecionada'));