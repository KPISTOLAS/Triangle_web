function math (){
 var num1 = parseFloat(document.getElementById("num1").value);
 var num2 = parseFloat(document.getElementById("num2").value);
 var num3 = parseFloat(document.getElementById("num3").value);
 var x;
// Check if the inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)|| isNaN(num3)) {
        alert("Please enter valid numbers in both fields.");
    } else {
        if(num1===num2 && num1===num3 && num2===num3){
           x='Isoplevro';
        } 
        else if(num1===num2 || num1===num3 || num2===num3){
            x='Isoskeles';
        }
        else {
            x='aplo';
        }
        var myVariable = x + ' trigono';
         var variableBox = document.getElementById("variableBox");
         variableBox.innerHTML =  myVariable;

    }
}