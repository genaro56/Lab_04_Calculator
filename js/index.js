window.onload = function () {
  var input = document.querySelector(".inputNumber");
  var resetButton = document.querySelector(".resetButton");
  var equalButton = document.querySelector(".equalButton");
  var addButton = document.querySelector("#addButton");
  var substractButton = document.querySelector("#substractButton");
  var multiplicationButton = document.querySelector("#multiplicationButton");
  var divisionButton = document.querySelector("#divisionButton");
  var resultValue = document.querySelector("#resultValue");
  var logInformation = document.querySelector("#logInformation");

  addButton.addEventListener('click', () => handleOperation('+'));
  substractButton.addEventListener('click', () => handleOperation('-'));
  multiplicationButton.addEventListener('click', () => handleOperation('*'));
  divisionButton.addEventListener('click', () => handleOperation('/'));
  resetButton.addEventListener('click', resetCalculator);
  equalButton.addEventListener('click', handleEqual);

  let res = null;
  let operationLog = "";
  let bufferOperator = null;
  
  function showOperation() {
    logInformation.textContent += `\n${operationLog}`;
    operationLog = "";
  }
  
  function resetCalculator() {
    input.value = "";
    resultValue.value = "";
    res = null;
    bufferOperator = null;
    operationLog = "";
  }
  
  function pushInput() {
    operationLog += input.value;
  }

  function handleResult() {
    const numericValue = Number(input.value)

    if (bufferOperator != null) {
      switch (bufferOperator) {
        case '+':
          res += numericValue;
          break;
        case '-':
          res -= numericValue;
          break;
        case '*':
          res *= numericValue;
          break;
        case '/':
          res /= numericValue;
          break;
      }
    }
  }

function handleOperation(operationType) {
    if (input.value == "" && res == null) {
      return;
    }

    if (res == null) {
      res = Number(input.value);
    }

    handleResult();
    bufferOperator = operationType;
    pushInput();
    operationLog += " " + `${operationType} `;
    input.value = "";
  }

  function handleEqual() {
    if (bufferOperator != null) {
      handleResult();
    } else {
      res = Number(input.value);
    }
    bufferOperator = null;

    pushInput();
    operationLog += " = " + res;
    showOperation();
    operationLog += res;
    resultValue.value = res;
    input.value = "";
    operationLog = "";
    console.log(input.value)
  }
}