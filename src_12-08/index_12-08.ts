import { Cachorro } from "./Cachorro";
import { Calculadora } from "./Calculadora";

//Para podermos criar um objeto da nossa classe "Cachorro", primeiro criamos uma váriavel que deve ser tipo Cachorro

//Depois, atribuimos valor a esta váriavel usando a palara new seguida do nome da classe junto ao parenteses. assim chamamos o construtor da classe e devemos, dentro dos parenteses, passar TODOS os valores que nós definimos.

//Quando criamos um objeto, chamamos isso de INSTANCIAR O OBJETO DA CLASSE

const meuCachorro:Cachorro = new Cachorro("Fofo","Pitbull",3)
const meuOutroCachorro:Cachorro = new Cachorro("CupCake","Rottweiler",1)

//Para chamarmos os metodos destes objetos, chamamos o nome da variavel + . + o nome do metodo + ()

meuCachorro.correr()
meuCachorro.latir()

meuOutroCachorro.correr()
meuOutroCachorro.latir()

//Para acessarmos um valor do atributo de um objeto, chamamos o nome da variavel + . + o nome do atributo

console.log(meuCachorro.idade)

//Para trocarmos o valor de um atributo de um objeto, chamamos o nome + . + o nome do atributo, depois "=" e passamos o novo valor

meuCachorro.idade = 4
console.log(meuCachorro.idade)

//Crie um novo arquivo chamado Calculadora, dentro deste arquivo crie a classe Calculadora, crie os atributos numeroUm e numeroDois, faça o construtor, depois, faça os métodos somar, subtrair, multiplicar e dividir. Após isso, no arquivo index_12-08.ts, instancie e chame seus métodos.

const minhaCalculadora:Calculadora = new Calculadora(4,2)

minhaCalculadora.somar()
minhaCalculadora.subtrair()
minhaCalculadora.multiplicar()
minhaCalculadora.dividir()