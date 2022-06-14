function Dictionary() { //Dictionary function with key value pair
    var Employee = {
        FirstName:"Matt",
        Birthdate:"06/11/88",
        DateHired:"01/05/22",
        Age:"34",
        Citizenship:"US",
    };
    delete Employee.Citizenship;//Deletes a key pair value statements
    document.getElementById("Dictionary").innerHTML = Employee.Age;
}


