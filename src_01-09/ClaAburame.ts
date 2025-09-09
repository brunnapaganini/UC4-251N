// ClaAburame.ts
import { ACla } from "./ACla";

export class ClaAburame extends ACla {
    constructor() {
        super("Aburame", "Shino");
    }

    public habilidadeEspecial(): void {
        console.log("Habilidade Especial: Controle de insetos - Usa insetos para ataque, defesa e espionagem.");
    }

    public ataqueEspecial(): void {
        console.log("Ataque Especial: Insetos Paralisantes - Insetos drenam chakra e imobilizam o inimigo.");
    }
}
