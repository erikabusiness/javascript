function verificar () {
var data = new Date()
var ano = data.getFullYear()
var fAno = document.querySelector('#txtyear')
var res = document.querySelector('#preencha')

if (fAno.value.length == 0 || fAno.value > ano) {
    window.alert('[ERRO]: verifique os dados e tente novamente!')
} else {
    var fsex = document.getElementsByName('sex')
    var idade = ano - Number(fAno.value)
    var genero = ''
    var img = document.createElement('img') //tag img
    img.setAttribute('id', 'foto')

    if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade > 0 && idade < 10) {
            img.setAttribute('src', './assets/crianca-menina.jpg' )
        } else if (idade < 21) {
            img.setAttribute('src', './assets/crianca-menina.jpg')
        } else if ( idade < 50) {
            img.setAttribute('src', './assets/adulta-mulher.jpg')
        } else {
            img.setAttribute('src', './assets/idosa-mulher.jpg')
        }

    } else if (fsex[0].checked) {
        genero = 'Homem'
        if (idade > 0 && idade < 10) {
            img.setAttribute('src', './assets/crianca-menino.jpg')

        } else if (idade < 21) {
            img.setAttribute('src', './assets/crianca-menino.jpg')
        } else if ( idade < 50) {
            img.setAttribute('src', './assets/adulto-homem.jpg')
        } else {
            img.setAttribute('src', './assets/idoso-homem.jpg')
        }
    }

    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
}

}