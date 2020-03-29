const usuario = {
    nome: "Anderson",
    idade: 23,
    endereco: {
        cidade: "Maringá",
        estado: "PR"
    },
};

const { nome, idade, endereco: { cidade } } = usuario;
console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome({ nome, idade }) {
    console.log(nome, idade);
}

mostraNome(usuario);