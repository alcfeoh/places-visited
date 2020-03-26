const express = require('express');
const app = express();

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist/places-visited'));

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 80, () => console.log('Express server started'));
