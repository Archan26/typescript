var num1Element = document.getElementById("num1");
var num2Element = document.getElementById("num2");
var buttonElement = document.querySelector("button");
var numResults = [];
var textResults = [];
function add(num1, num2) {
    return num1 + num2;
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
buttonElement.addEventListener('click', function () {
    var num1 = num1Element.value;
    var num2 = num2Element.value;
    var result = add(+num1, +num2);
    numResults.push(result);
    var stringResult = add(num1, num2);
    textResults.push(stringResult);
    // console.log(result)
    // console.log(stringResult)
    // console.log(add(true, false))
    printResult({ val: result, timeStamp: new Date() });
    console.log(numResults, textResults);
});
