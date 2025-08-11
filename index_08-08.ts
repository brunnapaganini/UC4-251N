//1
const estaChovendo = true;
if (estaChovendo === true) {
  console.log("Leve um guarda-chuva")
} else {
  console.log("Está um bom dia para caminhar")
}

//2
const nota = 7;
const resultado = nota >= 7 ? "Aprovado" : "Reprovado";

//3
const animal:string = 'gato';
switch (animal) {
  case "cachorro":
    console.log("Au Au");
    break;
  case "gato":
    console.log("Miau");
    break;
  default:
    console.log("Desconhecido.");
}

//4
import * as readline from 'readline-sync';
let controlador = true

while (controlador) {
  console.log("=== MENU PRINCIPAL ===");
  console.log("1 - Olá");
  console.log("2 - Sobre");
  console.log("3 - Sair");

  const opcao = readline.question("Escolha uma opção: ");

  switch (opcao) {
    case "1":
      console.log("Olá! Seja bem-vindo!")
      break;
    case "2":
      console.log("Este é um exemplo de menu com switch.")
      break;
    case "3":
      console.log("Saindo...")
      controlador = false
      break;
    default:
      console.log("Opção inválida.")
  }
}
