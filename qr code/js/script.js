//DOM
const texto = document.querySelector('#texto')
const botao = document.querySelector('#botao')
const area = document.querySelector('#qrcode')

//EVENTOS

botao.addEventListener('click', gerar)


//FUNCAO

function gerar(){
    area.innerHTML = ''
    new QRCode(area,{
        text:texto.value,
        width:500,
        height:500,
    })
    
}