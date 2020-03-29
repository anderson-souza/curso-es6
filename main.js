// REST
// Serve para pegar o resto das propriedades

const usuario = {
    nome: 'Anderson',
    idade: 23,
    empresa: 'Elotech'
}

const { nome, ...resto } = usuario;
console.log(nome);
console.log(resto);

//Também pode ser utilizado em Arrays
const arr = [1, 2, 3, 4];

const [a, b, ...c] = arr;
console.log(a)
console.log(b)
console.log(c)

//Pode ser utilizado em argumentos de funções
function soma(...params) {
    return params.reduce((total, next) => total + next);
}

console.log(soma(1, 2, 3));


// SPREAD OPERATOR
// Propaga as informações de um objeto ou array para outra estrutura
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

// Também é capaz de copiar todas as informações e permitir que uma informação seja alterada
const usuario1 = {
    nome: 'Anderson',
    idade: 23,
    empresa: 'Elotech',
}

const usuario2 = { ...usuario1, nome: 'Maria' };
console.log(usuario2);