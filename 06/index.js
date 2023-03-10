const celular = 7199918888;
const stringCelular = String(celular);
//não consigo que a funcão vá para outros if, se celular.lenggth for 9 ou 8
function celularFormatado(celular) {
    let numeroFormatado = "";
    if (celular.length == 11) {
        numeroFormatado += "(" +
            celular.slice(0, 2) + ") 9 " +
            celular.slice(3, 7) + "-" +
            celular.slice(-4);
    } else if (celular.length == 10) {
        numeroFormatado += "(" +
            celular.slice(0, 2) + ") 9 " +
            celular.slice(2, 6) + "-" +
            celular.slice(-4);
    } else if (celular.length == 8) {
        numeroFormatado += "9 " +
            celular.slice(2, 6) + "-" +
            celular.slice(-4);
    } else if (celular.length == 9) {
        numeroFormatado +=
            celular.slice(0, 1) + " " +
            celular.slice(1, 5) + "-" +
            celular.slice(-4);
    } else if (celular.length != 11 || celular.length != 10 || celular.length != 8 || celular.length != 9) {
        console.log("Número inválido");
    }
    console.log(numeroFormatado);
}

celularFormatado(stringCelular);

