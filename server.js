var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();

var articleone = `<html>
    <head>
        <link href="/ui/style.css" rel="stylesheet" />
        <title>
        Article one header yoo
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
          <style>
        .container{
            max-width: 800px;
            margin:0 outo;
            color: grey
            font-family: sans-serif;
        }
    </style>
    </head>
      <body>
       <div class = "center">
               <div>
              <a href ="/">Home</a>
              </div>
              <hr/>
              <h2>
                         Hello my first article its
             </h2>
  
            <div>
               <p> Hello wow</p>

              </div>
        </div>
    </body>
</html>
`
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
  res.sendFile((articleone));
});
app.get('/article-two', function (req, res) {
 res.send('Article two restarted');
});
app.get('article-three', function (req, res) {
res.send('Article three restarted');
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
