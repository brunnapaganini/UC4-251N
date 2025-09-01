import { IAnimal } from "./IAnimal";

export class Cachorro implements IAnimal{
    nome: string;
    raca:string

    constructor(nome:string,raca:string){
        this.nome = nome
        this.raca = raca
    }

    emitirSom(): void {
        console.log("Au Au!")
    }
}