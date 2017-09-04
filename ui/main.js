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
var submit = document.getElementById('Submit1')
submit.onclick = function () {
    var names = ['name1','name2','name3'];
    var list = '';
    for(i=0; i < names.length ; i++) {
        list += '<li>' + name[i] + '</li>'
    }
    var ui = document.getElementById('namelist')
    ui.innerHTML = list ;
}