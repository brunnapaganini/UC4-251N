export class Calculadora{

    //aqui crio as assinaturas de metodo, ou seja, defino como esse metodo pode ser chamado
    somar(a:number,b:number):void; //assina que pode receber 2 numeros

    somar(a:string,b:string):void; //assina que pode receber 2 strings

    //aqui criamos a implementação do metodo, ou seja, defino sua logica
    somar(a:any,b:any):any {
        return a + b
    }
}