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
