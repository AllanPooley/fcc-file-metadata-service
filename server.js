
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const multer  = require('multer');
const upload = multer(); // Opts: { dest: 'uploads/' }


const PORT = 8080;


app.use(bodyParser.urlencoded({ extended: true }));
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

app.post('/feel', upload.any(), function(req, res) {
    
    // Loop through all files delivered in request and prepare a metadata
    // response for each.
    
    if (req.files.length > 0) {
        
        var fileMetadata = [];
        
        for (var i = 0; i < req.files.length; i++){
            
            var resObj = {
                file_name: req.files[i].originalname,
                file_size_bytes: req.files[i].size,
                file_extension: req.files[i].originalname.split('.').pop()
            }
            
            fileMetadata.push(resObj);
        }
        
        res.send(fileMetadata);
        
    } else {
        res.send({ 'error' : "No files submitted for feelin! You're really messing with my zen thing, man."})
    }
});

app.listen(PORT, function (){
    console.log('Listening on port ' + PORT);
});


