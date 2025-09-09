import { AFuncionario } from "./AFuncionario";

export class FuncionarioPJ extends AFuncionario{
    pagamentoHora:number;
    horaTrabalhada:number;
    constructor(nome:string,pagamentoHora:number,horaTrabalhada:number){
        super(nome)
        this.pagamentoHora = pagamentoHora
        this.horaTrabalhada = horaTrabalhada
    }

    calcularSalario(): number {
        return this.pagamentoHora * this.horaTrabalhada
    }
}