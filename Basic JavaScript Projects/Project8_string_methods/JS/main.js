function full_Drama() { //Concat method
    var part_1 ="Hawaii ";
    var part_2 ="Five";
    var part_3 ="-";
    var part_4 ="O";
    var result = part_1.concat(part_2, part_3, part_4);
    document.getElementById("SHOW").innerHTML = result;
}

function slice_Method() { //Slice method
    var Sentence="All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}
 
function string_Method() { //toString method
    var X=500;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() { //toPrecision method
    var X=24.681234567812345;
    document.getElementById("Precision").innerHTML = X.toPrecision(15);
}

function toFixed_Method() { //toFixed method
    document.getElementById("demo").innerHTML = n;
}