const mongoose = require('mongoose');
mongoose.connect('');

const connectionString = "mongodb://localhost:27017/restarant-app";
mongoose.connect('mongodb://yudam:5163@ds125932.mlab.com:25932/testdb')

const EventEmitter = require('events');
const socket = new EventEmitter();

const Restaurant = require('./model/Restaurant');
socket.on("get-restaurants", () => {
  console.log("server - get-restaurants called");

  Restaurant.find((error, doucuments) => {
    if (error) console.log(`Error occured on Restaurant.find(): ${error}`);
    else {
      console.log(`Restaurant.find() returned documents: ${documents}`);
      const data = documents.map(x => x => x.name);
      socket.emit("restaurant-data", data);
    }
  })
  socket.emit("restaurant-data", ["pizza", "chicken sandwiches"]);
});

// const http = require("http"),
//   url = require("url"),
//   fs = require("fs"),
//   io = require("socket.io");

// const server = http.createServer(function(req, res) {
//   var path = url.parse(req.url).pathname;
//   switch (path) {
//     case "/":
//       fs.readFile(__dirname + "/index.html", function(err, data) {
//         if (err) return send404(res);
//         res.writeHead(200, {
//           "Content-Type": path == "json.js" ? "text/javascript" : "text/html"
//         });
//         res.write(data, "utf8");
//         res.end();
//       });
//       break;

//     default:
//       send404(res);
//   }
// });
// const send404 = function(res) {
//   res.writeHead(404);
//   res.write("404");
//   res.end();
// };

// const PORT = 8080;
// server.listen(PORT, () => console.log(`server started on localhost:${PORT}`));

// // socket.io, I choose you
// const ioServer = io.listen(server);

// // socket.io setup and manager
// ioServer.on("connection", function(socket) {
//   // now we have a client object!
//   console.log("Connection accepted.");

//   // event listeners
//   socket.on("message", function(message) {
//     console.log(`Recieved message: ${message} - from client`);
//     socket.emit("msgreceived");
//   });

//   socket.on("disconnect", function() {
//     console.log("Disconnected...");
//   });

//   socket.on("get-restaurants", () => {
//     console.log("server - get-restarants called");
//     socket.emit("restaurants-data", ["pizza", "chicken sandwiches"]);
//   });
// });
