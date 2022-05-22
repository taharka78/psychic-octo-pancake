var express = require('express')
    , bodyParser = require('body-parser')
    , app = express()
    , port = process.env.PORT || 3000
    , router = express.Router(),
    romanController = require("./controllers/roman.number.controller");



app.use(express.static(__dirname + '/views')); // set the static files location for the static html
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
app.use(bodyParser.json());                      // pull information from html in POST

router.get('/', function(req, res, next) {
    res.render('index.html');
});

// Route for the convertion of my number
router.post("/arabic/convert",romanController.getRomanNumberFromArabic);

app.use('/', router);

app.listen(port);
console.log('App running on port', port);