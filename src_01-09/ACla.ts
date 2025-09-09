export abstract class ACla {
    nomeDoCla:string;
    lider:string;
    constructor(nomeDoCla:string,lider:string){
        this.nomeDoCla = nomeDoCla
        this.lider = lider
    }

    abstract habilidadeEspecial():void;
    exibirDetalhes():void{
        console.log(`O ${this.lider} é o lider do clã ${this.nomeDoCla}`)
    }
}