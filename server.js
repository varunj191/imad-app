var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();

var articles = {
 "article-one": {
    title : "Article: One - Farmer in india",
    heading: "Article-one",
    date: "September 1, 2016",
    content:   ` <p>hi this is article one>/p>
                <p>ajfjalkfjlksj</p>`,
    links:   `<a href="/">Home</a>
             <a href="/mainpage">Mainpage</a>
             <a href="/article-two">Article two</a>
             <a href="/article-three">Article Three</a>`
 },
 "article-two": {
    title : "Article: two - Farmet in SouthIndia",
    heading: "Article-two",
    date: "September 1, 2016",
    content:   ` <p>hi this is article two>/p>
                <p>ajfjalkfjlksj</p>`,
    links:   `<a href="/">Home</a>
             <a href="/mainpage">Mainpage</a>
             <a href="/article-One">Article One</a>
             <a href="/article-three">Article Three</a>`
},
 "article-three": {
    title : "Article: three - Farmet in Tamilnadu",
    heading: "Article-three",
    date: "September 1, 2016",
    content:   ` <p>hi this is article three>/p>
                <p>ajfjalkfjlksj</p>`,
    links:   `<a href="/">Home</a>
             <a href="/mainpage">Mainpage</a>
             <a href="/article-one">Article One</a>
             <a href="/article-two">Article two</a>`
   }
};

function createTemplate (data)  {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var links = data.links;
    var htmltemplate = `
    <html>
    <head>
       <title>
         ${title}
       </title>
    </head?
    <body>
       ${heading}
       ${date}
       ${content}
       ${links}
     </body>
    </html>
    `;
    return htmltemplate;
}


app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
  var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/mainpage', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'mainpage.html'));
});
app.get('/forgetpassword', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'forgetpassword.html'));
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
