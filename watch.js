const fs = require("fs"); // Lancement du traçage
const spy = fs.watch("./data");
// Réaction à l'événement change

// As-t-on espionné une valeur ?
var triggered = false;
spy.on(
  "change",
  // Callback à chaque changement
  (event, fileName) => {
    // Si on a espionné alors on ne fait rien
    if (triggered) {
      return;
    }
    // on a espionné
    triggered = true;
    console.log(fileName);
    setTimeout(() => (triggered = false), 100);
  }
);
