export class Loja{
    adicionarProduto(produto:string):string;
    adicionarProduto(produtos: string[]): string[];

    adicionarProduto(arg:any):any {
        if (typeof arg === "string") {
            console.log("Produto adicionados: " + arg)
          } else {
            console.log("Produtos adicionado: " + arg)
          }
        }
}