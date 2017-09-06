var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
//Multiple articles
var articles = {
 "article-one": {
     title: `Article: One - Farmer in india`,
    heading: `<h1 align="align-center">Article-one</h1>`,
    date: "September 1, 2016",
    content:   `
                <p>In 2014, the National Crime Records Bureau of India reported 5,650 farmer suicides.[1] The highest number of farmer suicides were recorded in 2004 when 18,241 farmers committed suicide.[2] The farmers suicide rate in India has ranged between 1.4 and 1.8 per 100,000 total population, over a 10-year period through 2005</p>
               <p>India is an agrarian country with around 70% of its people depending directly or indirectly upon agriculture. Farmer suicides account for 11.2% of all suicides in India.[1] Activists and scholars have offered a number of conflicting reasons for farmer suicides, such as monsoon failure, high debt burdens, government policies, public mental health, personal issues and family problems.[4][5][6] There are also accusation of states manipulating the data on farmer suicides</p>
               <div class="vertical-line"></div>
               <!--The button <button id="counter"> click me </button>has been clicked<span id="count"> 0 </span> times -->
              <div><input type = button value="Like" id="counter"/> -- <span id="count" > 0 </span></div>
              <br>
              <input type = "text" placeholder="Type your comment here"  id="inputbox" />
              <button type="submit" value="Submit" id="Submit1">Submit</button>
             <ul id = 'namelist'>
             </ul>
             <script type="text/javascript" src="ui/main.js"> </script>`,
    links:   `<a href="/">Home</a>
             <a href="/mainpage">Mainpage</a>
             <a href="/article-two">Article two</a>
             <a href="/article-three">Article Three</a>`
 },
 "article-two": {
     title: `<title>Article: two - Farmet in SouthIndia</title>`,
    heading: `<h1 align="align-center">Article-two</h1>`,
    date: "September 2, 2016",
    content:   ` 
                <p>Historical records relating to frustration, revolts and high mortality rates among farmers in India, particularly cash crop farmers, date back to the 19th century.[8][9] However, suicides due to the same were rare.[10] The high land taxes of 1870s, payable in cash regardless of the effects of frequent famines on farm output or productivity, combined with colonial protection of usury, money lenders and landowner rights, contributed to widespread penury and frustration among cotton and other farmers, ultimately leading to the Deccan Riots of 1875-1877.[10][11] The British government enacted the Deccan Agriculturists’ Relief Act in 1879, to limit the interest rate charged by money lenders to Deccan cotton farmers, but applied it selectively to areas that served British cotton trading interests.[10][12] Rural mortality rates, in predominantly agrarian British India, were very high between 1850 and the 1940s.[13][14] However, starvation related deaths far exceeded those by suicide, the latter being officially classified under "injuries".[15] The death rate classified under "injuries", in 1897, was 79 per 100,000 people in Central Provinces of India and 37 per 100,000 people in Bombay Presidency.[16]</p>
                <p>Ganapathi and Venkoba Rao analyzed suicides in parts of Tamil Nadu in 1966. They recommended that the distribution of agricultural organo-phosphorus compounds be restricted.[17] Similarly, Nandi et al. in 1979 noted the role of freely available agricultural insecticides in suicides in rural West Bengal and suggested that their availability be regulated.[18] Hegde studied rural suicides in villages of northern Karnataka over 1962 to 1970, and stated the suicide incidence rate to be 5.7 per 100,000 population.[19] Reddy, in 1993, reviewed high rates of farmer suicides in Andhra Pradesh and its relationship to farm size and productivity.[20]</p>
               <div class="vertical-line"></div>
               <!--The button <button id="counter"> click me </button>has been clicked<span id="count"> 0 </span> times -->
              <div><input type = button value="Like" id="counter"/> -- <span id="count" > 0 </span></div>
              <br>
              <input type = "text" placeholder="Type your comment here"  id="inputbox"/>
              <button type="submit" value="Submit" id="Submit1">Submit</button>
             <ul id = 'namelist'>
             </ul>
             <script type="text/javascript" src="ui/main.js"> </script>`,
    links:   `<a href="/">Home</a>
             <a href="/mainpage">Mainpage</a>
             <a href="/article-One">Article One</a>
             <a href="/article-three">Article Three</a>`
},
 "article-three": {
     title: `<title>Article: three - Farmer in Tamilnadu</title>`,
     heading: `<h1 class="align-center">Article-three</h1>`,
     date: "September 3, 2016",
     content:   ` <p>Reporting in popular press about farmers' suicides in India began in mid-1990s, particularly by Palagummi Sainath.[21] In the 2000s, the issue gained international attention and a variety of Indian government initiatives</p>
                 <p>National Crime Records Bureau, an office of the Ministry of Home Affairs Government of India, has been collecting and publishing suicide statistics for India since the 1950s, as annual Accidental Deaths & Suicides in India reports. It started separately collecting and publishing farmers suicide statistics from 1995</p>
                               <div class="vertical-line"></div>
               <!--The button <button id="counter"> click me </button>has been clicked<span id="count"> 0 </span> times -->
              <div><input type = button value="Like" id="counter"/> -- <span id="count" > 0 </span></div>
              <br>
              <input type = "text"  placeholder="Type your comment here"  id="inputbox"/>
              <button type="submit" value="Submit" id="Submit1">Submit</button>
             <ul id = 'namelist'>
             </ul>
             <script type="text/javascript" src="ui/main.js"> </script>`,
    links:   `<a href="/">Home</a>
             <a href="/mainpage">Mainpage</a>
             <a href="/article-one">Article One</a>
             <a href="/article-two">Article two</a>`
   }
};
//Template and function
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
    <br>
       ${links}
       <div>
       ${heading}
       </div> 
       <div>
       ${date}
       </div>
       <div>
       ${content}
       </div>
     </body>
    </html>
    `;
    return htmltemplate;
}


app.use(morgan('combined'));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});



var  counter = 0 ;
app.get('/counter', function(req,res){
    counter = counter + 1;
    res.send(counter.toString());
});

app.get('/mainpage', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'mainpage.html'));
});

app.get('/forgetpassword', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'forgetpassword.html'));
});

app.get('/ui/main.js', function(req, res){
   res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/counter', function(req, res){
   res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/style.css', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

  app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/:articleName', function (req, res) {
  var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 8

var port = 8080;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
