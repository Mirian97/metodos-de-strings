const email = "jose@cubos.academy";

function validarEmail(email) {
    const temPontoNoFim = email.lastIndexOf(".") === email.length - 1 ? true : false;
    const temArroba = email.includes("@");
    const temPontoNoComeco = email.indexOf(".") === 0 ? true : false;
    const incluiPontoNoMeio = email.includes(".") && !temPontoNoComeco && !temPontoNoFim ? true : false;

    if (temPontoNoComeco || temPontoNoFim || !temArroba || !incluiPontoNoMeio) {
        console.log("E-mail inválido");
    } else {
        console.log("E-mail válido");
    }
}

validarEmail(email);