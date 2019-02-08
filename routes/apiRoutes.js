var db = require("../models");
var Sequelize = require("sequelize");
var Op = Sequelize.Op;

module.exports = function(app) {
  // Get all friends profile in json format
  app.get("/api/friends", function(req, res) {
    db.FurinderProfile.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Add a new friend from questionnaire page
  app.post("/api/newFriend", function(req, res) {
    console.log("New Friend:");
    console.log(req.body);
    db.FurinderProfile.create({
      name: req.body.name,
      age: req.body.age,
      petName: req.body.petName,
      locationByBoroughs: req.body.location,
      breed: req.body.breed,
      petAge: req.body.petAge,
      weight: req.body.weight,
      energy: req.body.energy,
      funFacts: req.body.funFacts,
      favoriteFood: req.body.favoriteFood,
      favoriteToy: req.body.favoriteToy,
      favoritePark: req.body.favoritePark
      
    }).then(function(results) {
      res.json(results);
      
    });
  });


  // Getting a specific friend based on search criteria of name or location or breed
  app.get("/api/:name", function(req, res) {
    db.FurinderProfile.findAll({
      where: {

        [Op.or]:

       [
        {name: req.params.name},
        {locationByBoroughs: req.params.name},
        {breed: req.params.name}
       ]
    }
    }).then(function(results) {
      res.json(results);
    });
  });





  

};

