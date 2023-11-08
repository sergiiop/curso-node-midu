const os = require('node:os');

console.log('Info about the current OS:')
console.log(`OS CPU architecture: ${os.arch()}`);

console.log(`Free memory of the system: ${os.freemem() / 1024 / 1024 } `);

console.log(`Total memory of the system: ${os.totalmem() / 1024 / 1024 }`);

console.log(`OS Platform: ${os.platform()}`);

console.log(`Information about the current user: ${os.userInfo()}`);

// CPU
console.log('Info about the current CPU:')
console.log(os.cpus());