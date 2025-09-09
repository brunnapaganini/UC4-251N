import { ACla } from "./ACla"

export class ClaNara extends ACla{
    constructor(){
        super("Nara","Shikamaru")
    }
    habilidadeEspecial(): void {
        console.log(`Habilidade Especial: Manipulação de Sombras`)
    }
    ataqueEspecial(): void {
        console.log("Ataque Especial: Costura Sombria - Usa a sombra para prender e atacar o inimigo.");
    }
}
