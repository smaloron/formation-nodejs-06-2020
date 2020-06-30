// Import du module
const list = require("./my-modules/fruit-list");

// Définition des écouteurs d'événements

list.fruitEvent.on("error", (message) => {
  console.log(message);
});

list.fruitEvent.on("change", (data) => console.log(data));

// Test avec des ajouts et suppressions

//ajout
list.addItem("Pommes");
list.addItem("Poires");

//ajout d'un doublon
list.addItem("Poires");

//suppression
list.removeItem("Pommes");

//suppression d'élément inexistant
list.removeItem("Oranges");
