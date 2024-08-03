const db = require("./db_conf.js")

module.exports.addClient = (infos) => db.prepare("INSERT INTO contacts(lastname, firstname, email, object, message) VALUES (?,?,?,?,?)").run(infos.lastname, infos.firstname, infos.email, infos.object, infos.message);