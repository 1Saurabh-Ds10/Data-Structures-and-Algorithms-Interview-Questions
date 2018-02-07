/*
Flyweight Pattern

Conserve memory
Takes small portion of object and shares between other pbjects

Only require if there are a lot of objects of a particular class
*/

function Person(data) {
  this.name = data.name;
  this.flyweight = FlyweightFactory.get(data.age, data.hobby, data.education);
}

function Flyweight(age, hobby, education) {
  this.age = data.age;
  this.hobby = data.hobby;
  this.education = data.education;
}
const FlyweightFactory = (function() {
  const flyweights = {};

  function get(age, hobby, education) {
    if (!flyweights[`${age} ${hobby} ${education}`]) {
      flyweights[`${age} ${hobby} ${education}`] = new Flyweight(age, hobby, education);
    }
    return flyweights[`${age} ${hobby} ${education}`];
  }

  return {
    get
  };
})();

const PersonRepo = (function() {
  const persons = {};
  let personCount = 0;

  function addName(data) {
    persons[data.name] = new Person(data);
    personCount++;
  }

  function getPerson(name) {
    return persons[name];
  }

  function getPersonCount() {
    return personCount;
  }

  return {
    addName,
    getPerson,
    getPersonCount
  };
})();
