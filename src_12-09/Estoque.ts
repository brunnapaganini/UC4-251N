export class Estoque {
  produtos: string[];
  constructor() {
    this.produtos = ["Arroz", "Feijão", "Macarrão", "Óleo", "Açúcar"]
  }
  remover(produto: string): string;
  remover(produtos: string[]): string[];

  remover(arg: any): any {
    if (Array.isArray(arg)) {
      for (let i = 0; i < arg.length; i++) {
        const produto = arg[i];
        const index = this.produtos.indexOf(produto);
        if (index !== -1) {
          this.produtos.splice(index, 1);
          console.log("Produto removido: " + produto);
        } else {
          console.log("Produto não encontrado: " + produto);
        }
      }
    }
  }
}