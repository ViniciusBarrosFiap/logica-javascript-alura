function pularLinha() {
    document.write("<br>");
};

//função com parâmentro
function mostra(idades) {
    document.write(idades);
    pularLinha();
};

var numeroPensado = Math.round(Math.random() * 10);
var numeroChutado = parseInt(prompt("Chute um numero"))

if (numeroChutado == numeroPensado) {
    mostra("Você acertou")
}
else {
    mostra(`Você errou, o numero pensado foi ${numeroPensado}`)
}