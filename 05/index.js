const numeroCartao = '1111222233334444';


let numeroFormatado = numeroCartao.slice(0, 4) + "********" + numeroCartao.slice(12);

console.log(numeroFormatado);
