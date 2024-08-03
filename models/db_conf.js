const db = require("better-sqlite3")("data/qualitynurse.db", { verbose: console.log() });

module.exports = db;