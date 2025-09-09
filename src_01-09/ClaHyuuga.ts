import { ACla } from "./ACla"

export class ClaHyuuga extends ACla{
    constructor(){
        super("Hyuuga","Hiashi")
    }
    habilidadeEspecial(): void {
        console.log(`Habilidade Especial: Byakugan`)
    }
    ataqueEspecial(): void {
        console.log("Ataque Especial: Punho Suave - Ataca diretamente o sistema de chakra do inimigo.");
    }
}