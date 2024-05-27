// Tipos primitivos
var idade = 18; //INT
var sexo = "M"; // STRING
var nome = "Nicoly"; // STRING
var presenca = true; // BOOLEANO
var endereco = null; // NULO
var nota = 55.5; // FLOAT

console.log(typeof idade);
console.log(typeof sexo);
console.log(typeof nome);
console.log(typeof presenca);
console.log(typeof endereco);
console.log(typeof nota);

//-----------------------------------------------------------------------------------------------
// Manipulando strings
var primeiraLetra = nome.charAt(1);
console.log(primeiraLetra);
console.log( nome + idade);

//-----------------------------------------------------------------------------------------------
//Criando meu primeiro objeto em JavaScript
// notação de objetos em JS
var pessoa = new Object({
    'nome': 'Nicoly',
    'idade': 17,
    'sexo': 'f',
    'cidade': 'nova londrina'
});
console.log(typeof pessoa);

var carro = {
    'modelo': 'Celta',
    'montadora': 'Chevrolet',
    'Ano':  2012
};
console.log(typeof carro);
console.log(carro);
//-----------------------------------------------------------------------------------------------
//Funções em JS
var mostrarNome = new Function("console.log('Minha função')");
mostrarNome();

var mostrarNome = ()=>{
    console.log("Meu nome")
}
mostrarNome();

function mostrarIdade(){
    console.log(idade)
}
mostrarIdade()

//-----------------------------------------------------------------------------------------------
// Contruindo arrays em JS
var pessoas = new Array('João', 'José', 'Maria', 'Alfredo');
console.log(pessoas);
console.log(pessoas[2]);

var nomes = ["Marta", "Alfredo", "Pedro", "Armando"];
console.log(nomes);
console.log(nomes[2]);
console.log(typeof nomes);