const fs = require('fs');

module.exports = function(streamName) {
  const subscribe = (projection) => {
    console.log('reading stream...')
    let text = fs.readFileSync(`../data/${streamName}.json`);

    console.log('parsing stream...')
    let parsed = JSON.parse(text);

    console.log('running projection...')
    parsed.forEach(projection);
  };

  return {
    subscribe
  }
}

