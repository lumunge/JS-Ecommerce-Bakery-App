//Setting up node and express app
//importing modules
let express = require("express");
let app = express();

//importing sqlite3
let sqlite3 = require("sqlite3");
let db = new sqlite3.Database("db/comments.db");

app.use(express.static(__dirname + "/js"));

//responiding to requests
app.get("/", function(request, response) {
  response.send("Hello Dunia");
});

app.get("/comments", function(request, response) {
  console.log("Get request was received at comments path");
  db.all("SELECT * FROM comments", function(err, rows) {
    if (err) {
      console.log("An error occired" + err);
    } else {
      response.send(rows);
    }
  });
});

app.post("/comments", function(request, response) {
  console.log("Post request at comments");
});

app.listen(3000, function() {
  console.log("Everything is running");
});
