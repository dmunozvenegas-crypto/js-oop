/*Consider the following code:

let butterscotch = new Pet('cat', 'Butterscotch');
let pudding      = new Pet('cat', 'Pudding');
let darwin       = new Pet('bearded dragon', 'Darwin');
let kennedy      = new Pet('dog', 'Kennedy');
let sweetie      = new Pet('parakeet', 'Sweetie Pie');
let molly        = new Pet('dog', 'Molly');
let chester      = new Pet('fish', 'Chester');

let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');

let shelter = new Shelter();
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
shelter.printAdoptions();
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);

Write the classes and methods that will be necessary to make this code run, and log the following output:

P Hanson has adopted the following pets:
a cat named Butterscotch
a cat named Pudding
a bearded dragon named Darwin

B Holmes has adopted the following pets:
a dog named Molly
a parakeet named Sweetie Pie
a dog named Kennedy
a fish named Chester

P Hanson has 3 adopted pets.
B Holmes has 4 adopted pets. */

// ***** THIS BELONGS TO THE SHELTER CLASS******************************
// The following things need to be done to this class first we need to add some code that keeps track of all the pets that each owner object had
// this class will do most of the heavy lift for what needs to be done
// for example this class will take care of creating an empty object this empty object will store the keys that we are recieving from the object that is being passed to 
// it first we will get the properties from the object 

class Pet {
	constructor(animal,name){
		this.animal = animal;
		this.name = name;
	}
	info(){
		this.petInfo = [this.animale, this.name]
		return this.petInfo
	}
	getAnimal(){
		return this.animal;
	}
	getName() {
		return this.name;
	}
	setAnimal(newType) {
		this.animal = newType;
	}
	setName(newName){
		this.name = newName;
	}
}
class Owner {
	constructor(name){
		this.name = name;
		this.adopt = 0;
	}
	numberOfPets(){
		return this.adopt;
	}
}
class Shelter {
	constructor(){
		this.carrierObj = {}; 
	}
	adopt(owner,pet) {
		this.owner = owner;
		this.pet = pet;
		if(!this.carrierObj[this.owner.name]) this.carrierObj[this.owner.name] =[];
		this.carrierObj[this.owner.name].push(this.pet.name)
		this.owner.adopt +=1;
	}
	printAdoptions(){
		// need to make a for loop that iterates over the keys once iterated over the keys 
		// then we need to run a second forloop on the array of objects so we can be able to access each individual element in the array and be able to print them out 
		for(const x in this.carrierObj){
			console.log("This is the property of x which we will iterate over with a forloop " + x)
			for(let z =0; z < this.carrierObj[x].length; z++){
				console.log(this.carrierObj[x][z])
			}
						}		
	}
}
let butterscotch = new Pet('cat', 'Butterscotch');
let pudding      = new Pet('cat', 'Pudding');
let darwin       = new Pet('bearded dragon', 'Darwin');
let kennedy      = new Pet('dog', 'Kennedy');
let sweetie      = new Pet('parakeet', 'Sweetie Pie');
let molly        = new Pet('dog', 'Molly');
let chester      = new Pet('fish', 'Chester');
let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');
let shelter = new Shelter();
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
shelter.printAdoptions();
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);


