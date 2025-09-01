import { IFormaGeometrica } from "./IFormaGeometrica";

export class Quadrado implements IFormaGeometrica{
    lado:number

    constructor(lado:number){
        this.lado = lado
    }

    calcularArea(): number {
        return this.lado * this.lado
    }
}