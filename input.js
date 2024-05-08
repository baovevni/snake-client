const connect = require('./client');
const { IP, PORT, keys } = require("./constants");

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
      case keys.CTRLC:
        process.exit();
        break;
      case keys.keyW:
        connection.write("Move: up");
        break;
      case keys.keyA:
        connection.write("Move: left");
        break;
      case keys.keyS:
        connection.write("Move: down");
        break;
      case keys.keyD:
        connection.write("Move: right");
        break;
      case keys.keyE:
        connection.write("Say: I am going to wiiiin! Argh!");
        break;
      case keys.keyQ:
        connection.write("Say: Out of my waaay!");
        break;
      default:
        break;
    }
};

module.exports = setupInput;