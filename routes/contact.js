const express = require('express');
const router = express.Router();

const Contact = require("../models/Contact.js");

router.get('/', (req, res) => {
    res.render('contact.hbs');
});

router.post('/new-client', (req, res) => {
    Contact.addClient(req.body);
    res.redirect("/contact#formContact");
});

module.exports = router;