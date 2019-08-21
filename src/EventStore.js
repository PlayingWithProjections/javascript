const fs = require('fs');

module.exports = function (filePath) {
  const replay = (projection) => {
    console.log(`reading events from ${filePath} ...`)
    let text = fs.readFileSync(filePath);

    console.log('parsing events...');
    let events = JSON.parse(text);

    console.log('replaying events...');
    events.forEach(projection);
  };

  return {replay}
};

