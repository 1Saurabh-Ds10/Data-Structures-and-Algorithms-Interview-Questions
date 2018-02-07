/*
Singleton Pattern

The object will have only one instance accross the application

it caches the request and provides the cached response on subsequent call

*/

const NetworkService = (function() {
  let response;
  function createRes() {
    const networkObj = {
      timeout: 2000,
      async: true
    };

    return networkObj;
  }

  return {
    getResponse: function() {
      if (!response) {
        response = createRes();
      }
      return response;
    }
  };
})();
