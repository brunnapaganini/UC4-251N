import { ContaBancaria } from "./ContaBancaria";

export class ContaPoupanca extends ContaBancaria {
    private taxaJuros:number

    constructor(saldo:number, taxaJuros:number){
        super(saldo);
        this.taxaJuros = taxaJuros;
    }

    public aplicarJuros():void{
        const juros = this.saldo * this.taxaJuros;
        this.atualizarSaldo(juros);
    }
}