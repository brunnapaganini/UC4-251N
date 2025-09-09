import { AForma } from "./AForma";
import { AFuncionario } from "./AFuncionario";
import { AUsuarioSistema } from "./AUsuarioSistema";
import { Administrador } from "./Administrador";
import { ClaAburame } from "./ClaAburame";
import { ClaAkimichi } from "./ClaAkimichi";
import { ClaHyuuga } from "./ClaHyuuga";
import { ClaNara } from "./ClaNara";
import { ClaUchiha } from "./ClaUchiha";
import { Cliente } from "./Cliente";
import { FuncionarioCLT } from "./FuncionarioCLT";
import { FuncionarioPJ } from "./FuncionarioPJ";
import { IAutenticavel } from "./IAutenticavel";
import { Retangulo } from "./Retangulo";
import { Triangulo } from "./Triangulo";

//1,2,3
const funcionario1: AFuncionario = new FuncionarioCLT("Roberto", 7000.00)

console.log(`O funcionario ${funcionario1.nome} tem o salario fixo de R$${funcionario1.calcularSalario()}`)

const funcionario2: AFuncionario = new FuncionarioPJ("Joaquim", 10, 8)

console.log(`\nA soma das horas trabalhadas do funcionario ${funcionario2.nome} é de R$${funcionario2.calcularSalario()}`)

//4,5,6

const formas: AForma[] = [new Retangulo(2, 6), new Triangulo(6, 3)]

console.log(`\nO valor da area do retangulo é:${formas[0].calcularArea()}
O valor da area do triangulo é: ${formas[1].calcularArea()}`)

//7,8,9,10

const admin = new Administrador("Jorge")
if (admin.autenticar("admin","1234")) {
    admin.acessarPainel();
} else {
    console.log("Login invalido")
}

const cliente = new Cliente("Rafael")
if (cliente.autenticar("aurora","uva")) {
    cliente.acessarPainel
} else {
    console.log("Login invalido")    
}

//Exercicio Naruto

const clans = [
    new ClaUchiha(),
    new ClaHyuuga(),
    new ClaNara(),
    new ClaAkimichi(),
    new ClaAburame()
];

for (const clan of clans) {
    clan.exibirDetalhes();
    clan.habilidadeEspecial();
    clan.ataqueEspecial();
    console.log("------------------------");
}