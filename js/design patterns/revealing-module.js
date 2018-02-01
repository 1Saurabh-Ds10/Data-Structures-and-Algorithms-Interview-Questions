
const obj = (function(window) {
  
  let publicAPI;
  const privateVar = 10;
  
  function privateFunc() {
    console.log(privateVar);
  }

  function publicFunc() {
    privateFunc();

  }

  return publicAPI = {
    publicFunc
  };


})(window, undefined);