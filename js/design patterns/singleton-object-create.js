const obj = Object.create(Object.prototype, {
  valueProp: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 'Hello World'
  },

  getterSetterProp: {
    get: function() {
      return 'hello';
    },
    set: function(val) {
      
    }
  }

}); 