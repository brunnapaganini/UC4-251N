import { AUsuarioSistema } from "./AUsuarioSistema";
import { IAutenticavel } from "./IAutenticavel";

export class Cliente extends AUsuarioSistema implements IAutenticavel{
    autenticar(usuario: string, senha: string): boolean {
        return usuario === "aurora" && senha === "uva"
    }
    acessarPainel(): void {
        console.log("Acessou painel do cliente!!")
    }
}