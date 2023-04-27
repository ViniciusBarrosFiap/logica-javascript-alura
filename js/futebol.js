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

var vitorias = parseInt(prompt("Digite o número de vitórias."));
var derrotas = parseInt(prompt("Digite O número de empates."));
//O parseInt converte o valor recebido no prompt em um número inteiro, já que o
//promp tem como padrão receber valores do tipo string
var pontos = vitorias * 3 + derrotas;

mostra(`O total de pontos de seu time é: ${pontos}`);

//estruturas de condições
if (pontos > 28) {
    mostra("Seu time está melhor que o ano passado");
}

if (pontos < 28) {
    mostra("Seu time está pior que o ano passado");
}

if (pontos == 28) {
    mostra("Seu time está igual ao ano passado");
}
