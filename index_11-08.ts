import * as readline from 'readline-sync';

function somar(a: number, b: number): number {
    return a + b;
}

function subtrair(a: number, b: number): number {
    return a - b;
}

function multiplicar(a: number, b: number): number {
    return a * b;
}

function dividir(a: number, b: number): number | string {
    if (b === 0) {
        return "Erro: não é possível dividir por zero!";
    }
    return a / b;
}

let opcao: number = 0;

while (opcao !== 5) {
    console.log("\n=== CALCULADORA ===");
    console.log("1 - Somar");
    console.log("2 - Subtrair");
    console.log("3 - Multiplicar");
    console.log("4 - Dividir");
    console.log("5 - Sair");

    opcao = Number(readline.question("Escolha uma opção: "));

    if (opcao >= 1 && opcao <= 4) {
        const a = Number(readline.question("Digite o primeiro número: "));
        const b = Number(readline.question("Digite o segundo número: "));
        let resultado: number | string;

        switch (opcao) {
            case 1:
                resultado = somar(a, b);
                console.log("Resultado: " + resultado);
                break;
            case 2:
                resultado = subtrair(a, b);
                console.log("Resultado: " + resultado);
                break;
            case 3:
                resultado = multiplicar(a, b);
                console.log("Resultado: " + resultado);
                break;
            case 4:
                resultado = dividir(a, b);
                console.log("Resultado: " + resultado);
                break;
        }
    } else if (opcao === 5) {
        console.log("Saindo da calculadora. Até logo!");
    } else {
        console.log("Opção inválida. Por favor, tente novamente.");
    }
}

