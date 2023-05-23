/*
 Using the following code, add two methods: static method genericGreeting and instance method personalGreeting. The first method should log a greeting that's generic to the class. The second method should be an instance method and log a greeting that's custom to the object.

class Cat {
  constructor(name) {
    this.name = name;
  }
}

let kitty = new Cat("Sophie");
Cat.genericGreeting();
kitty.personalGreeting();
*/

class Cat{
	constructor(name){
		this.name = name;
	}
	static genericGreeting(){
		console.log("I'm a Cat")
	}
	personalGreeting(){
		console.log(`I am ${this.name}`)
	}
}

Cat.genericGreeting();
let kitty = new Cat("Sophie");
kitty.personalGreeting();

