export class Livro {
    titulo:string;
    autor:string;
    preco:number

    public constructor(titulo:string, autor:string, preco:number){
        this.titulo = titulo
        this.autor = autor
        this.preco = preco
    }
}