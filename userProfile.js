var express = require("express");
var app = express();
var PORT = process.env.PORT || 3306;
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "pet_profileDB"
});

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  app.get("/", function(req, res) {
    connection.query("SELECT * FROM userLogin;", function(err, data) {
      if (err) {
        return res.status(500).end();
      }
  
      res.render("index", { furienderProfile: data });
    });
  });
  app.get("/:id", function(req, res) {
    connection.query("SELECT * FROM userLogin where id = ?", [req.params.id], function(err, data) {
      if (err) {
        return res.status(500).end();
      }
  
      console.log(data);
      res.render("furinder", data[0]);
    });
  });

  app.post("/api/furinder", function(req, res) {
    connection.query("INSERT INTO userLogin (username, email, userPassword) VALUES (?, ?)", 
    [req.body.username, req.body.email, req.body.userPassword], function(
      err,
      result
    ) {
      if (err) {
   
        return res.status(500).end();
      }

      res.json({ id: result.insertId });
    });
  });
  
  app.delete("/api/userLogin/:id", function(req, res) {
  connection.query("DELETE FROM userLogin WHERE id = ?", [req.params.id], function(err, result) {
    if (err) {
      // If an error occurred, send a generic server failure
      return res.status(500).end();
    }
    else if (result.affectedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();

  });
});

app.put("/api/userLogin/:id", function(req, res) {
    connection.query(
      "UPDATE userLogin SET username = ?, email = ?, userPassword =?, WHERE id = ?",
      [req.body.username, req.body.email, req.body.userPassword],
      function(err, result) {
        if (err) {
        
          return res.status(500).end();
        }
        else if (result.changedRows === 0) {
        
          return res.status(404).end();
        }
        res.status(200).end();
  
      }
    );
  });

  app.listen(PORT, function() {
   
    console.log("Server listening on: http://localhost:" + PORT);
  });