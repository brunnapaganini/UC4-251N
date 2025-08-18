import { Monstro } from "./Monstro";
import { Personagem } from "./Personagem";
import readline from "readline-sync";

let personagem: Personagem | null = null;
let monstro: Monstro | null = null;
let jogoAtivo = true;

function adicionarPersonagem() {
    const nomeP = readline.question("Nome do personagem: ");
    const classe = readline.question("Classe do personagem: ");
    personagem = new Personagem(nomeP, classe, 100, 15);
    console.log(`Personagem ${nomeP} criado com sucesso!\n`);
}

function adicionarMonstro() {
    const nomeM = readline.question("Nome do monstro: ");
    monstro = new Monstro(nomeM, 80, 20);
    console.log(`Monstro ${nomeM} criado com sucesso!\n`);
}

function lutar() {
    if (!personagem || !monstro) {
        console.log("Você precisa criar um personagem e um monstro antes de lutar!\n");
        return;
    }

    personagem.atacar(monstro);
    monstro.atacarP(personagem);

    console.log(`Vida do personagem: ${personagem.getVida()}`);
    console.log(`Vida do monstro: ${monstro.getVida()}\n`);

    if (personagem.getVida() <= 0) {
        console.log("O personagem morreu. Fim de jogo.");
        jogoAtivo = false;
    }

    if (monstro.getVida() <= 0) {
        console.log("O monstro foi derrotado! Parabéns!");
        jogoAtivo = false;
    }
}

function curar() {
    if (!personagem) {
        console.log("Crie um personagem antes de tentar curar!\n");
        return;
    }
    personagem.dano(-20); 
    console.log(`${personagem.getNome()} foi curado! Vida atual: ${personagem.getVida()}\n`);
}

function fugir() {
    console.log("Você fugiu da batalha. Jogo encerrado.");
    jogoAtivo = false;
}

while (jogoAtivo) {
    console.log("\n=== MENU ===");
    console.log("1. Adicionar herói");
    console.log("2. Adicionar monstro");
    console.log("3. Lutar");
    console.log("4. Curar");
    console.log("5. Fugir (encerrar o jogo)");

    const opcao = readline.question("Escolha uma opção: ");

    switch (opcao) {
        case "1":
            adicionarPersonagem();
            break;
        case "2":
            adicionarMonstro();
            break;
        case "3":
            lutar();
            break;
        case "4":
            curar();
            break;
        case "5":
            fugir();
            break;
        default:
            console.log("Opção inválida.");
    }
}

console.log("Jogo encerrado.");
