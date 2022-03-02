
let j, m, addition, subtraction, multiplication, division;
j = 60;
m = 9;

addition = j + m;
subtraction = j - m;
multiplication = j * m;
division = j / m;

document.getElementById("Addition").innerHTML = "j + m = " + addition;
document.getElementById("Subtraction").innerHTML = "j - m = " + subtraction;
document.getElementById("Multiplication").innerHTML = "j * m = " + multiplication;
document.getElementById("Division").innerHTML = "j / m = " + division;