/*
 Using the following code, create a towMixin mixin that contains a method named tow that returns I can tow a trailer! when invoked. Include the mixin in the Truck class.

class Truck {}

class Car {}

let truck = new Truck();
truck.tow(); 
I can tow a trailer!
	*/
// Example of creating a mixin got to make sure to you return an object that contains a function 
// so a mixin is basically a variable that contains object with function inside of it 
// it must be inside a object and the function needs to be inside the object then you can return whatever you need inside of it 
const towMixin ={
	tow(){
		return "I can tow a trailer!"
	}
}


class Truck {}
// this is how you use the mixin on an object.
Object.assign(Truck.prototype, towMixin)
class Car {}

let truck = new Truck();
console.log(truck.tow()); 




