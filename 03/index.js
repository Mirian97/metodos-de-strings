const texto = "Aprenda programar do zero na Cubos Academy";

const caixaBaixa = texto.toLowerCase();

function url(url, text, newText) {
    while (url !== url.replace(text, newText)) {
        url = url.replace(text, newText);
    }
    return url;
}

console.log(url(caixaBaixa, " ", "-"));