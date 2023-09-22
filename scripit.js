//Inserindo e apagando dados:

//criando a variavel que vai armazenar os dois campos da tela
let tela01 = document.getElementById('res01')
let tela02 = document.getElementById('res02')

//escrevendo na tela
function escrevendo(caracter){

    //vendo se é um caracter de operação
    if (caracter == '+' || caracter == '-' || caracter == '*' || caracter == '/'){
        tela01.innerHTML = `${tela02.innerHTML}${caracter}`
        tela02.innerHTML = ``
    }
    else {
        tela02.innerHTML += `${caracter}`
    }
}

//apagando caracteres
function apagar(){
    var str = tela02.innerHTML
    
    //tirando o último caracter da frase
    str = str.substring(0, str.length - 1)

    //escrevendo o valor com o último caracter apagado
    tela02.innerHTML = `${str}`

}

function apagarC(){
    tela01.innerHTML = ``
    tela02.innerHTML = ``
}

function apagarCE(){
    tela02.innerHTML = ``
}

//Fazendo com que ao clicar na tecla insira tal número
function inserir(num){
    escrevendo(num)
}