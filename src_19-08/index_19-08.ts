import { Carro } from "./Carro";
import { ContaPoupanca } from "./ContaPoupanca";
import { Guerreiro } from "./Guerreiro";

const heroi = new Guerreiro(100);
const vilao = new Guerreiro(80);

heroi.atacar(vilao);  // Atacando outro personagem (usa método público que chama protected)
heroi.treinar();       // Acessando protected na própria instância

console.log()
const meuCarro = new Carro(0);
meuCarro.acelerar(30);
meuCarro.acelerar(20);

console.log()
const minhaConta = new ContaPoupanca(1000,0.05)
minhaConta.aplicarJuros();

// ERRO: saldo é protected, não pode ser acessado diretamente
// console.log(minhaConta.saldo);

// ERRO: atualizarSaldo é protected, não pode ser chamado de fora
// minhaConta.atualizarSaldo(500);