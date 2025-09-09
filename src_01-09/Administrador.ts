import { AUsuarioSistema } from "./AUsuarioSistema";
import { IAutenticavel } from "./IAutenticavel";

export class Administrador extends AUsuarioSistema implements IAutenticavel{
    autenticar(usuario: string, senha: string): boolean {
        return usuario === "admin" && senha === "1234"
    }
    acessarPainel(): void {
        console.log("Acessou painel do administrador!")
    }
}