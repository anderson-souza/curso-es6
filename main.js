const arr = [1, 3, 4, 5, 6];

const newArr = arr.map(item => item * 2);

console.log(newArr);

const teste1 = () => [1, 2, 3];
const teste2 = () => "Teste";
const teste3 = () => 1;
const teste4 = () => ({ nome: "Anderson" });


console.log(teste1());
console.log(teste2());
console.log(teste3());
console.log(teste4());