var button = document.getElementById('counter1');
var counter1 = 0;

 button.onclick = function () {
    counter1 = counter1 + 1 ;
    var span = document.getElementById('count1');
    span.innerHTML = counter1.toString();
};
