import { Vehicle } from "./Vehicle";

export class Car implements Vehicle{
    brand: string;
    model: string;
    year: number;

    constructor(brand:string,model:string,year:number){
        this.brand = brand
        this.model = model
        this.year = year
    }
    
    startEngine(): void {
        console.log(`VRUUUUUMMMM`)
    }
}