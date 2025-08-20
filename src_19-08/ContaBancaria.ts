export class ContaBancaria {
    protected saldo:number;

    constructor(saldo:number){
        this.saldo = saldo
    }

    protected atualizarSaldo(valor:number):void{
        this.saldo += valor
        console.log(`Saldo atual da conta bancária: ${this.saldo}`)
    }
}