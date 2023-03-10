const cpf = "011.022.033-44";

function retirarPontuacao(numero, ponto, traco, espacoVazio,) {
    const retirePontos = numero.replaceAll(ponto, espacoVazio);
    const retireTraco = retirePontos.replaceAll(traco, espacoVazio);
    console.log(retireTraco)
}
retirarPontuacao(cpf, ".", "-", "");


