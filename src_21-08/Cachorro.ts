import { Animal } from "./Animal";

export class Cachorro extends Animal {
    //Sobrescrevendo um método que foi criado na classe pai
    //Não consegue adc parametros na classe filho, só na pai na hora de sobrescrever
    falar(): void {
        console.log("O cachorro late");
    }
}