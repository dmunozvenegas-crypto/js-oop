/*
 Using the following code, create a mixin named walkMixin that contains a method named walk. This method should return Let's go for a walk! when invoked. Include walkMixin in Cat and invoke walk on kitty.

class Cat {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello! My name is ${this.name}!`;
  }
}

let kitty = new Cat("Sophie");
console.log(kitty.greet());
console.log(kitty.walk()); 
*/

class walkinMixins{
	walk(){
		return "Lets go for a walk";
	}
}
class Cat extends walkinMixins{
  constructor(name) {
	  super()
    this.name = name;
  }

  greet() {
    return `Hello! My name is ${this.name}!`;
  }
}

let kitty = new Cat("Sophie");
console.log(kitty.greet());
console.log(kitty.walk());


/* This is how you create a mixin 
 which is an interface that can be used on other objects
 a mixinin is basically a varaible that holds function 
 that then gets assigned to Class 
class Cat {
	constructor(name){
	this.name =name;
	}
	greet(){
	return `Hello! My name is ${this.name}!`;
	}
}
// THE FOLLOWING CODE IS AN EXAMPLE OF CREATING A MIXIN 
// its function expression
	const walkMixin = {
	walk(){
	return "Let's go for a walk!";
	}
}
// this is how you use the mixin on an object
Object.assign(Cat.prototype, walkMixin);
let kitty = new Cat("Sophie")
console.log(kitty.greet());
console.log(kitty.walk());




 */







