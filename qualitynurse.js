const express = require('express');
const session = require('express-session');
const createError = require('http-errors');
const path = require('path');
const logger = require('morgan');
const hbs = require('hbs');

const indexRouter = require("./routes/index.js");
const prestationsRouter = require("./routes/prestations.js");
const contactRouter = require("./routes/contact.js");
const extraRouter = require("./routes/extra.js");
const secteurRouter = require("./routes/secteur.js");
const liensRouter = require("./routes/liens.js");

const app = express();
const port = 3006;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ secret: "Your secret key", resave: false, saveUninitialized: false }));
app.use(function (req, res, next) { res.locals.session = req.session; next(); });

app.use("/", indexRouter);
app.use("/prestations", prestationsRouter);
app.use("/contact", contactRouter);
app.use("/extra", extraRouter);
app.use("/secteur", secteurRouter);
app.use("/liens", liensRouter);

app.use(function (req, res, next) {
    res.status(404).sendFile(__dirname + '/views/404.html');
});

app.use((error, req, res) => {
    res.status(error.status || 500);
    res.render('error', { error });
});

app.listen(port, () => console.log('App listening on port ' + port));
