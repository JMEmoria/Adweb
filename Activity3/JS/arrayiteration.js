const numbers = [2, 4, 6, 8, 69];
let txt = "";
numbers.forEach(myFunction);
document.getElementById("arrayiterationtxt").innerHTML = ('The example of Array Iteration : ');
document.getElementById("arrayiteration").innerHTML = txt;

function myFunction(value, index, array) {
  txt += value + "<br>";
}