const numberv1 = document.getElementsByName("input1")[0];
const numberv2 = document.getElementsByName("input2")[0];
const numbersub1 = document.getElementsByName("sub1")[0];
const numbersub2 = document.getElementsByName("sub2")[0];
const addButton = document.getElementById("addButton");
const subButton = document.getElementById("subButton");
const outputDiv = document.getElementById("output");
const outputDiv2 = document.getElementById("output2");
let array = [];
function add() {
  const num1 = parseFloat(numberv1.value);
  const num2 = parseFloat(numberv2.value);
  const result = num1 + num2;

  output(result, outputDiv);

  const operation = {
    operation: "Add",
    resultN: result,
    number1: num1,
    number2: num2,
  };
  array.push(operation);
  console.log(array);
}

function sub() {
  const numSub1 = parseFloat(numbersub1.value);
  const numSub2 = parseFloat(numbersub2.value);
  const result1 = numSub1 - numSub2;

  output(result1, outputDiv2);
  array.push(outputDiv2);
  console.log(result1);
}

function output(result, outputElement) {
  outputElement.textContent = result;
}

addButton.addEventListener("click", add);
subButton.addEventListener("click", sub);
