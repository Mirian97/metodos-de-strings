let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

const idFormatado = identificador.padStart(6, "0");
console.log(idFormatado);

let nomeFormatado = "";
const nomeFragmentado = nome.split(" ");

for (let item of nomeFragmentado) {
    nomeFormatado += item[0].toUpperCase() + item.slice(1) + " ";
}
console.log(`${nomeFormatado.trim()}`);

const emailFormatado = email.trim();
console.log(emailFormatado);

