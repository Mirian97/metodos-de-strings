const comentario = "Esse COVID é muito perigoso!";

const analiseDoComentario = comentario.toUpperCase();

if (analiseDoComentario.includes("COVID") || analiseDoComentario.includes("PANDEMIA")) {
    console.log("Comentário bloqueado por conter palavras proibidas");
} else {
    console.log("Comentário autorizado");
}