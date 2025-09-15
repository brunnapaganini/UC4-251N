import readlineSync from "readline-sync";
import { Calculadora } from "./Calculadora";
import { Desenhista } from "./Desenhista";
import { Estoque } from "./Estoque";
import { Loja } from "./Loja";
import { Mensageiro } from "./Mensageiro";
import { Repositorio } from "./Repositorio";

const calc:Calculadora = new Calculadora()

//passando nambers:
calc.somar(1,2)
//passando strings
calc.somar("mjkvczl","dlvkjfsdk")

// 👇 Testando
const m = new Mensageiro();

m.enviar("Ana", "Oi, tudo bem?");  
// Enviando para: Ana
// Mensagem: Oi, tudo bem?

m.enviar(["João", "Maria"], "Bom dia, galera!");
// Enviando para vários: João, Maria
// Mensagem: Bom dia, galera!

// 👇 Testando
const d = new Desenhista();

d.desenhar(10);       // Desenhando um círculo de raio 10
d.desenhar(20, 30);   // Desenhando um retângulo de 20x30

const r = new Repositorio();
const u = r.buscar(1);     // retorna string
console.log(u)
const lista = r.buscar("a"); // retorna string[]
console.log(lista)

//----------------------------------Exercicios:----------------------

const loja:Loja = new Loja();

loja.adicionarProduto("Roupa")
loja.adicionarProduto(["Roupa","Calçado"])

const estoque = new Estoque();

estoque.remover("Arroz");
// Saída: Produto removido: Arroz

estoque.remover(["Feijão", "Açúcar", "Chocolate"]);
// Saída: Produtos removidos: Feijão, Açúcar
//       Produtos não encontrados: Chocolate

