export class Calculadora {
    numeroUm:number;
    numeroDois:number;

    constructor(num1:number,num2:number){
        this.numeroUm = num1
        this.numeroDois = num2
    }

    somar():void{
        let result = this.numeroUm + this.numeroDois
        console.log(`A soma de ${this.numeroUm} e ${this.numeroDois} é = ${result}`)
    }

    subtrair():void{
        let result = this.numeroUm - this.numeroDois
        console.log(`A subtração de ${this.numeroUm} e ${this.numeroDois} é = ${result}`)
    }

    multiplicar():void{
        let result = this.numeroUm * this.numeroDois
        console.log(`A multiplicação de ${this.numeroUm} e ${this.numeroDois} é = ${result}`)
    }

    dividir():void{
        let result = this.numeroUm / this.numeroDois
        console.log(`A divisão de ${this.numeroUm} e ${this.numeroDois} é = ${result}`)
    }

}