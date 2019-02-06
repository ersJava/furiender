var furiends = require("../data/furiends");

module.exports = function(app) {

  app.get("/api/furiends", function(req, res) {
    // db.Example.findAll({}).then(function(dbExamples) {
      res.json(furiends);
    });
  // });

};

//   // Create a new example
//   app.post("/api/examples", function(req, res) {
//     db.Example.create(req.body).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });

//   // Delete an example by id
//   app.delete("/api/examples/:id", function(req, res) {
//     db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });
// };
