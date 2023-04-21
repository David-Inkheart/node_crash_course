const os = require('os');

// Platform
console.log(os.platform());

// CPU Arch
console.log (os.arch());

// CPU Core Info
console.log(os.cpus());

// Free memory
console.log(os.freemem());

// Total memory
console.log(os.totalmem());

// Home dir
console.log(os.homedir());

// user name
console.log(os.userInfo().username);

// Uptime
console.log(os.uptime() / 3600);

// convert to hours and minutes
const uptime = os.uptime();
const hours = Math.floor(uptime / 3600);
const minutes = Math.floor((uptime % 3600) / 60);
console.log(`${hours} hours and ${minutes} minutes`);

// Output user info
console.log(`Hello ${os.userInfo().username}, you are running on ${os.platform()} and your CPU architecture is ${os.arch()}. You have ${os.freemem()} free memory and ${os.totalmem()} total memory. Your home directory is ${os.homedir()}. You have been using your computer for ${hours} hours and ${minutes} minutes.`);

