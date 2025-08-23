import { Pagamento } from "./Pagamento";

export class CartaoCredito extends Pagamento {
    processar():void{
        console.log(`Pagamento em cartão de crédito em processamento!`)
    }
}