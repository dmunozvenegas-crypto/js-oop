/*You have the following classes.

class Person {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "strolls";
  }
}

class Cat {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "saunters";
  }
}

class Cheetah {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "runs";
  }
}

You need to modify the code so that this works:

let mike = new Person("Mike");
console.log(mike.walk());
// "Mike strolls forward"

let kitty = new Cat("Kitty");
console.log(kitty.walk());
// "Kitty saunters forward"

let flash = new Cheetah("Flash");
console.log(flash.walk()) */


class Person {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "strolls";
  }
  walk() {
	  return this.name + " " + this.gait() + " " +"forward";
  }
}

class Cat {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "saunters";
  }
	walk() {
	  return this.name + " " + this.gait() + " "+"forward";
  }

}

class Cheetah {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "runs";
  }
walk() {
	  return this.name + " " + this.gait() + " " + "forward";
  }

}

//You need to modify the code so that this works:

let mike = new Person("Mike");
console.log(mike.walk());
// "Mike strolls forward"

let kitty = new Cat("Kitty");
console.log(kitty.walk());
// "Kitty saunters forward"

let flash = new Cheetah("Flash");
console.log(flash.walk()) 
