import { AForma } from "./AForma";

export class Triangulo extends AForma{
    base:number;
    altura:number;
    constructor(base:number,altura:number){
        super()
        this.base = base;
        this.altura = altura
    }
    calcularArea(): number {
        return (this.base * this.altura) / 2
    }
}