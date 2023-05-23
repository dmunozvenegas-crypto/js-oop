class MyClass {
	//Property field
	name;
	//Constructor
	constructor() {
		//Constructor body
	}
	//Instance Field
	myField = "foo";
	//Instance Method
	myMethod() {
		//myMethod body
	}
	//static field
	static myStaticField = "bar";
	//static myStaticMethod
	static myStaticMethod() {
		//myStaticMethod body
	}
	//static Block
	static {
		// Static Intialization code
	}

	//Fields, methods, static fields, static methods
	// "private" forms
	#myPrivateField = "bar";
}
//*****************Constructing a Class*****************************
const myInstance = new MyClass();

console.log(myInstance.myField);
myInstance.myMethod();

//***** Another example going over constructor in the class and how to use it*********
class Color {
	// can rertire this constructor use a rest parameter
	/*
	constructor(r,g,b){
		// Assign the RGB value as a property of this.
		this.values = [r,g,b];
	}
	*/
	//using rest parameter inside the constructor 
	//creating a private prooerty to hide data we use the hash dign
	#values

	constructor(r,g,b){
		//we use the this to reference our private variable and assign the incoming values
		this.#values = [r,g,b];
	}
	// creating a getting methode to retrieve data make sure to return 
	getRed() {
		return this.#values[0];
	}
	//creating a setMethod to update data
	setRed(value){
		//set some logic if red is within range
		if(value<0 || value >255){			
			throw new RangeError("Invalid R Value");
		}
		this.#values[0] = value;
	}
	redDifference(anotherColor){
		return this.#values[0] - anotherColor.#values[0];
	}
	//getter and setters
	get red() {
		return this.values[0]
	}
	set red(value) {
		this.values[0] = value;
	}
	// static methods cannot be accessed from an instance of a class
	static isValid(r,g,b) {
		return r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b<= 255;
	}
	static purple = [12,34,56]
	// have static intialization blocks 
	static {
		Color.myStaticColor="Yellow";
	}
//Overriding 
	toString() {
		return this.#values.join(", ");
	}
}


class ColorWithAlpha extends Color {
	#alpha;
	constructor(r,g,b,a) {
		super(r,g,b);
		this.#alpha = a;
	}
	get alpha() {
		return this.#alpha;
	}
	set alpha(value) {
		if(value < 0 || value > 1 ) {
			throw new RangeError("Alpha value must be between 0 and 1");
		}
		this.#alpha = value;
	}

	//overridingstatic isValid(r, g, b, a) {
    // Call the parent class's isValid() and build on the return value
	static isValid(r,g,b,a){
    return super.isValid(r, g, b) && a >= 0 && a <= 1;
	}

      toString() {
    // Call the parent class's toString() and build on the return value
    return `${super.toString()}, ${this.#alpha}`;
  }  
	
}

console.log(new Color(255,0,0).toString());

class Fruits{

	constructor(name, color, taste) {
		this.arr = [name,color,taste]
	}
	arr = [this.name,this.color,this.taste]
	toString() {
		return arr.join(", ")
	}
}

class Apple extends Fruits{
	constructor(name,color,taste,size) {
		super(name,color,taste);
		this.size = size;
	}

}

class A {
}
A.prototype = 5
class B extends A {
}


const Combine = new B();
console.log("********** FIRST LOG TO TEST TEST")

console.log(Combine)




const fuijiApple = new Apple("Fuiji Apple","Bright red", "Sweet", "4 inches");

console.log("Logging my First fruit");

console.log(Apple.toString())










// create a an object from the class or an instances
const red = new Color(255,0,0);
//console.log(red.getRed())
//red.setRed(1900)
const crimson = new Color(220,20,60);
console.log(red.redDifference(crimson)); //35

console.log(Color.isValid(1000,0,0))

console.log(Color.purple)

