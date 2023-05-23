/*What will the following code log?

*/

class Something {
  constructor() {
    this.data = "Hello";
  }

  dupData() {
    return this.data + this.data;
  }

  static dupData() {
    return "ByeBye";
  }
}

let thing = new Something();
//this will log ByeBye
//gets a hold of the static method
console.log(Something.dupData()==="ByeBye");
// this will log Hello Hello
// gets a hold of the instance method because its an instance object from the class
console.log(thing.dupData()==="HelloHello"); 
