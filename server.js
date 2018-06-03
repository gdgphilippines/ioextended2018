const superstatic = require('superstatic');
const connect = require('connect');
const http = require('http');
const app = connect().use(superstatic({
  compression: true,
  cwd: 'public'
}));
http.createServer(app).listen(8080);
console.log('serving at http://localhost:8080');
