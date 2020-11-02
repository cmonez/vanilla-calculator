const numbers = document.getElementById('numbers');
const resultDisplay = document.getElementById('result');
const operators = document.getElementById('operations');
const calculate = document.getElementById('equals');

const numbersToAdd = [];
const operationToPerform = [];

operators.addEventListener('click', (event) => {
  if (event.target.className === 'operator') {
    if (event.target.innerHTML === '÷') {
      operationToPerform.push('/');
    } else {
      operationToPerform.push(event.target.innerHTML);
    }
    console.log(operationToPerform);
  }
});

numbers.addEventListener('click', (event) => {
  if (event.target.className === 'number') {
    console.log('HERE IS THE NUMBER CLICKED ATM', event.target.innerHTML);
    resultDisplay.innerHTML += event.target.innerHTML;
    numbersToAdd.push(Number(resultDisplay.innerHTML));
    console.log('AFTER CLICKING', numbersToAdd);
  }
});
