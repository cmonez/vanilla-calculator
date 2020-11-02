const numbers = document.getElementById('numbers');
const resultDisplay = document.getElementById('result');
const operators = document.getElementById('operations');
const calculate = document.getElementById('equals');

// Array to put all clicked numbbers
let numberPlaceHolder = [];
let numbersToCalculate = [];
let operationToPerform = [];

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
    console.log(numbersToCalculate);
  }
});

numbers.addEventListener('click', (event) => {
  if (event.target.className === 'number') {
    console.log('HERE IS THE NUMBER CLICKED ATM', event.target.innerHTML);
    // Keep adding digits to the html
    resultDisplay.innerHTML += event.target.innerHTML;
    // push number
    numberPlaceHolder.push(Number(resultDisplay.innerHTML));
    console.log('AFTER CLICKING', numberPlaceHolder);
  }
});
