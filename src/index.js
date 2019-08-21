const EventStore = require('./EventStore');

const getFileName = () => process.argv.slice(2)[0];

const CountEvents = function () {
  let counter = 0;

  return {
    projection: e => counter++,
    result: () => {return counter }
  }
};

let projector = new CountEvents();

new EventStore(getFileName()).replay(projector.projection);

console.log('number of events:', projector.result());
