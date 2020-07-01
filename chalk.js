const chalk = require("chalk");
// Alias de console.log
const log = console.log;
// Alias des fonctions chalk
const error = chalk.red;
const warning = chalk.yellow;
const info = chalk.green;
const shout = chalk.bgRed.black;
const bigError = error.bgCyan.bold;
// Utilisation
log(error("Une erreur"));
log(warning("Une alerte"));
log(info("Une info"));
log(shout("Une info"));
log(bigError("Une grosse erreur"));

const rgbText = chalk.rgb(10, 50, 150).bgRgb(255, 255, 5);
const hexText = chalk.bgHex("#FF0000").hex("#FFFF00");
const colorText = chalk.keyword("gold").bgKeyword("darkblue");
log(rgbText("Hello!"));
log(hexText("Hello"));
log(colorText("Hello"));
