require("dotenv").config();
var express = require("express");
const session = require('express-session');
// const cors = require('cors');
// const errorHandler = require('errorhandler');
var exphbs = require("express-handlebars");
var passport = require("passport")

var db = require("./models");

// const isProduction = process.env.NODE_ENV === 'production';

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware and app configuration
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
// app.use(cors());
app.use(session({ secret: 'passport-tutorial', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

require('./models/users')
require('./config/passport')


// app.use((err, req, res) => {
//   res.status(err.status || 500);

//   res.json({
//     errors: {
//       message: err.message,
//       error: {},
//     },
//   });
// });

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
require("./routes/auth.js")(app, passport);
var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
