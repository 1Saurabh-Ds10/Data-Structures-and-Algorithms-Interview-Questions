/*
Constructor Design Pattern

*/

function Name(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

Name.prototype.showName = function() {
  console.log(`${this.firstname} ${this.lastname}`);
};

let TP = new Name('Tobu', 'Pthk');
let BD = new Name('Bebu', 'Ds');

/* ************************************************** */
// In ES2015

class Name {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  showName() {
    console.log(`${this.firstname} ${this.lastname}`);
  }
}

let TP = new Name('Tobu', 'Pthk');