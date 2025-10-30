/*****************************************************************************
 * Objetivo: Pequeno ajustes de animações
 * Autor: Matheus Perez
 * Data:30/10/2025
 * Versão: 1.0
 ****************************************************************************/
document.addEventListener('DOMContentLoaded', () => {
    const titulo = document.getElementById('titulo')
    const dev = document.getElementById('dev')

 function rolagemAnimada() {

        //Pega a quantidade de pixels que a janela irá rolar no eixo Y
        const positionScroll = window.scrollY

        //Faz com que o container selecionado se mova 50% (0.5) atrasado em relação a pagina
        titulo.style.transform = `translateY(${positionScroll * 0.5}px)`;

        dev.style.transform = `translate(-50%, ${positionScroll * 0.2}px)`;
    };

 //Adiciona o evento de rolagem na janela
 window.addEventListener('scroll', rolagemAnimada);

 //Chama a função
 rolagemAnimada();
 
});