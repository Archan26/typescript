const num1Element = document.getElementById("num1") as HTMLInputElement;
const num2Element = document.getElementById("num2") as HTMLInputElement;
const buttonElement = document.querySelector("button")!;

const numResults: number[] = []
const textResults: string[] = []

function add(num1: any, num2: any) {
    return num1 + num2;
}

function printResult(resultObj: { val: number; timeStamp: Date }) {
    console.log(resultObj.val)
}

buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2)
    numResults.push(result)
    const stringResult = add(num1, num2)
    textResults.push(stringResult)
    // console.log(result)
    // console.log(stringResult)
    // console.log(add(true, false))
    printResult({ val: result as number, timeStamp: new Date() })
    console.log(numResults, textResults)
})