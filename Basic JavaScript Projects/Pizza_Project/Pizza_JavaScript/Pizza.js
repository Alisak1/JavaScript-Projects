function getReceipt() {
    //This initializes our string so it can get passed from 
    // function to function, grow:ng 􀀊ine by 1:ne 1nto a full receipt
    var text1 = "<h3>You Ordered:</h3>"; 
    var runningTotal = O; 
    var sizeTotal = O; 
    for (var i=0; i <sizeArray.length: i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 =text1+selectedSize+"<br>";
        }
    }
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Kids Pizza") {
        sizeTotal = 7:
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8:
    } else if (selectedSize === "Medium  Pizza") {
        sizeTotal = 10:
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14:
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16:
    }
    runningTotal = sizeTotal; 
    console.log(selectedSize+" =$"+sizeTotal+".00"); 
    console.log("size text1: "+text1); 
    console.log("subtotal: $"+runningTotal+".00 ); 
    //these variable will get passed on to each function 
    getTopping(runningTotal,text1); 
}

function getTopping(runningTotal,textl) { 
    var toppingTotal=0;
    var selectedTopping = [];
    var toppingArray = document.getE_ementsByClassName("toppings );
    for (var j=0; j < toppingArray.length; j++) { 
        if (toppingArray[j] .checked) { 
            selectedTopping.push(toppingArray[j] .value); 
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1 = text1+topping[j].value+"<br>":
        }
    }
    var toppingCount=selectedTopping.length;
    if (toppingCount >1) {
    } else {
`       toppingTotal = 0:`
    }
    runningTotoal = (runningTotal + toppingTotal);
    console.log( total selected topping items: "+toppingCount); 
    console.log (toppingCount+" topping -1 free topping ="+"$"+toppingTotal+".00"); 
    console.log (topping text1: "+text1");
    console.log (Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML="<h3>Total: <strong>$"+runningTotal+".00"+</strong></h3>"";
};
