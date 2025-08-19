import { Animal } from "./Animal";

export class Owl extends Animal {

    constructor(name:string,wheight:number){
        super(name,wheight)
    }

    fly():void{
        console.log(`${this.name} is flying`)
    }
}