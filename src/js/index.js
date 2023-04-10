// passo 1 - pegar o elemento que representa o botao da tela usando js
const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video");
// passo 3 - pegar o elemento modal no js
const modal = document.querySelector(".modal");
// passo 1 - pegar o elemento de fechar a modal usando js
const botaoFecharModal = document.querySelector(".fechar-modal");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}
// passo 2 - identificar quando o usuario clicar no botao
botaoTrailer.addEventListener("click", () => {
    // passo 4 - abrir a modal na tela
    modal.classList.add("aberto");
    video.setAttribute("src", linkDoVideo);
});



//passo 2 - identificar quando o usuario clicar no x
botaoFecharModal.addEventListener("click", () => {
    // passo 3 - fechar a modal na tela 
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
});










