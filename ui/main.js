var button = document.getElementById('counter');

button.onclick = function () {

var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    }; 
    request.open('GET','http://varunj2506.imad.hasura-app.io/counter', true);
    counter = counter + 1;
    request.send(null);
 //button.onclick = function () {
 //   counter = counter + 1 ;
 //   var span = document.getElementById('count');
 //   span.innerHTML = counter.toString();
}; 
//
var Input = document.getElementById('inputbox')
var inputbox = Input.value;
var sumbit = document.getElementById('Submit1')
Submit1.onclick = function () {
    
}