export class Animal {
    public name: string
    public weight:number

    constructor(name:string, weight:number){
        this.name = name
        this.weight = weight
    }

    eat():void{
        console.log(`${this.name} is eating.`)
    }
}