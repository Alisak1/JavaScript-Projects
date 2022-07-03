function myfunction() {
let text = "";
for (let i = 2001; i < 2023; i++) { //*lists the number up to 2022 example of For loop
  text += i + "<br>";
}
document.getElementById("List_of_Years").innerHTML = text;
}

let text = ""; //example of While loop
let i = 1;
while (i < 6) {
  text += "Grade " + i + " is Kindergarten<br>";
  i++;
}
document.getElementById("demo").innerHTML = text;

function Painters() { //Calling an index from an array
  var Painter=[];
  Painter [0] = "Vincent Van Gogh";
  Painter  [1] = "Pablo Picasso";
  Painter  [2] = "Claude Monet";
  Painter  [3] = "Salvador Dali";
  document.getElementById("Artist").innerHTML= "The founder of Impressionism is " + Painter[2] + ".";
}

let  x = 8; //Let statement example, of the two let statements 8 will show because it was decared first and x can not be redeclared.
{  
let x = 9;
}

document.getElementById("number").innerHTML = x;