//Exemplo 1:
import readlineSync from "readline-sync";
import { DiaDaSemana } from "./DiaDaSemana";
import { Pizza } from "./Pizza";
import {SaborPizza } from "./SaborPizza";
import { TamanhoPizza } from "./TamanhoPizza";
import { NumericLiteral } from "typescript";

/*let dia: DiaDaSemana = DiaDaSemana.Segunda;

if (dia == DiaDaSemana.Segunda){
    console.log(`Hoje é dia de uc4`)
} else if(dia == DiaDaSemana.Quarta){
    console.log(`Hoje é inglês`)
} else {
    console.log(`Hoje é pi`)
}

//Exemplo 2:

const pedido1:Pizza = new Pizza(SaborPizza.MorangoChoco, TamanhoPizza.G)

console.log(pedido1.descricao()) 

//crie um menu usando readline-sync
//as opções vão ser
//pedir pizza: define o sabor, define o tamanho, mostra o pedido

//para definir o sabor, voces podem mostrar na tela os sabores disponiveis, de acordo com o enum
//para isso, percorram o enum (como se fosse um array mesmo) usando um for e exibam no terminal os sabores de pizza para a pessoa escolher (usando numbers)*/

function mostrarMenu() {
    console.log("\n-----MENU-----");
    console.log("1. Pedir pizza");
    console.log("2. Sair");
}

function mostraSabor(): SaborPizza {
    console.log("\n-----MENU DE SABORES DE PIZZA-----");
    Object.values(SaborPizza).forEach((sabor, index) => {
        console.log(`${index + 1}. ${sabor}`);
    });

    let escolhaSabor = readlineSync.questionInt("Escolha o número do sabor desejado: ");
    if (escolhaSabor < 1 || escolhaSabor > Object.values(SaborPizza).length) {
        console.log("Opção inválida. Tente novamente.");
        return mostraSabor(); 
    }

    return Object.values(SaborPizza)[escolhaSabor - 1];
}

function mostraTamanho(): TamanhoPizza {
    console.log("\n-----MENU DE TAMANHOS-----");
    console.log("1. Pequena");
    console.log("2. Média");
    console.log("3. Grande");

    let escolhaTamanho = readlineSync.questionInt("Escolha o número do tamanho desejado: ");
    if (escolhaTamanho < 1 || escolhaTamanho > 3) {
        console.log("Opção inválida. Tente novamente.");
        return mostraTamanho(); 
    }

    return escolhaTamanho === 1 ? TamanhoPizza.P :
           escolhaTamanho === 2 ? TamanhoPizza.M :
           TamanhoPizza.G;
}

let opcao: number = 0;

while (opcao !== 2) {
    mostrarMenu();
    opcao = readlineSync.questionInt("Escolha uma opção: ");

    switch (opcao) {
        case 1:
            const saborEscolhido = mostraSabor();
            const tamanhoEscolhido = mostraTamanho();
            const pedido = new Pizza(saborEscolhido, tamanhoEscolhido);
            console.log("\nSeu pedido:");
            console.log(pedido.descricao());
            break;
        case 2:
            console.log("Saindo...");
            break;
        default:
            console.log("Opção inválida! Tente novamente.");
            break;
    }
}