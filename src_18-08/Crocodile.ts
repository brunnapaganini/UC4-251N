import { Animal } from "./Animal";

export class Crocodile extends Animal {

    constructor(name:string,wheight:number){
        super(name,wheight)
    }

    swim():void{
        console.log(`${this.name} is swimming`)
    }
}