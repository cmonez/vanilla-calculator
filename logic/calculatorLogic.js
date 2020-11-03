const numbers = document.getElementById('numbers');
const resultDisplay = document.getElementById('result');
const operators = document.getElementById('operations');
const calculate = document.getElementById('equals');

// Array to put all clicked numbbers
let numbersToCalculate = [];
let operationToPerform = [];
let onSecondNumber = false;
let calculatedNumber;
let onFirstNumber = true;

operators.addEventListener('click', (event) => {
  if (
    event.target.className === 'operator' &&
    numbersToCalculate.length === 0
  ) {
    numbersToCalculate.push(Number(resultDisplay.innerHTML));
  }
  if (numbersToCalculate.length === 2) {
    numbersToCalculate = numbersToCalculate.slice(0, 1);
    onSecondNumber = false;
  }
  if (event.target.innerHTML === '÷') {
    operationToPerform[0] = '/';
  } else {
    operationToPerform[0] = event.target.innerHTML;
  }
});

numbers.addEventListener('click', (event) => {
  if (event.target.className === 'number') {
    if (onFirstNumber) {
      resultDisplay.innerHTML = '';
      onFirstNumber = false;
    }
    if (numbersToCalculate.length === 0) {
      resultDisplay.innerHTML += event.target.innerHTML;
    } else if (onSecondNumber === false) {
      resultDisplay.innerHTML = event.target.innerHTML;
      onSecondNumber = true;
    } else {
      resultDisplay.innerHTML += event.target.innerHTML;
    }
  }
});

calculate.addEventListener('click', (event) => {
  if (numbersToCalculate.length === 1) {
    numbersToCalculate.push(Number(resultDisplay.innerHTML));
  }
  console.log(numbersToCalculate);
  console.log('OPERATION PERFORM', operationToPerform);
  if (event.target.className === 'calculate') {
    switch (numbersToCalculate.length > 1) {
      case operationToPerform[0] === '+':
        console.log('Hitting this case?');
        calculatedNumber = numbersToCalculate[0] + numbersToCalculate[1];
        numbersToCalculate[0] = calculatedNumber;
        resultDisplay.innerHTML = calculatedNumber;
        console.log(numbersToCalculate);
        break;
      case operationToPerform[0] === '-':
        calculatedNumber = numbersToCalculate[0] - numbersToCalculate[1];
        numbersToCalculate[0] = calculatedNumber;
        resultDisplay.innerHTML = calculatedNumber;
        console.log(numbersToCalculate);
        break;
      case operationToPerform[0] === 'x':
        console.log('Multiply');
        calculatedNumber = numbersToCalculate[0] * numbersToCalculate[1];
        numbersToCalculate[0] = calculatedNumber;
        resultDisplay.innerHTML = calculatedNumber;
        console.log(numbersToCalculate);
        break;
      case operationToPerform[0] === '/':
        console.log('Here are the numbers to calculate', numbersToCalculate);
        calculatedNumber = numbersToCalculate[0] / numbersToCalculate[1];
        numbersToCalculate[0] = calculatedNumber;
        resultDisplay.innerHTML = calculatedNumber;
        console.log(numbersToCalculate);
        break;
    }
  }
});
