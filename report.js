const newman = require('newman');
require('dotenv').config();

newman.run({
    collection: `https://api.postman.com/collections/29254130-1c4809e3-f7dd-45a8-ab21-212389c45a4f?access_key=${process.env.pmat_key}`,
     
    // If running from local file, use this instead:
    // collection: require('./collection/dmoney.json'),

    reporters: 'htmlextra',
    iterationCount: 1,

    reporter: {
        htmlextra: {
            export: './Reports/report.html'  // Report file location
        }
    }

}, function (err) {
    if (err) { 
        throw err; 
    }
    console.log('collection run complete!');
});