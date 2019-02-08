// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads home.html
  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/HTML/home.html"));
  });

  // about route loads about.html
  app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/HTML/about.html"));
  });

  // create_profile route loads create_profile.html
  app.get("/create_profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/HTML/create_profile.html"));
  });

  // my_profile route loads my_profile.html
  app.get("/my_profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/HTML/my_profile.html"));
  });

  // index route loads index.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/HTML/index.html"));
  });

  // placeholder route loads placeholder.html
  app.get("/placeholder", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/HTML/placeholder.html"));
  });

  // questionnaire
  app.get("/questions", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/HTML/questionaire.html"));
  });

  // signup
  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/HTML/signup.html"));
  });

};
