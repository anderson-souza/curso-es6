const a = 5; //Variável não pode ser modificada

// a = 3; //Erro pois a variável só pode ser lida

//Mutação
const usuario = { nome: 'Diego' };

usuario.nome = "Creito";
console.log(usuario);


function teste(x) {
    let y = 2;

    if (x > 5) {
        console.log(x, y);
    }
}

teste(10);