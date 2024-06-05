const EventEmitter = require("events");

// emit - Making a noise, produce - signalling

const Logger = require("./logger2");
const logger = new Logger();

// Register a listener
logger.on("messageLogged", (arg) /* e, eventArg */ => {
  console.log("Listener called", arg);
});

logger.log("message");
