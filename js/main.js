//As funções(function) são blocos de código onde contém uma série de comandos
// E essa série de comandos é executado quando o nome da função é chamado em alguma parte do código.

//função sem parâmetro
function pularLinha() {
    document.write("<br>");
};

//função com parâmentro
function mostra(idades) {
    document.write(idades);
    pularLinha();
};
//função com 2 parâmetros
function calculaImc(peso, altura) {
    return peso / (altura * altura);
    //A palavra return serve para que a função retorne o resultado de algo. nesse exemplo o return retorna o resultado do imc
};
var nome = prompt("Informe seu nome:")
var alturaUser = prompt(`${nome}, informe sua altura:`);
var pesoUser = prompt(`${nome}, informe seu peso:`);
//o prompt permite que o usuário faça uma entrada de dados.

var imc = calculaImc(pesoUser, alturaUser);

mostra(`A altura informada é: ${alturaUser}m`)
mostra(`O peso informado é: ${pesoUser}kg`)
mostra(`${nome}, o seu imc é: ${imc}`)

if (imc < 18.5) {
    mostra("Você está abaixo do recomendado")
}

if (imc > 35) {
    mostra("Você está acima do recomendado")
}

if (imc >= 18.5 && imc <= 35) {
    mostra("Seu imc está ok")
}
