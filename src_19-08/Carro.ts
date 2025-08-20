import { Veiculo } from "./Veiculo";

export class Carro extends Veiculo{
    constructor(velocidade:number){
        super(velocidade)
    }

    acelerar(valor:number):void{
        this.velocidade += valor
        console.log(`Velocidade atual: ${this.velocidade} km/h`)
    }
}