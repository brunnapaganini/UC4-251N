export interface Vehicle {
    brand:string;
    model:string;
    year:number;
    startEngine():void; //Em interface não vai lógica nos métodos
}