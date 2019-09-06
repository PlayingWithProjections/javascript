const StreamArray = require('stream-json/streamers/StreamArray');
const fs = require('fs');

module.exports = function (...projections) {
  const mapTimestamp = event => ({...event, timestamp: new Date(event.timestamp)});

  const replay = (filePath, callback) => {

    const jsonStream = StreamArray.withParser();

    jsonStream.on('data', data => {
      let eventWithTimestamp = mapTimestamp(data.value);
      projections.forEach(projection => projection(eventWithTimestamp))
    });
    jsonStream.on('end', () => {
      callback();
    });

    console.log(`reading events from ${filePath} ...`);
    fs.createReadStream(filePath).pipe(jsonStream.input);
  };

  return {replay}
};



