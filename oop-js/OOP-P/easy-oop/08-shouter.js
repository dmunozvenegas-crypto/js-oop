/*
 Rewrite these two object types to use the class keyword, instead of direct prototype manipulation. Person exposes method greeting which when called logs the provided greeting text. Shouter is a subtype of Person and is a bit loud so whatever he says is uppercased.

function Person() {
}
Person.prototype.greeting = function(text) {
  console.log(text);
}

function Shouter() {
  Person.call(this);
}
Shouter.prototype = Object.create(Person.prototype)
Shouter.prototype.greeting = function(text) {
  Person.prototype.greeting.call(this, text.toUpperCase());
}

let person = new Person();
let shouter = new Shouter();

person.greeting("Hello. It's very nice to meet you."); // Hello. It's very nice to meet you
shouter.greeting("Hello my friend."); // HELLO MY FRIEND. 
*/


/*
class Person{
	
	greeting(text){
		return text;
	}
}
class Shouter extends Person{
	
	greeting(text){
		return super.greeting(text).toUpperCase();}
}
let person = new Person();
let shouter = new Shouter();
console.log(person.greeting("Hello. It's very nice to meet you.")); // Hello. It's very nice to meet you
console.log(shouter.greeting("Hello my friend.")); // HELLO MY FRIEND. 
*/
class Person{
	
	greeting(text){
		return text;
	}
}
class Shouter extends Person{
	
	greeting(text){
		return super.greeting(text).toUpperCase();}
}
let person = new Person();
let shouter = new Shouter();
console.log(person.greeting("Hello. It's very nice to meet you.")); // Hello. It's very nice to meet you
console.log(shouter.greeting("Hello my friend.")); // HELLO MY FRIEND. 

