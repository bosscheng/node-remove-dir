const removeDir = require('../lib/remove-dir');
const path = require('path');

const dir = path.join(__dirname,'a');

const result = removeDir(dir);
console.log(result);
