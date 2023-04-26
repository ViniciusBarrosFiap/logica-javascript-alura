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

var vitorias = prompt("Digite o número de vitórias.")
var derrotas = prompt("Digite O número de empates.")