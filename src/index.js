const EventStore = require('./EventStore');

const CountEvents = function () {
  let counter = 0;

  return {
    projection: e => counter++,
    result: () => {return counter }
  }
};

let projector = new CountEvents();
new EventStore('7_2015_01_2017_01').subscribe(projector.projection);
console.log('number of events:', projector.result());


