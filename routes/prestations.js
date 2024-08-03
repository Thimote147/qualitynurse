const express = require('express');
const router = express.Router();

router.get('/', (req,res ) => {
res.render('prestations.hbs');
});

module.exports = router;