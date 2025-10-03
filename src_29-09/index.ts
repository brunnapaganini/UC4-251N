function somaNumero(num1: number, num2: number): number {
    return num1 + num2;
}

somaNumero(10, 20);

function somaString(palavra1: string, palavra2: string): string {
    return palavra1 + palavra2;
}

somaString("O", "I");

function soma<T extends string | number>(parametro1: T, parametro2: T): T {
    return ((parametro1 as any) + (parametro2 as any)) as T;
}

soma<string>("O", "I");
soma<number>(10, 20);

function retornaItem<T>(item: T): T {
    return item;
}

retornaItem<number>(10);
retornaItem<string>("oi");
retornaItem<boolean>(true);

function pegaPrimeiro<T>(lista: T[]): T {
    return lista[0];
}

const numeros = [1, 2, 3];
const palavras = ["a", "b", "c"];

pegaPrimeiro(numeros);
pegaPrimeiro(palavras);

function mostraTamanho<T extends { length: number }>(item: T): number {
    return item.length;
}

mostraTamanho("Oi");
mostraTamanho([1, 2, 3]);

interface TemNome { nome: string; }

function mostraNome<T extends TemNome>(obj: T): string {
    return obj.nome;
}

mostraNome({ nome: "Ana" });
mostraNome({ nome: "João", idade: 20 });

class Animal { mover() { console.log("Movendo..."); } }
class Cachorro extends Animal { latir() { console.log("Au au!"); } }

function fazMover<T extends Animal>(animal: T) {
    animal.mover();
}

fazMover(new Animal());
fazMover(new Cachorro());

class Caixa<T> {
    conteudo: T;

    constructor(item: T) {
        this.conteudo = item;
    }

    pegar(): T {
        return this.conteudo;
    }
}

const caixaDeString = new Caixa<string>("Oi");
console.log(caixaDeString.pegar()); 

const caixaDeNumero = new Caixa<number>(123);
console.log(caixaDeNumero.pegar()); 