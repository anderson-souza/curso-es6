// import { divisao, soma as somatoria, sub } from './funcoes' //Utiliza-se as chaves quando se quer importar uma função específica
import * as funcoes from './funcoes' //importa todas as funções do arquivo
// import somaFunction from './soma' //Não precisa utilizar chaves quando se importa uma função default e é possível alterar seu nome na importação


// console.log(somaFunction(1, 2));
// console.log(somatoria(1, 2));
// console.log(sub(1, 2));
// console.log(divisao(1, 2));


console.log(funcoes.divisao(1, 2));
console.log(funcoes.soma(1, 2));
console.log(funcoes.sub(1, 2));
