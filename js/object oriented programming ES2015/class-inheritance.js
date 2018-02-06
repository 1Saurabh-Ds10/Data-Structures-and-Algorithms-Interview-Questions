

// Each class should be in their own file

class Animal {
  constructor(age) {
    this.age = age;

  }

  showAge() {
    console.log(`${this.age} years old`);
  }

  static play() {
    console.log('Playing');
  }

}



class Dog extends Animal {
  constructor(name, breed, age) {
    super(age);  // if its extending super class then super() is mandatory inside constructor function 
    this._name = name;
    this.breed = breed;
    // this.age = 20; // can modify the properties of Super class but super should be present before this

  }

  get name() {  // getter
    return this._name;
  }

  set name(name) {  // setter
    this._name = name;
  }

  static eat() {
    console.log('Eating');
    console.log(this._name);  // undefined - since its a class static method 
  }

  walk() {
    console.log(`${this._name} is walking`);
  }

  showAge() {
    super.showAge(); // call Super class method

  }

  static play() {
    super.play();
    // console.log('Playing');
  }

}
Dog.legs = 4; // static class properties

let dog = new Dog('Tobu','Pomeranian', 13);


console.log(typeof Dog);  // "function"
console.log(typeof dog);  // "object"

console.log(dog instanceof Dog); // true
console.log(dog instanceof Animal); // true
console.log(dog instanceof Object); // true

console.log(dog['breed']); // "Pomeranian"
console.log(dog.name); // "Tobu"

console.log(Dog.legs); // 4
console.log(dog.legs); // undefined
console.log(Dog.eat()); // "Eating"
console.log(dog.eat()); // Error
console.log(dog.play()); // "Playing" // sub class can access the static method of Super class

