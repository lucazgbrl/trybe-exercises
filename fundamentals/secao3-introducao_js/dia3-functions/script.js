let array = [32, 25, 49, 50, 87, 09]
let num = 49
let mensagem = 'Não encontrado no array!'

console.log(mensagem[0])

for (let i = 0; i < array.length; ++i) {
    if (array[i] == num) {
        mensagem = num + ' está na posição ' + i + ' do array!'
    }
}

console.log(mensagem)

let numerosImpares = []

for(let index = 1; index <= 50; ++index) {
    if (index % 2 !== 0) {
        numerosImpares.push(index)
    } 
}

numerosImpares = numerosImpares.toString()

console.log(numerosImpares)

console.log(typeof numerosImpares)

saldo = 150,00

function addValor (quantidade) {
    saldo /= quantidade
    console.log(saldo)
}

addValor(10) 