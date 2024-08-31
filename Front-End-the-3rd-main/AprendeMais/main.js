function acertos() {
    res = 0
    r = 0
    cont = 0
    if (cont>0) {
        return false
    }
    else{
    var opcao = document.getElementsByName('re');
    var opcao_value = 0;
    for (var conter = 0; conter < opcao.length; conter++) {
        if (opcao[conter].checked) {
            opcao_value = opcao[conter].value;
            if (opcao_value == "true") {
                res++
            }
        }
    }

    var nome = document.getElementById("nome").value
    document.getElementById("resultado").innerHTML = "Parabéns " + nome + "! Você acertou " + res + " questões"
    cont++
    }
}