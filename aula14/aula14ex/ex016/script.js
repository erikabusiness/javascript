function calcular() {
    
    let inicio = document.querySelector("#txtinicio").value
    let fim = document.querySelector("#txtfim").value
    let intervalo = document.querySelector("#txtintervalo").value
    let cont = document.querySelector("#divcontagem")
    

    if (inicio == 0 || fim == 0) {
        window.alert('Preencha corretamente!')
    } else {
        let inter = Number(intervalo)
        if (inter <= 0) {
            window.alert('Considerando passo valendo 1')
            inter = 1
        }
        cont.innerHTML = `Contando: `
        let i = Number(inicio)
        let f = Number(fim)
        
        if(i < f) { 
            for (let c = i; c <= f; c += inter) {
            cont.innerHTML += ` ${c} \u{1f449} ` 
        }
        } else {
            for (let c = i; c >= f; c -= inter){
                cont.innerHTML += `${c} \u{1f449} `
            }
        }
    }


}
