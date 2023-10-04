function gerar() {
    let numero = document.querySelector('#txtnumero').value
    let tab = document.querySelector('#seltab')

    if (numero == 0) {
        alert('Digite um numero!')
    } else {
        let num = Number(numero)
        let i = 1
        tab.innerHTML = ''
        for (i=1; i<=10; i++) {
            let item = document.createElement('option')
            item.text = `${num} x ${i} = ${num*i}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }
    }

}