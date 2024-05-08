const net = require("net");
const connect = require("./client")


console.log("Connecting ...");
connect();







// establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: '165.227.47.243',
//     port: 50541,
//   });

//   conn.setEncoding("utf8");
//   conn.on("data", (data) => {
//     console.log("Server says: ", data);
//   })

//   return conn;
// };