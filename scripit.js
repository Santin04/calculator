//Inserindo e apagando dados:

//criando a variavel que vai armazenar os dois campos da tela
let tela01 = document.getElementById('res01')
let tela02 = document.getElementById('res02')

//criando variável para guardar qual a operação
let adicao = false
let subtracao = false
let multiplicacao = false
let divisao = false

//escrevendo na tela
function escrevendo(caracter){

    //vendo se é um caracter de operação
    if (caracter == '+' || caracter == '-' || caracter == '*' || caracter == '/'){
        tela01.innerHTML = `${tela02.innerHTML}${caracter}`
        tela02.innerHTML = ``
        
        //guardando qual a operação:
        if (caracter == '+'){
            adicao = true
            subtracao = false
            multiplicacao = false
            divisao = false
        } else if (caracter == '-'){
            adicao = false
            subtracao = true
            multiplicacao = false
            divisao = false
        } else if (caracter == '*'){
            adicao = false
            subtracao = false
            multiplicacao = true
            divisao = false
        } else if (caracter == '/'){
            adicao = false
            subtracao = false
            multiplicacao = false
            divisao = true
        }

    }else {
        tela02.innerHTML += `${caracter}`
    }
}

//apagando caracteres
function apagar(){
    let str = tela02.innerHTML
    
    //tirando o último caracter da frase
    str = str.substring(0, str.length - 1)

    //escrevendo o valor com o último caracter apagado
    tela02.innerHTML = `${str}`

}

//Apagando tudo
function apagarC(){
    tela01.innerHTML = ``
    tela02.innerHTML = ``
}

//Apagando somente onde está escrevendo
function apagarCE(){
    tela02.innerHTML = ``
}

//Fazendo com que ao clicar na tecla insira tal número
function inserir(num){
    escrevendo(num)
}


//Fazendo as operações matemáticas:
function operacao(){
    //pegandos os valores dos numeros que vao ser usados nas operações
    let valor01 = tela01.innerHTML
    valor01 = valor01.substring(0, valor01.length - 1)
    valor01 = Number(valor01)
    let valor02 = Number(tela02.innerHTML)

    if (valor01 == ''){
        valor01 = 0
    }

    if (valor02 == ''){
        valor02 = 0
    }

    let res_final = 0 

    if (adicao == true){
        res_final = mais(valor01, valor02)
    } else if (subtracao == true){
        res_final = menos(valor01, valor02)
    } else if (multiplicacao == true){
        res_final = vezes(valor01, valor02)
    } else if (divisao == true){
        res_final = dividi(valor01, valor02)
    }

    console.log(res_final)

    tela01.innerHTML = ``
    tela02.innerHTML = `${res_final}`
}

function mais(num1, num2){
    let res = num1 + num2
    return res
}

function menos(num1, num2){
    let res = num1 - num2
    return res
}

function vezes(num1, num2){
    let res = num1 * num2
    return res
}

function dividi(num1, num2){
    let res = num1 / num2
    return res
}