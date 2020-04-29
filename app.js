var express = require('express');
const bodyParser = require("body-parser")
const date = require(__dirname + "/date.js")


var app = express();
const postmessage = [];
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get('/', function(req, res) {
  let day = date.getDate();
  res.render("postpage", {
    postmessage: postmessage,
    postdate: day
  })
});

app.post("/", function(req, res){
    let mess = req.body.message;
    postmessage.push(mess);
    res.redirect("/");
})

app.listen(process.env.port || 3000, function() {
  console.log('Example app listening on port 3000!');
});