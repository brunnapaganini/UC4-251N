import { PrecoPizza } from "./PrecoPizza";
import {SaborPizza } from "./SaborPizza";
import { TamanhoPizza } from "./TamanhoPizza";

export class Pizza {
    private sabor:SaborPizza
    private tamanho:TamanhoPizza
    private preco:PrecoPizza
    
    constructor(sabor:SaborPizza,tamanho:TamanhoPizza){
        this.sabor= sabor
        this.tamanho = tamanho
        this.preco = this.precoPiz()
    }

    precoPiz():PrecoPizza{
        switch (this.tamanho){
            case TamanhoPizza.G:
            return PrecoPizza.precoG
            case TamanhoPizza.M:
                return PrecoPizza.precoM;
            case TamanhoPizza.P:
                return PrecoPizza.precoP;
        } 
    }

    descricao():string {
        return `Pizza ${this.sabor}, Tamanho ${this.tamanho}, Preço: R$${this.preco.toFixed(2)}`
    }

}