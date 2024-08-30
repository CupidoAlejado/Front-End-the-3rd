function acertos() {
    alert('deu certo')
    if (cont>0) {
        return false
    }
    var opcao = document.getElementsByName('r');
    var opcaon;
    for (var cont = 0; cont < opcao.length; cont++) {
        if (opcao[cont].checked) {
            opcaon = opcao[cont].value;
            if (opcaon == "true") {
                r++
            }
        }
    }
    var resultado = document.getElementById("resultado")
    var nome = document.getElementById("nome").value
    resultado.innerHTML = "Parabéns " + nome + "! Você acertou " + r + " questões"
    cont++
}