export abstract class AFuncionario{
    nome:string;

    constructor(nome:string){
        this.nome = nome
    }

    abstract calcularSalario():number
}