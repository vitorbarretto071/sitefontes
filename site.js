/* =========================
ARQUIVO: script.js
========================= */

// HEADER SCROLL

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if(window.scrollY > 50){

        header.style.background = "#245391";
        header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.15)";

    }

    else{

        header.style.background = "#2f63a9";
        header.style.boxShadow = "none";

    }

});


// ======================
// LIGHTBOX GALERIA
// ======================

const imagens = document.querySelectorAll(".galeria-grid img");

let imagemAtual = 0;


// cria lightbox
const lightbox = document.createElement("div");

lightbox.id = "lightbox";

lightbox.innerHTML = `

    <span id="fechar">&times;</span>

    <span id="seta-esquerda">&#10094;</span>

    <img id="lightbox-img">

    <span id="seta-direita">&#10095;</span>

`;

document.body.appendChild(lightbox);


const lightboxImg = document.getElementById("lightbox-img");
const fechar = document.getElementById("fechar");
const esquerda = document.getElementById("seta-esquerda");
const direita = document.getElementById("seta-direita");


// abrir imagem
imagens.forEach((img, index) => {

    img.addEventListener("click", () => {

        imagemAtual = index;

        abrirImagem();

    });

});


// função abrir
function abrirImagem(){

    lightbox.style.display = "flex";

    lightboxImg.src = imagens[imagemAtual].src;

}


// próxima
function proximaImagem(){

    imagemAtual++;

    if(imagemAtual >= imagens.length){

        imagemAtual = 0;

    }

    abrirImagem();

}


// anterior
function imagemAnterior(){

    imagemAtual--;

    if(imagemAtual < 0){

        imagemAtual = imagens.length - 1;

    }

    abrirImagem();

}


// eventos
direita.addEventListener("click", proximaImagem);

esquerda.addEventListener("click", imagemAnterior);


// teclado
document.addEventListener("keydown", (e) => {

    if(lightbox.style.display === "flex"){

        if(e.key === "ArrowRight"){

            proximaImagem();

        }

        if(e.key === "ArrowLeft"){

            imagemAnterior();

        }

        if(e.key === "Escape"){

            lightbox.style.display = "none";

        }

    }

});


// fechar
fechar.addEventListener("click", () => {

    lightbox.style.display = "none";

});


// clicar fora
lightbox.addEventListener("click", (e) => {

    if(e.target === lightbox){

        lightbox.style.display = "none";

    }

});