import { Dog } from "..Dog"

//STRING
let nome: string = "Leonardo"

//NUMBER
let idade: number = 30

//BOOLEAN
let deMaior: boolean = true

//ARRAYS
let numeros: Array<number> = [1,2,3]
let nomes: string[] = ["Leo", "Bob", "Vance"]

//OBJETO LITERAL
let pessoa: {nome:string, idade:number} = {
    nome: "Leo",
    idade:30
}

//INSTALAR BIBLIOTECA: 
//    npm init
//IR DANDO ENTER ATÉ FINALIZA

//FUNÇÃO
function calcula(num:number, num2:number):number {
    return num + num2
}
console.log(calcula(10,20))

function mensagem(meuNome:string):string {
    return `Olá ${meuNome}, tudo bem com você?`
}

//função com parametros opcionais
function sayHello(name?:string):void {
    console.log("Hello,",name || "World")
}
sayHello("Leonardo")

function frase():void {
    console.log("E ae")
}

function applyDiscount(price:number, discount:number = 0.05):number{
    return price * (1- discount)
}

console.log(
    applyDiscount(100),
    applyDiscount(100, 0.9)
)

//Crio objetos a partir da classe Dog
let myDog:Dog = new Dog("Bob", 25, "Golden-Retrivier")
let myOtherDog:Dog = new Dog("Fido", 5, "Vira-Lata")

//Assim eu acesso seus atributos
console.log(myDog.breed) //Retorna Golden-Retrivier
console.log(myOtherDog.name) //Retorna Fido

//Assim eu chamo os metodos
myDog.bark()
myOtherDog.eat()

