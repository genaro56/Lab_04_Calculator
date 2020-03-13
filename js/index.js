window.onload = function () {
  const input = document.querySelector(".inputNumber")
  const resetButton = document.querySelector(".resetButton")
  const equalButton = document.querySelector(".equalButton")
  const addButton = document.querySelector("#addButton")
  const substractButton = document.querySelector("#substractButton")
  const multiplicationButton = document.querySelector("#multiplicationButton")
  const divisionButton = document.querySelector("#divisionButton")
  const resultValue = document.querySelector("#resultValue")
  const logInformation = document.querySelector("#logInformation")

  let result = null
  let firstnumber = 0
  let operationLogBuffer = ""
  let lastOp = null

  function pushInput() {
    operationLogBuffer += input.value

  }

  function commitOperationBuffer() {
    logInformation.textContent += `\n${operationLogBuffer}`
    operationLogBuffer = ""
  }

  function resetCalculator() {
    input.value = ""
    resultValue.value = ""
    result = null
    lastOp = null
    operationLogBuffer = ""
  }

  function handleOperation(operationType) {
    if (input.value == "" && result == null) {
      return
    }

    if (result == null) {
      result = Number(input.value)
    }

    compute()

    lastOp = operationType

    pushInput()

    operationLogBuffer += " " + operationType
    input.value = ""
  }

  function compute() {
    const numericValue = Number(input.value)

    if (lastOp != null) {
      switch (lastOp) {
        case '+':
          result += numericValue
          break;
        case '-':
          result -= numericValue
          break;
        case '*':
          result *= numericValue
          break;
        case '/':
          result /= numericValue
          break;
      }
    }
  }

  function handleEqualsClicks() {
    if (lastOp != null) {
      compute()
    } else {
      result = Number(input.value)
    }

    lastOp = null

    pushInput()

    operationLogBuffer += " = " + result
    commitOperationBuffer()
    operationLogBuffer += result
    resultValue.value = result
    input.value = ""
  }

  addButton.addEventListener('click', () => handleOperation('+'))
  substractButton.addEventListener('click', () => handleOperation('-'))
  multiplicationButton.addEventListener('click', () => handleOperation('*'))
  divisionButton.addEventListener('click', () => handleOperation('/'))
  resetButton.addEventListener('click', resetCalculator)
  equalButton.addEventListener('click', handleEqualsClicks)

}