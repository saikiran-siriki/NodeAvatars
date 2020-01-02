const express = require("express");
const app = express();
var props = require('./routes/props')
var avatar = require('./routes/avatar')
var packs = require('./routes/packs')
var assets = require('./routes/assets')
var random = require('./routes/random')
const bodyParser = require('body-parser');

app.use(express.static("public"));
app.set('views', __dirname + '/public');
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




app.use('/props',  props);
app.use('/assets',  assets);
app.use('/avatar',  avatar);
app.use('/packs',  packs);
app.use('/random',random)


app.get('/', (req, res) => {
    res.render('gender.html')
})
app.get('/createavatar', (req, res) => {
    res.render('avatar.html')
})
app.get('/viewpacks', (req, res) => {
    res.render('packs.html')
})
app.get('/random', (req, res) => {
    res.render('checkasset.html')
})
app.listen(process.env.PORT || 8000, function() {
    console.log("Server is running");

});




