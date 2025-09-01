export class Dog{
    //atributos de um cachorro
    name:string
    weight:number
    breed:string

    //o constructor é um método chamado automaticamente quando criamos um objeto a partir dessa classe. Nele, normalmente, vamos passar valores para os atributos.
    constructor(dogName:string, dogWeight:number, dogBreed:string){
        this.name = dogName
        this.weight = dogWeight
        this.breed = dogBreed
    } 
    
    //void não tem return
    bark():void{
        console.log(`The ${this.name} is barking.`)
    }

    eat():void{
        console.log(`The ${this.breed} is eating.`)
    }
}