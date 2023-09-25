
function carregar() {
var mensagem = document.querySelector("#msgtitle")
var imagem = document.querySelector(".imgbox")
var agora = new Date()
var horaAtual = agora.getHours()

mensagem.innerHTML += ` ${horaAtual} horas`

if (horaAtual >= 0 && horaAtual < 12) {
        mensagem.innerHTML += `<p>Bom dia!</p>`
        imagem.src = './assets/manha.jpg'
        document.body.style.background = '#e2cd9f'

    } else if (horaAtual >= 12 && horaAtual < 18) {
        mensagem.innerHTML += `<p>Boa tarde!</p>`
        imagem.src = './assets/tarde.jpg'
        document.body.style.background = ' #b9846f';

    } else {
        mensagem.innerHTML += "<p>Boa noite!</p>"
        imagem.src = './assets/noite.jpg'
        document.body.style.background='#515154'
    }
}


