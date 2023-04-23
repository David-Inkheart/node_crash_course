const EventEmitter = require('events');
const uuid = require('uuid');
const fs = require('fs');
const path = require('path');

class Logger extends EventEmitter {
    // Raise an event
    log = (msg) => this.emit('message', { id: uuid.v4(), msg });
}

const logger = new Logger();

logger.on('message', (data) => fs.appendFile(path.join(__dirname, 'log.txt'), `${data.id}: ${data.msg} 
`, (err) => {
    if (err) throw err;
    console.log('Message logged');
}));

logger.log('Hello World');
logger.log('Hey David');
logger.log('Hello');