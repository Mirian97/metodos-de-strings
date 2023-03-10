const nome = 'Guido Cerqueira';

function nomeFormatado(nome) {
    let nickname = "";
    const retiraEspaço = nome.replaceAll(" ", "");
    const caixaBaixa = retiraEspaço.toLowerCase();
    nickname += "@" + caixaBaixa.slice(0, 12)
    console.log(nickname);
}

nomeFormatado(nome);

//não retira espaco vazio