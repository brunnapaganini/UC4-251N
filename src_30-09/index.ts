//1
function soma<T extends {length:number}>(valor:T):void{
    for (let i = 0; i < valor.length; i++) {
        console.log(valor[i]);
    }
  
   
}

soma([1,2,3])
soma("cachorro")

//2

const quiz = new PerguntaResposta<string,bollean>()
quiz.adicionar("O sol é uma estrela?", true)
quiz.adicionar("A Terra é plana?",false)
quiz.mostrarTudo()

//2.2

