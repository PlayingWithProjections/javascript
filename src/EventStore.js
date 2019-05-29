const fs = require('fs');

module.exports = function(streamName) {
  const subscribe = (projection) => {

    let text = fs.readFileSync(`../data/${streamName}.json`);
    console.log('read all!')
    let parsed = JSON.parse(text);
    console.log('parsed all!')
    parsed
      .forEach(projection);
  };

  return {
    subscribe
  }
}

