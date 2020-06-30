const os = require("os");

const params = process.argv.slice(2);
console.log("Hello " + params[0]);

console.log(params);

console.log(`mémoire libre ${os.freemem() / (1024 * 1024 * 1024)} Go`);
console.log(`mémoire totale ${os.totalmem() / (1024 * 1024 * 1024)} Go`);
console.log(` nombre de thread : ${os.cpus().length}`);
console.log(os.cpus());
console.log(`Le dossier home : ${os.homedir()}`);
