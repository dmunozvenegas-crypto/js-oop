/*Modify the following code so that Hello! I'm a cat! is logged when Cat.genericGreeting is invoked.

class Cat {

}

Cat.genericGreeting();
*/

class Cat{
	constructor(name) {
		this.name =name;
	}
	static genericGreeting(){
		console.log("I'm a cat!")
	}
}

Cat.genericGreeting()




