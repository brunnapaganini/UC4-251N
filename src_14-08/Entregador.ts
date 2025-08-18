import {Pacote} from "./Pacote";

export class Entregador {
    private nome:string;

    constructor(nome:string){
        this.nome = nome;
    }

    entregandoPacote(pacote:Pacote){
        console.log(`${this.nome} está entregando o pacote de ${pacote.getPeso()}kg para ${pacote.getDestino()}`)
    }

    trocarEndereco(pacote:Pacote, novoEndereco:string){
        pacote.setDestino(novoEndereco);
        console.log(`O novo endereço do pacote é ${novoEndereco}`);
    }
}