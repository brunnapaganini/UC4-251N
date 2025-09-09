import { ACla } from "./ACla";

export class ClaUchiha extends ACla{
    constructor(){
        super("Uchiha","Sasuke")
    }
    habilidadeEspecial(): void {
        console.log(`Habilidade Especial: Sharingan`)
    }
}

export class ClaHyuuga extends ACla{
    constructor(){
        super("Hyuuga","Hiashi")
    }
    habilidadeEspecial(): void {
        console.log(`Habilidade Especial: Byakugan`)
    }
}

export class ClaNara extends ACla{
    constructor(){
        super("Nara","Shikamaru")
    }
    habilidadeEspecial(): void {
        console.log(`Habilidade Especial: Manipulação de Sombras`)
    }
}

export class ClaAkimichi extends ACla{
    constructor(){
        super("Akimichi","Chouza")
    }
    habilidadeEspecial(): void {
        console.log(`Habilidade Especial: Ampliação Corporal`)
    }
}