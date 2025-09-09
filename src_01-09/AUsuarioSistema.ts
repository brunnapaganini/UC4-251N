export abstract class AUsuarioSistema{
    nome:string;
    constructor(nome:string) {
        this.nome = nome
    }
    abstract acessarPainel():void
}