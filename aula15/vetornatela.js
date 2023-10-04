let numeros = [25, 35, 54, 53]

console.log(numeros)
/*for (i = 0; i <= numeros.length ; i++) {
    console.log(`a posição ${i} tem o valor de ${numeros[i]}`)
} */
numeros.sort()
for (i in numeros) {
    console.log(numeros[i])
}
console.log(numeros.indexOf(54))
console.log(numeros.indexOf(2))
console.log(numeros.indexOf(3))
