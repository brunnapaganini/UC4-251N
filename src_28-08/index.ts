/*import { IProduto } from "./IProduto";
import { IUsuario } from "./IUsuario";

//Aqui criamos um objeto do tipo IUsuario, ou seja, um objeto que SEGUE AS REGRAS da interface que criamos

const meuUsuario:IUsuario = {
    nome: "Jorge",
    idade: 20,
    falar(){
        console.log("blabla")
    }
}

console.log(meuUsuario.nome)

//Interfaces também podem ser usadas para tipar os parâmetros de funções:

function mostrarProduto(produto: IProduto) {
    console.log(`${produto.nome} custa R$ ${produto.preco}`);
  }
  

const produto:IProduto = {
    nome: "Camiseta",
    preco: 99.99
}

mostrarProduto(produto)
mostrarProduto({ nome: "Teclado", preco: 199.90 });*/

import { Circulo } from "./Circulo";
import { IFormaGeometrica } from "./IFormaGeometrica";
import { IFuncionario } from "./IFuncionario";
import { ILivro } from "./ILivro";
import { Quadrado } from "./Quadrado";
import { SistemaLogin } from "./SistemaLogin";
//1
const livro1: ILivro = {
    titulo: "Trono de Vidro",
    autor: "Sarah J Maas",
    anoPublicacao: 2012
}

function mostrarLivro(livro:ILivro):void{
    console.log(`Título: ${livro.titulo}
    \nAutor: ${livro.autor}
    \nAno Publicação: ${livro.anoPublicacao}`)
}

mostrarLivro(livro1)

//4
const funcionario1:IFuncionario = {
    nome: "Jorge",
    cargo: "Desenvolvedor",
    salario: 6000.00
}

function calcularBonus(funcionario:IFuncionario):void{
    console.log(`\nO bônus do funcionário é no valor de R$${funcionario.salario * 0.10}`)
}

calcularBonus(funcionario1)

//5

const quadrado:Quadrado = {
    lado: 2,
    calcularArea():number{
        return this.lado * this.lado
    }
}

const circulo:Circulo = {
    raio: 2,
    calcularArea():number{
        return 3.14 * this.raio * this.raio
    }
}

console.log(`\nÁrea do quadrado é ${quadrado.calcularArea()}`)
console.log(`\nÁrea do círculo é ${circulo.calcularArea()}`)

//9

const sistema = new SistemaLogin();

const usuario = "admin";
const senha = "1234";

if (sistema.autenticar(usuario, senha)) {
  console.log("\nAutenticação bem-sucedida!");
} else {
  console.log("\nUsuário ou senha inválidos.");
}
