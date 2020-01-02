var express = require("express");
var app = express();
app.use(express.static("public"));
var bodyParser = require('body-parser');
app.use(express.static("public", { maxAge: 360000000 }));
app.set('views', __dirname + '/public');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.render('gender.html')
})
app.listen(process.env.PORT || 8000, function() {
    console.log("Server is running");

});




