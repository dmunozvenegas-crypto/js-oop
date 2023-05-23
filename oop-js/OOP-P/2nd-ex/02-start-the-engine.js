/*Change the following code so that creating a new Truck automatically invokes startEngine.

class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends Vehicle {
  startEngine() {
    console.log('Ready to go!')
  }
}

let truck = new Truck(2003);
console.log(truck.year); // 2003 
*/


class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends Vehicle {
	// need to create a constructor since we are going to invoke a instance method and we are inheriting from the parent class year 
	constructor(year){	
		super(year)
		this.startEngine() 
  }
 startEngine() {
    console.log('Ready to go!')
  }

 }

let truck = new Truck(2003);
console.log(truck.year); // 2003 


