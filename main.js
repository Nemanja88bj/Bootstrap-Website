var c = document.getElementById('timer');
var loop;
function displayTime(){
var s = new Date();
var sat = s.getHours();
var minuti = s.getMinutes();
var sekunde = s.getSeconds();

c.innerHTML = sat + "h:" + minuti + "m:" + sekunde + "s"

}
loop = setInterval(displayTime,100);
//_e('btn1').addEventListener('click', function() {
//_e('demo').innerHTML = 'Hey There';
//}, false);
//   return document.getElementById(id);
//}
document.getElementById('btn1').onclick = function() {
document.getElementById('demo').innerHTML = 'Od 88 e'};

document.getElementById('btn2').onclick = function() {
document.getElementById('demo1').innerHTML = 'Od 58 e'};
document.getElementById('btn1').onclick = function() {
document.getElementById('demo').innerHTML = 'Od 88 e'};
document.getElementById('btn1').onclick = function() {
document.getElementById('demo').innerHTML = 'Od 88 e'};