var X = 1; //Global Variable
function subtract_numbers_1() {
  document.write(15-X+"<br>");
}
function subtract_numbers_2(){
  document.write(X-1);
}
subtract_numbers_1();
subtract_numbers_2();

function subtract_numbers_1() { //Local Variable
    var X = 1
    document.write(15-X+"<br>");
}
function subtract_numbers_2(){
    document.write(X-1);
}
  subtract_numbers_1();
  subtract_numbers_2();

function subtract_numbers_1() { //Console Log error
    var X = 1;
    console.log(15-X);
}
function subtract_numbers_2(){
    console.log(X-1);
}
  subtract_numbers_1();
  subtract_numbers_2();

  function get_Date() { //Get time function two options
    if (new Date().getHours() < 12) {
    document.getElementById("Greeting").innerHTML="Good Morning!";
    }
    else {
        document.getElementById("Greeting").innerHTML="Good Afternoon!";
    }

function Score_Function() { //if else statement
    Score = document.getElementById("Score").value;
    if (Score >= 70) {
        Result = "Pass";
    }
    else {
        Result = "Fail";
    }
    document.getElementById("Pass_or_Fail").innerHTML = Result;

    function Time_Function() { //Get time function three option
        var Time = new Date().getHours() ;
        var Reply;
        if (Time < 9 == Time > 0) {
            Reply = "It\'s coffee time!";
        }
        else if (Time = 4 == Time < 5) {
            Reply= "It\'s Tea Time!";
        }
        else {
            Reply = "It\'s supper time!";
        }
        document.getElementById("Time_of_day").innerHTML = Reply;
    }