/*

Add new functionality in an exisiting object
i.e. extended functionalities

*/

function Name(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

Name.prototype.showName = function() {
  console.log(`${this.firstname} ${this.lastname}`);
};

let TP = new Name('Tobu', 'Pthk');

BD.middleName = 'Sa';
BD.showMiddleName = function() {
  console.log(`${this.middleName}`);
};

BD.showName = function() {
  console.log(`Hello`);
  Name.prototype.showName.call(this);
};

let BD = new Name('Bebu', 'Ds');
function Person(firstname, lastname, age) {
  Name.call(this, firstname, lastname);
  this.age = age;
}

Person.prototype = Object.create(Name.prototype);
// Person.constructor = Person;
Person.prototype.showAge = function() {
  console.log(`${this.age} years old`);
};
Person.prototype.showName = function() {
  console.log(`Hello`);
  Name.prototype.showName.call(this);
};

let per = new Person('Enu', 'PT', 24);
