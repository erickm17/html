//DOM
const distancia = document.querySelector('#distancia')
const consumo = document.querySelector('#consumo')
const preco = document.querySelector('#preco')

const botao = document.querySelector('#botao')
const resultado = document.querySelector('#resultado')

//evento
botao.addEventListener('click',calcular)

//função
function calcular(){
    d = Number(distancia.value)
    c = Number(consumo.value)
    p = Number(preco.value)

    valor =p * (d/c) 
    resultado.textContent = `O GASTO FOI R$:${valor.toFixed(2)}`
}
