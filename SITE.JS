var botao = document.querySelector(".botao")
var imagem = document.querySelector(".bozo")
var active = "active"

function cum(){
    imagem.classList.toggle(active)
}

botao.addEventListener("click",cum)