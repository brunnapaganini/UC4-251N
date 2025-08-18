import { Monstro } from "./Monstro";

export class Personagem{
    private nome:string;
    private classe:string;
    private vida:number;
    private forca:number;

    constructor(nome:string, classe:string, vida:number, forca:number){
        this.nome = nome;
        this.classe = classe;
        this.vida = vida;
        this.forca = forca;
    }

    getNome():string{
        return this.nome;
    }

    getClasse():string{
        return this.classe;
    }

    setClasse(classeGame:string){
        if(classeGame === "Guerreiro" || classeGame === "Mago" || classeGame === "Arqueiro"){
            this.classe === classeGame;
        } else{
            console.log("Classe não encontrada ou não existe!")
        }
    }

    getVida():number{
        return this.vida;
    }

    getForca():number{
        return this.forca;
    }
    
    atacar(monstro: Monstro):void{
        console.log(`${this.nome} atacou ${monstro.getNome()} causando ${this.forca} de dano`);
        monstro.danoP(this.forca);
    }

    dano(dano:number):void{
        this.vida = this.vida - dano;
        if(this.vida < 0 )this.vida = 0;{
            console.log(`${this.nome} agora tem ${this.vida} de vida`)
        }
    }
    

    resultado():void{
        console.log(`${this.nome} - vida: ${this.vida} - força: ${this.forca}`)
    }
}