var button = document.getElementById('counter');
var counter = 0;

 button.onclick = function () {
    counter = counter + 1 ;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function () {

var counter = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (Request.readystate === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    } 
 //button.onclick = function () {
 //   counter = counter + 1 ;
 //   var span = document.getElementById('count');
 //   span.innerHTML = counter.toString();
};