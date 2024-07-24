const numberv1 = document.getElementsByName("input1")[0];
const numberv2 = document.getElementsByName("input2")[0];
const addButton = document.getElementById("addButton");
const outputDiv = document.getElementById("output");

function add() {
  const num1 = parseFloat(numberv1.value);
  const num2 = parseFloat(numberv2.value);
  const result = num1 + num2;
  output(result);
}

function output(result) {
  outputDiv.textContent = result;
}

addButton.addEventListener("click", add);
