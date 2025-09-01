import { IAutenticavel } from "./IAutenticavel";

export class SistemaLogin implements IAutenticavel{
    usuario:string;
    senha:string;

    constructor(usuario:string,senha:string){
        this.usuario = usuario;
        this.senha = senha;
    }
    
    autenticar(usuario: string, senha: string): boolean {
        if (usuario === "admin" && senha === "1234") {
            return true;
        } else {
            return false;
        }
    }
}