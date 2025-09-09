import { AFuncionario } from "./AFuncionario";

export class FuncionarioCLT extends AFuncionario{
    salarioFixo:number;
    constructor(nome:string,salarioFixo:number){
        super(nome)
        this.salarioFixo = salarioFixo
    }

    calcularSalario(): number {
        return this.salarioFixo
    }
}