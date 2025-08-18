import { Personagem } from "./Personagem";

export class Monstro{
    private nome:string;
    private vida:number;
    private forca:number;

    constructor(nome:string, vida:number, forca:number){
        this.nome = nome;
        this.vida = vida;
        this.forca = forca;
    }

    getNome():string{
        return this.nome;
    }

    getVida():number{
        return this.vida;
    }

    getForca():number{
        return this.forca;
    }

    atacarP(heroi: Personagem):void{
        console.log(`${this.nome} atacou ${heroi.getNome()} causando ${this.forca} de dano`);
        heroi.dano(this.forca);
    }

    danoP(dano:number):void{
        this.vida = this.vida - dano;
        if(this.vida < 0 )this.vida = 0;{
            console.log(`${this.nome} agora tem ${this.vida} de vida`);
        }
    }

    resultado():void{
        console.log(`${this.nome} - vida: ${this.vida} - força: ${this.forca}`)
    }
}