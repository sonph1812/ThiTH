class Animal {
    name;
    weight;

    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    setName() {
this.name = name;
    }

    setWeight() {
this.weight= this.weight
    }

    getName() {
  return this.name;
    }

    getWeight() {
return this.weight;
    }

    toString() {
console.log("tôi là"+ this.name+ this.weight +"kg")
    }
}
let objAniamal1 = new Animal();
let objAniamal2 = new Animal("mouse",10);
objAniamal2.getName("mouse")
objAniamal1.setName("elephant")
objAniamal1.toString()

