//1

function alunoInfo(nomeAluno:string, idadeAluno:number, matriculado:boolean):void {
    console.log(`Aluno ${nomeAluno}, ${idadeAluno} anos, está matriculado: ${matriculado}`)
}
alunoInfo("João",16, true)

//2

let alunos:string[] = ["Ana","Bruno","Carlos","Diana","Eduardo"]
function listaAlunos(alunos:string[]):string {
    let lista:string = "Alunos:"
    for (let i = 0; i < alunos.length;i++){
        lista += "\n" + alunos[i]
    }
    return lista
}
console.log(listaAlunos(alunos))

//3

function saudacao(nome:string):void {
    console.log(`Olá, ${nome}! Bem-vindo(a) à turma.`)
}
saudacao("Larissa")

//4

function calculaMedia(nota1:number,nota2:number,nota3:number):number {
    return (nota1 + nota2 + nota3)
}
console.log("Nota Final: " + calculaMedia(10,10,10));

//5

let nomesAlunos: string[] = ["João", "Maria", "Pedro"]
function contarAlunos(nomesAlunos: string[]): string {
    return "Total de alunos: " + nomesAlunos.length
}
console.log(contarAlunos(nomesAlunos))
