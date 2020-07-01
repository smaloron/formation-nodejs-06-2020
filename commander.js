const app = require("commander");
const fs = require("fs");

// Infos sur l'application
app.version("1.0.0");
app.name("My Console Application");
app.description("Un application console avec le module Commander");

// Création d'un commande
app.command("add <name>").action((name) => {
  fs.appendFileSync("./data/fruits.txt", "\n" + name, "utf8");
  console.log("Ajout OK");
});

app.command("clear").action(() => {
  fs.writeFileSync("./data/fruits.txt", "", "utf8");
});

app
  .command("test")
  .option("-u,--user <name>")
  .action((options) => {
    console.log(options.user);
  });

// Lancement de l'application
app.parse(process.argv);
