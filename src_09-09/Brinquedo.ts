export class Brinquedo {
    nome:string;
    idadeMinima:number;
    preco:number

    public constructor(nome:string, idadeMinima:number, preco:number){
        this.nome = nome
        this.idadeMinima = idadeMinima
        this.preco = preco
    }
}