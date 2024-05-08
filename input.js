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
  // when ctrl + c is entered = disconnect
  if (key === "\u0003") {
    process.exit();
  }
  // when 'w' is clicked - move up
  if (key === "\u0077") {
    connection.write("Move: up");
  }
  // when 'a' is clicked - move left
  if (key === "\u0061") {
    connection.write("Move: left");
  }
  // when 's' is clicked move down
  if (key === "\u0073") {
    connection.write("Move: down");
  }
  // when 'd' is clicked move right
  if (key === "\u0064") {
    connection.write("Move: right");
  }
};

module.exports = setupInput;