//função sem parâmetro
function pularLinha() {
    document.write("<br>");
};

//função com parâmentro
function mostra(idades) {
    document.write(idades);
    pularLinha();
};

var multuplicador = 1;
for (var multuplicador = 1; multuplicador <= 10; multuplicador++) {
    mostra(7 * multuplicador)

}

mostra("FIM")