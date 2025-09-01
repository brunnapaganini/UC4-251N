"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dog_1 = require("./Dog");
//STRING
var nome = "Leonardo";
//NUMBER
var idade = 30;
//BOOLEAN
var deMaior = true;
//ARRAYS
var numeros = [1, 2, 3];
var nomes = ["Leo", "Bob", "Vance"];
//OBJETO LITERAL
var pessoa = {
    nome: "Leo",
    idade: 30
};
//INSTALAR BIBLIOTECA: 
//    npm init
//IR DANDO ENTER ATÉ FINALIZA
//FUNÇÃO
function calcula(num, num2) {
    return num + num2;
}
console.log(calcula(10, 20));
function mensagem(meuNome) {
    return "Ol\u00E1 ".concat(meuNome, ", tudo bem com voc\u00EA?");
}
//função com parametros opcionais
function sayHello(name) {
    console.log("Hello,", name || "World");
}
sayHello("Leonardo");
function frase() {
    console.log("E ae");
}
function applyDiscount(price, discount) {
    if (discount === void 0) { discount = 0.05; }
    return price * (1 - discount);
}
console.log(applyDiscount(100), applyDiscount(100, 0.9));
//Crio objetos a partir da classe Dog
var myDog = new Dog_1.Dog("Bob", 25, "Golden-Retrivier");
var myOtherDog = new Dog_1.Dog("Fido", 5, "Vira-Lata");
//Assim eu acesso seus atributos
console.log(myDog.breed); //Retorna Golden-Retrivier
console.log(myOtherDog.name); //Retorna Fido
//Assim eu chamo os metodos
myDog.bark();
myOtherDog.eat();
