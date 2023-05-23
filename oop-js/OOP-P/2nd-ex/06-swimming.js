/*
 Correct the following program so it will work properly. Just make the smallest possible change to ensure that objects of Maltese and Fish class have access to the swim method.

const swimMixin = {
  swim() {
    return `${this.name} is swimming.`;
  }
}

class Fish {
  constructor(name) {
    this.name = name;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

class Maltese extends Dog {}

let dog1 = new Maltese("Buddy");
let fish1 = new Fish("Nemo");

console.log(dog1.swim());
console.log(fish1.swim()); 
*/

/*
class swimMixin  {
  swim() {
    return `${this.name} is swimming.`;
  }
}

class Fish extends swimMixin {
  constructor(name) {
	  super()
    this.name = name;
  }
}

class Dog extends swimMixin{
  constructor(name) {
	  super()
    this.name = name;
  }
}

class Maltese extends Dog {}

let dog1 = new Maltese("Buddy");
let fish1 = new Fish("Nemo");

console.log(dog1.swim());
console.log(fish1.swim()); 

Buddy is swimming.
Nemo is swimming.
*/

const swimMixin = {
  swim() {
    return `${this.name} is swimming.`;
  }
}

class Fish {
  constructor(name) {
    this.name = name;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}
Object.assign(Fish.prototype, swimMixin);
Object.assign(Dog.prototype, swimMixin);
class Maltese extends Dog {}

let dog1 = new Maltese("Buddy");
let fish1 = new Fish("Nemo");

console.log(dog1.swim());
console.log(fish1.swim()); 
