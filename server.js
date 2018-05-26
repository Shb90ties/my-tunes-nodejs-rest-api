/** packages */
const http = require('http');
/** import the app module created in the app.js file */
const app = require('./app');

const port = process.env.PORT || 8000;
/** create a server instance from app.js */
const server = http.createClient(app);

server.listen(port);