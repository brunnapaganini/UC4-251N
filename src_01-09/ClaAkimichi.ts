import { ACla } from "./ACla"

export class ClaAkimichi extends ACla{
    constructor(){
        super("Akimichi","Chouza")
    }
    habilidadeEspecial(): void {
        console.log(`Habilidade Especial: Ampliação Corporal`)
    }
    ataqueEspecial(): void {
        console.log("Ataque Especial: Mega Palma - Um soco gigante com força devastadora.");
    }
}