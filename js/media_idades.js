//função sem parâmetro
function pularLinha() {
    document.write("<br>");
};

//função com parâmentro
function mostra(idades) {
    document.write(idades);
    pularLinha();
};

var totalFamiliares = parseInt(prompt("Digite a quantidade de familiares"));
var contador = 1;
var totalIdades = 0;
while (contador <= totalFamiliares) {
    var idade = parseInt(prompt("Digite a idade do familiar"));
    totalIdades += idade
    contador++
}
var mediaIdades = totalIdades / totalFamiliares;
mostra("A média das idades é" + mediaIdades);