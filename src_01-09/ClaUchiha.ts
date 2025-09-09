import { ACla } from "./ACla";

export class ClaUchiha extends ACla{
    constructor(){
        super("Uchiha","Sasuke")
    }
    habilidadeEspecial(): void {
        console.log(`Habilidade Especial: Sharingan`)
    }
    ataqueEspecial(): void {
        console.log("Ataque Especial: Amaterasu - Chamas negras que queimam tudo.");
    }
}