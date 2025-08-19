import { Animal } from "./Animal";
import { Crocodile } from "./Crocodile";
import { Dog } from "./Dog";
import { Owl } from "./Owl";

const myDog:Dog = new Dog("Cupcake",20)
const myOwl:Owl = new Owl("Edwiges",5)
const myCrocodile:Crocodile = new Crocodile("Bart",40)

let animals:Animal[] = [myDog, myOwl, myCrocodile] 

console.log(myDog.name)
console.log(myDog.weight)
myDog.bark()
myDog.eat()

console.log()
console.log(myOwl.name)
console.log(myOwl.weight)
myOwl.fly()
myOwl.eat()

console.log()
console.log(myCrocodile.name)
console.log(myCrocodile.weight)
myCrocodile.swim()
myCrocodile.eat()

console.log()
//------------------------------------------

for (const animal of animals){
    animal.eat()
}