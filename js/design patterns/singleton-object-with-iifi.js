

const user = (new function(firstname, lastname) {
  this.firtname = firstname;
  this.lastname = lastname;
  this.fullname = function(){
    console.log(`${this.firstname} ${this.lastname}`);
  }
})('John', 'Doe');