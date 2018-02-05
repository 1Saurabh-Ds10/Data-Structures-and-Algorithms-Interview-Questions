/*

Pub - Sub with Events 

 Events.on('click', () => {
      console.log('Hello');
    });
    Events.on('click', () => {
      console.log('There!');
    });
    Events.trigger('click');
    Events.off('click');

*/

class Events {
  constructor() {
    this.events = {};
  }

  // Register an event handler
  on(eventName, callback) {
    if (this.events[eventName]) this.events[eventName].push(callback);
    else this.events[eventName] = [callback];
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if (this.events[eventName]) {
      for (let cb of this.events[eventName]) {
        cb();
      }
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    delete this.events[eventName];
  }
}
