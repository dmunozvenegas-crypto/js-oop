/*
 Consider the following classes:


Refactor these classes so they all use a common superclass, and inherit behavior as needed. */
// parent class
class Vehicle {
	constructor(make, model, wheels){
		this.make = make;
		this.model = model;
		this.wheels = wheels;
	}
	getWheels(){
		return this.wheels
	}
	info(){
		return `${this.make} ${this.model}`
	}
}
class Car extends Vehicle{
  constructor(make, model,wheels=4) {
	  super(make,model,wheels)
      }
}
class Motorcycle extends Vehicle{
  constructor(make, model, wheels=2) {
	  super(make,model,wheels)
  }
}
class Truck extends Vehicle{
  constructor(make, model, payload, wheels=6) {
    super(make,model,wheels)
	  this.payload = payload
  }
}

let car = new Car("Kia", "Cadenza")
console.log(car.getWheels())
console.log(car.info())

let motorcycle = new Motorcycle("Kawasaki", "Ninja")
console.log(motorcycle.getWheels())
console.log(motorcycle.info())

let truck = new Truck("Ford", "Explorer","20000 lbs")
console.log(truck.getWheels())
console.log(truck.info())
console.log(truck.payload)





