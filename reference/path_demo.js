const path = require('path');

// Base file name
console.log(path.basename(__filename));

//directory name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename));

// Create path object and access the properties, i.e. here, the basename
console.log(path.parse(__filename).name);

// Concatenate paths
// ../test/hello.html
console.log(path.join(__dirname, 'test', 'hello.html'));