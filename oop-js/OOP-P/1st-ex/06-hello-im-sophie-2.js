/*Using the code from the previous exercise, move the greeting from the constructor method to an instance method named greet that logs a greeting to the console when invoked.
 class Cat {
  constructor(name) {
    this.name = name;
    console.log(`Hello! My name is ${this.name}!`);
  }
}

let kitty = new Cat('Sophie');
kitty.greet(); */



class Cat{
	constructor(name){
		this.name =name;
	}

	greeting(){
		console.log(`Hello I am ${this.name} `)
	}
}


let kitty = new Cat("Sophie")

kitty.greeting()




