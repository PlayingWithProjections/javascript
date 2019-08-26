const fs = require('fs');

module.exports = function (...projections) {
  const mapTimestamp = event => ({...event, timestamp: new Date(event.timestamp)});

  const replay = filePath => {
    console.log(`reading events from ${filePath} ...`);
    let text = fs.readFileSync(filePath);

    console.log('parsing events...');
    let events = JSON.parse(text);

    console.log('replaying events...');
    events
      .map(mapTimestamp)
      .forEach(e =>
        projections.forEach(projection => projection(e))
      );
  };

  return {replay}
};

