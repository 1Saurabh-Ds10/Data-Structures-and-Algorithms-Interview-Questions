/*

Factory Pattern

It is used to create different objects based on need, from the blueprint

Eg: If there are multiple types of layers i.e. Database, Service, Network etc, 
the layer factory pattern can be defined to create multile types of layers

*/

const Factory = function() {
  this.getLayer = function(type) {
    switch (type) {
      case 'db': {
        if (this.db) {
          // cache
          return this.db;
        } else {
          this.db = new DB(); // assume that, DB class is defined somewhere in the file
          return this.db;
        }
      }

      case 'network': {
        return new NW(); // assume that, NW class is defined somewhere in the file
      }
    }
  };
};

let factory = new Factory();

/************************************************** */
// Eg: 2

const layerFactory = function() {
  let layerCache = this;
  const layerList = [
    { name: 'data', path: './data' },
    { name: 'network', path: './network' },
    { name: 'databae', path: './database' }
  ];

  layerList.forEach(l => {
    layerCache[l.name] = require(l.path)();
  });
};

module.exports = new layerFactory();
