function pularLinha() {
    document.write("<br>");
};

//função com parâmentro
function mostra(idades) {
    document.write(idades);
    pularLinha();
};

var maximoTentativas = 3;
var tentativaAtual = 1;

var loginCadastrado = "Alura123"
var senhaCadastrada = "Vinicius"

while (tentativaAtual <= maximoTentativas) {
    loginInfo = prompt("Informe o usuário: ")
    senhaInfo = prompt("Informe a senha: ")
    tentativaAtual += 1
    
    if (loginCadastrado == loginInfo && senhaCadastrada == senhaInfo) {
        mostra("Acesso liberado")
        tentativaAtual = maximoTentativas
    }
    else {
        if(tentativaAtual == 3) {
            mostra("Acesso bloqueado")
        }
        else {
            mostra("Acesso negado, tente novamente")
        }
    }
}

mostra("FIM")