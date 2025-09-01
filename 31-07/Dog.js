"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
var Dog = /** @class */ (function () {
    //o constructor é um método chamado automaticamente quando criamos um objeto a partir dessa classe. Nele, normalmente, vamos passar valores para os atributos.
    function Dog(dogName, dogWeight, dogBreed) {
        this.name = dogName;
        this.weight = dogWeight;
        this.breed = dogBreed;
    }
    //void não tem return
    Dog.prototype.bark = function () {
        console.log("The ".concat(this.name, " is barking."));
    };
    Dog.prototype.eat = function () {
        console.log("The ".concat(this.breed, " is eating."));
    };
    return Dog;
}());
exports.Dog = Dog;
