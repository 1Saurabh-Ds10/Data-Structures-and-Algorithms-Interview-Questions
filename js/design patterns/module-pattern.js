/*
Module Pattern

Generally used for stand alone services i.e. database layer or network layer

This pattern is used when there is no need to create multiple similar objects from the blueprint 
*/

const module = (function() {
  let privateVar = 'Hello';

  function privateFunc(args) {
    console.log(args + ' World');
  }

  return {
    publicFunc: function() {
      console.log(privateVar);
    },
    publicFunc2: function(args) {
      privateFunc(args);
    }
  };
})();
