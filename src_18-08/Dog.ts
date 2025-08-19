import { Animal } from "./Animal";

//Usamos a palavra reservada 'extends' para identificar que uma classe é filho de outra
export class Dog extends Animal{

    //Dog, como é filho da classe Animal, já herda os atributos 'name' e 'wheight'

    constructor(name:string, wheight:number){
        //O método 'super()' chama o construtor da classe pai
        //Assim, reutilizamos ele na classe filha
        super(name,wheight)
    }

    bark():void{
        console.log(`${this.name} is barking.`)
    }
}