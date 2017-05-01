
var express = require('express');
var app = express();
var path = require('path');



const PORT = 8080;



app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');




app.get('/favicon.ico', function(req, res) {
    res.sendFile(path.join(__dirname, 'favicon.ico'));
});

// Home. Render a simple, descriptive README style page.
app.get('/', function(req, res) {

  res.render('index'); 
  
});

app.listen(PORT, function (){
    console.log('Listening on port ' + PORT);
});


