// Importation du modue events
const EventEmitter = require("events");

// instanciation d'un nouvel EventEmitter
// qui est exporté pour que les autres
// fichiers puissent écouter
exports.fruitEvent = new EventEmitter();

// Création d'une liste vide
const fruitList = [];

// Fonction d'ajout d'élément à la liste
exports.addItem = (item) => {
  if (fruitList.indexOf(item) >= 0) {
    // Si item existe emission d'un signal error
    this.fruitEvent.emit("error", `${item} existe déjà`);
  } else {
    // s'il n'existe pas
    // Ajout dans le tableau
    fruitList.push(item);
    // emission d'un signal change
    this.fruitEvent.emit("change", fruitList);
  }

  // Fonction de suppression dans la liste
  exports.removeItem = (item) => {
    const index = fruitList.indexOf(item);
    if (index === -1) {
      this.fruitEvent.emit("error", `${item} n'existe pas`);
    } else {
      // Suppression dans le tableau
      fruitList.splice(index, 1);
      // emission d'un signal change
      this.fruitEvent.emit("change", fruitList);
    }
  };
};
