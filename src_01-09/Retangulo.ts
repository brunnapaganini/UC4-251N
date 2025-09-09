import { AForma } from "./AForma";

export class Retangulo extends AForma{
    altura:number;
    largura:number;
    constructor(altura:number,largura:number){
        super()
        this.altura = altura;
        this.largura = largura
    }
    calcularArea(): number {
        return this.altura * this.largura
    }
}