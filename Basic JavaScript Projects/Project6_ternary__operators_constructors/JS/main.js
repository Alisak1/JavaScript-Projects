function vote_Function() { //statement to perform whether input user is of age to vote
    var Age, Can_vote; //Declaration tags
    Age = document.getElementById("Age").value; //Determinant Input Data
    Can_vote = (Age < 18) ? "You are not old enough to vote":"You can vote"; //Parameters
    document.getElementById("Vote").innerHTML = Can_vote + "!"; //Get input data will calculate and return output
}

function user(firstname, lastname) { //constructor function
    this.user_firstname = firstname; //use of this in relation to object first name
    this.user_lastname = lastname; //use of this in relation to object last name
}
var Alisa = new user("Alisa", "Kay"); //Use of new "object"
function myFunction() { //function invoked
    document.getElementById("Constructor").innerHTML = "My name is " + Alisa.user_firstname + " " + Alisa.user_lastname; //Output sentence to HTML
}

function add_Function() { //First function
    document.getElementById("Nested_Function").innerHTML = Add (); //When first function is called it prompts second function to add
    function Add() { //Second Function
        var Starting_point = 10; //This function will start with operand 10
        function Plus_five() {Starting_point += 5;} //this function will add 5 integers to 10
        Plus_five();
        return Starting_point; // the result will return to the HTML document
    }
}