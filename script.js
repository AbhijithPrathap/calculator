// display num in text box
function dislay(num){
result.value+= num
}
// clear display

function clearBox(){
    result.value="";
}
//evaluate experssion
function evaluateValue(){
    exp=result.value;
    output=eval(exp);
    result.value=output;

    //another method
    // resul.value=eval(result.value)
}
// remove last
 function removeLast(){
currentExp=result.value;
result.value=currentExp.slice(0,-1)
 }