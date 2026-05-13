//Exercício 1
console.log("\nExercício 1");
const numb = 5;

if (numb % 2 === 0){
    console.log("Este é um número Par");
} else {
    console.log("Este é um número Impar");
}

//Exercício 2
console.log("\nExercício 2");
let nota1 = 6;
let nota2 = 8;
let nota3 = 9;

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7){
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

//Exercício 3
console.log("\nExercício 3");

for (let i = 10; i >= 0; i--){
    
    if (i === 0){
        console.log("Lançamento do Foguete Iniciado!");
    } else {
        console.log(i);
    }

}

//Exercício 4
console.log("\nExercício 4");

let tarefas = ["Estudar Node", "Fazer Exercício", "Ler Documentação"];
tarefas.push("Praticar Código");

for(let i = 0; i < tarefas.length; i++){
    console.log("Tarefa " + (i+1) + " :" + tarefas[i]);
}

console.log("\nExercício 5");

const celsius = 15;

function converterCelsiusParaFahrenheit(celsius){
    
    let fahrenheit = (celsius * 1.8) + 32;

    console.log(celsius + "° Graus Celsius, são " + fahrenheit + "° em Fahrenheit");
}

converterCelsiusParaFahrenheit(celsius);

console.log("\nExercício 6");

const clientes = [
    {id: 1, nome: "Ana", idade: 25, ativo: true },
    {id: 2, nome: "Beto", idade: 17, ativo: true },
    {id: 3, nome: "Carla", idade: 30, ativo: false },
    {id: 4, nome: "Daniel", idade: 16, ativo: true }
]

const buscarClientesAtivos = () => clientes.filter(clientes => clientes.ativo === true);

const buscarMaioresDeIdade = () => clientes.filter(cliente => cliente.idade >= 18);

const ativos = buscarClientesAtivos ().map(cliente => {
    return `${cliente.nome} - ${cliente.ativo}`; 
})
const maiorIdade = buscarMaioresDeIdade ().map(cliente => {
    return `${cliente.nome} - ${cliente.idade}`; 
})

console.log("Clientes ativos: " , buscarClientesAtivos());
console.log(`Clientes maiores de idade:`, buscarMaioresDeIdade());