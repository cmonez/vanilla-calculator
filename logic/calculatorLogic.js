const numbers = document.getElementById('numbers');
const resultDisplay = document.getElementById('result');
const operators = document.getElementById('operations')
const calculate = document.getElementById('equals');

const numbersToAdd = [];
const operationToPerform = [];


operators.addEventListener('click', event => {
  if(event.target.className === "operator") {
    console.log(event.target.innerHTML)
    resultDisplay.innerHTML = event.target.innerHTML
  }
})

numbers.addEventListener('click', event => {
  if(event.target.className === "number") {
    console.log(event.target.innerHTML)
    resultDisplay.innerHTML += event.target.innerHTML
  }
})

