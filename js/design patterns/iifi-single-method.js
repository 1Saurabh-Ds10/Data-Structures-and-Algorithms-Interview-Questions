
const obj = {
  foo: 20,
  func: (function(baz) {
    const data = 10;
    
    return function(bar) {
      return data * bar * this.foo * baz;
    };
  
  })(10)
};


console.log(obj.func(20));
