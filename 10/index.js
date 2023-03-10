const nomeArquivo = 'Foto da Familia.pdf';

function validarExtensaoDeArquivo(nome) {
    const extensao = nome.slice(-3);
    if (extensao === "jpg" || extensao === "jpeg" || extensao === "gif" || extensao === "png") {
        console.log("Arquivo válido");
    } else {
        console.log("Arquivo inválido");
    }
}

validarExtensaoDeArquivo(nome);