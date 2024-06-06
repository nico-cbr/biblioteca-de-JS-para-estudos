// Aula do dia 06/06/24
// Tipos primitivos

// 1 -Crie três variaveis do tipo STRING, NUMBER e BOOLEANO

let nome= "Alberto";
let idade = 15;
let matriculado = true;

console.log('----------------');
// 2 - Exiba no console as variaveis criadas
console.log(`O nome do aluno é ${nome}, de idade ${idade}, matricula: ${matriculado}`)

console.log('----------------');
// 3 - Exiba no console o tipo de cada variavel criada
console.log(typeof nome, typeof idade, typeof matriculado)

console.log('----------------');
// 4 - mostre que o JS é fracamente tipada
console.log(`Nosso variavel nome (${nome}) receberá um valor booleano na linha de baixo`)
nome = false;
console.log(`agora a nossa variavel vale (${nome})`)

console.log('----------------');
// 5 - Mostre a diferença entre let e const
let variar = 1;
const naoVariar = 2;
console.log(`let = ${variar} e const = ${naoVariar}`)
variar = 2; 
console.log(` ao tentar mudar uma const da erro no condigo então apenas mudamos o let chamando assim (nomeDaVariavel = valor;) let = ${variar} e const = ${naoVariar}`)

console.log('----------------');
// 6 - Operações artmeticas em JSON. Crie duas variaveis num1 e num2 e realize as operações de: Soma, Subtração, divisão e multiplicação
let num1 = 2;
let num2 = 4;
let mais = num1 + num2;
let menos = num1 - num2;
let divi = num1 / num2;
let multi = num1 * num2;

console.log(`nossos numeros são ${num1} e ${num2} e o resultado das operações na ordem (+,-,/ e *) são ${mais}, ${menos}, ${divi} e ${multi}`)

// -----------------------------------------------

console.log('----------------');
// 7 - Crie um array com as seguintes frutas: banana, maçã, abacate, limão, jaca, mamão e pêra
let frutas = ['banana', 'maçã', 'abacate', 'limão', 'jaca', 'mamão', 'pêra']
console.log(frutas)

console.log('----------------');
// 8 - Exiba no console o primeiro e o ultimo elemento do Array
console.log(frutas[0]+ " e "+ frutas[6]) 

// ----------------------------------------------

console.log('----------------');
// 9 - Crie uma função que exiba no console o seu nome
let meuNome = 'Nicoly';
function exibirNome(){
    console.log(`Meu nome é ${meuNome}`);
}
console.log(exibirNome)
exibirNome()

// function exibirN(){
//     return console.log('Demetrio baladao')
// }

// exibirN()

console.log('----------------');
// 10 - Crie uma função para soma de dois numeros
function conta(){
    num1 = 4;
    num2 = 4;
    let resultado = num1 + num2;
    console.log(`${num1} + ${num2} e o resultado é ${resultado}`);
}
console.log(conta);
conta();

// function conta(numero1, numero2){
//     return console.log( numero1 + numero2);
// }

// conta(2,3);

console.log('----------------');
// 11 - Crie ua função que multiplique dois numeros e use template string para manipular o resultado no console
function multiplique(){
    num1 = 4;
    num2 = 4;
    let resultado = num1 * num2;
    console.log(`${num1} * ${num2} e o resultado é ${resultado}`);
}
console.log(multiplique);
multiplique();

// function conta(numero1, numero2){
//     return console.log(à multiplicação de ${numero1, numero2} e o resultado ${numero1 * numero2});
// }

// conta(2,3);
