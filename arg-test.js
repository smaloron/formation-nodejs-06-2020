const argParser = require("arg");
const lodash = require("lodash");

const rawParams = argParser(
  {
    "--name": [String],
    "--ok": Boolean,
  },
  {
    permissive: true,
  }
);

const params = lodash.mapKeys(rawParams, (value, key) => {
  if (key == "_") {
    return "misc";
  } else {
    return key.substr(2);
  }
});

console.log(params);
console.log(params.name);
