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
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  // about route loads about.html
  app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/about.html"));
  });

  // create_profile route loads create_profile.html
  app.get("/create_profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/create_profile.html"));
  });

  // my_profile route loads my_profile.html
  app.get("/my_profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/my_profile.html"));
  });

  // index route loads index.html
  app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // placeholder route loads placeholder.html
  app.get("/placeholder", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/placeholder.html"));
  });

};
