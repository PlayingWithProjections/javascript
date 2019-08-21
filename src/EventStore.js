const fs = require('fs');

module.exports = function (...projections) {
  const replay = (filePath) => {
    console.log(`reading events from ${filePath} ...`);
    let text = fs.readFileSync(filePath);

    console.log('parsing events...');
    let events = JSON.parse(text);

    console.log('replaying events...');
    events.forEach(e =>
      projections.forEach(projection => projection(e))
    );
  };

  return {replay}
};

