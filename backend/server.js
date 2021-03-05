const app = require("./app");
const http = require('http');

const hostname = '127.0.0.1';
const port = process.env.PORT || 5000;

app.set("port", port);

const server = http.createServer(app);
// server.listen(process.env.PORT || 5000 , hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

server.listen(process.env.PORT || 5000, () => 
console.log(`Server has started.`));