const crypto = require("crypto");

// fonction qui génére un hash
// à partir d'une chaine de carcatères
exports.getHash = (pass, algo = "sha256") => {
  return crypto.createHash(algo).update(pass).digest("hex");
};
