//criando a variavel que vai armazenar os dois campos da tela


//escrevendo na tela
function escrevendo(caracter){
    let resultado = document.getElementById('res02')
    resultado.innerHTML += `${caracter}`

    //vendo se é um caracter de operação
    if (caracter == '+' || caracter == '-' || caracter == '*' || caracter == '/'){
        
    }
}

escrevendo('3')