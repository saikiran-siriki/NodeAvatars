const express = require("express");
const app = express();
const props = require('./routes/props')
const avatar = require('./routes/avatar')
const bodyParser = require('body-parser');

app.use(express.static("public"));
app.set('views', __dirname + '/public');
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




app.use('/props',  props);
app.use('/avatar',  avatar);


app.get('/', (req, res) => {
    res.render('gender.html')
})
app.get('/createavatar', (req, res) => {
    res.render('avatar.html')
})
app.listen(process.env.PORT || 8000, function() {
    console.log("Server is running");

});




