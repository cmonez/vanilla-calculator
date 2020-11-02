const numbers = document.getElementById('numbers');
const resultDisplay = document.getElementById('result');
const operators = document.getElementById('operations');
const calculate = document.getElementById('equals');

// Array to put all clicked numbbers
let numberPlaceHolder = [];
let numbersToCalculate = [];
let operationToPerformPlaceHolder = [];
let operationToPerform = [];
let onSecondNumber = false;
let clickedSecondNumber = false;
let calculatedNumber;

operators.addEventListener('click', (event) => {
  if (event.target.className === 'operator') {
    if (event.target.innerHTML === '÷') {
      operationToPerform.push('/');
    } else {
      operationToPerform.push(event.target.innerHTML);
    }
    // grab the LAST  number from numberPlaceHolder add to numbersToAdd
    numbersToCalculate.push(numberPlaceHolder[numberPlaceHolder.length - 1]);
    // reset numberPlaceHolder
    numberPlaceHolder = [];
    onSecondNumber = true;
    // console.log(numbersToCalculate);
  }
});

numbers.addEventListener('click', (event) => {
  // let numberOfTimesClicked = 0;
  if (event.target.className === 'number' && numbersToCalculate.length !== 1) {
    console.log('HERE IS THE NUMBER CLICKED ATM', event.target.innerHTML);
    // Keep adding digits to the html
    resultDisplay.innerHTML += event.target.innerHTML;
    // push number
    numberPlaceHolder.push(Number(resultDisplay.innerHTML));
  }

  if (
    numbersToCalculate.length === 1 &&
    onSecondNumber === true &&
    clickedSecondNumber === false
  ) {
    // if (numberOfTimesClicked === 0) {
    resultDisplay.innerHTML = event.target.innerHTML;
    numberPlaceHolder.push(Number(resultDisplay.innerHTML));
    console.log('AFTER CLICKING in second time', numberPlaceHolder);
    clickedSecondNumber = true;
  } else if (
    numbersToCalculate.length === 1 &&
    onSecondNumber === true &&
    clickedSecondNumber === true
  ) {
    resultDisplay.innerHTML += event.target.innerHTML;
    numberPlaceHolder.push(Number(resultDisplay.innerHTML));
    console.log('AFTER CLICKING in second time', numberPlaceHolder);
  }
});

calculate.addEventListener('click', (event) => {
  numbersToCalculate.push(numberPlaceHolder[numberPlaceHolder.length - 1]);
  numberPlaceHolder = [];
  switch (numbersToCalculate.length === 2) {
    case operationToPerform[0] === '÷':
      console.log('Here are the numbers to calculate', numbersToCalculate);
      calculatedNumber = numbersToCalculate[0] / numbersToCalculate[1];
      console.log(calculatedNumber);
      break;
    case operationToPerform[0] === '+':
      calculatedNumber = numbersToCalculate[0] + numbersToCalculate[1];
      console.log(calculatedNumber);
      break;
    case operationToPerform[0] === '-':
      calculatedNumber = numbersToCalculate[0] - numbersToCalculate[1];
      console.log(calculatedNumber);
      break;
    case operationToPerform[0] === 'x':
      calculatedNumber = numbersToCalculate[0] * numbersToCalculate[1];
      console.log(calculatedNumber);
      break;
  }
});
