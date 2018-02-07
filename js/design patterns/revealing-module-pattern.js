/*
Revealing Module Pattern

Its similar to Module Pattern

Generally used for stand alone services i.e. database layer or network layer

This pattern is used when there is no need to create multiple similar objects from the blueprint 

*/

const module = (function(window) {
  let privateVar = 'Hello';
  let publicAPI;

  function privateFunc() {
    console.log(privateVar);
  }

  function publicFunc() {
    console.log(privateFunc() + ' World');
  }

  function publicFunc2(args) {
    console.log(args);
  }

  return (publicAPI = {
    publicFunc,
    publicFunc2
  });
})(window, undefined);
