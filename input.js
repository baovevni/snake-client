const connect = require('./client');
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
    switch (key) {
      case "\u0003":
        process.exit();
        break;
      case "\u0077":
        connection.write("Move: up");
        break;
      case "\u0061":
        connection.write("Move: left");
        break;
      case "\u0073":
        connection.write("Move: down");
        break;
      case "\u0064":
        connection.write("Move: right");
        break;
      case "\u0065":
        connection.write("Say: I am going to wiiiin! Argh!");
        break;
      case "\u0071":
        connection.write("Say: Out of my waaay!");
        break;
      default:
        break;
    }
};

module.exports = setupInput;