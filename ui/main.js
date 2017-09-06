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
    //request.open('GET','http://varunj2506.imad.hasura-app.io/counter', true);
    request.open('GET', 'http://localhost:8080/counter', true);
    counter = counter + 1;
    request.send(null);
 //button.onclick = function () {
 //   counter = counter + 1 ;
 //   var span = document.getElementById('count');
 //   span.innerHTML = counter.toString();
}; 
//

var submit = document.getElementById('Submit1')
submit.onclick = function () {
    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {

                //var names = ['name1', 'name2', 'name3', 'name4'];
                var names = request.responseText;
                names = JSON.parse(names);
                var list = '';
                for (var i = 0; i < names.length; i++) {
                    list += '<li>' + names[i] + '</li>'
                }
                var ui = document.getElementById('namelist')
                ui.innerHTML = list;
               }
           }
        };
        //var names = ['name1','name2','name3', 'name4'];
        //var list = ' ';
        //for(var i = 0; i < names.length ; i++) {
        //    list += '<li>' + names[i] + '</li>'
        //}
        //var ui = document.getElementById('namelist')
        //ui.innerHTML = list ;
        var Input = document.getElementById('inputbox')
        var inputbox = Input.value;
        request.open('GET', 'http://localhost:8080/submit-name?name=' + inputbox, true);
        request.send(null);
    };