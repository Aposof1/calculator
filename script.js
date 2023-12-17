let displayValue = '';
let openParenthesis = false;

function appendToDisplay(value) {
  if (value === '()') {
    if (openParenthesis) {
      displayValue += ')';
      openParenthesis = false;
    } else {
      displayValue += '(';
      openParenthesis = true;
    }
  } else {
    displayValue += value;
  }
  document.getElementById('display').value = displayValue;
}

function calculate() {
  try {
    let result = eval(displayValue);
    document.getElementById('display').value = result;
    displayValue = result.toString();
  } catch (error) {
    document.getElementById('display').value = 'Error';
    displayValue = '';
  }
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = '';
}

function toggleSign() {
  if (displayValue !== '' && !isNaN(displayValue)) {
    displayValue = displayValue.startsWith('-')
      ? displayValue.substring(1)
      : `-${displayValue}`;
    document.getElementById('display').value = displayValue;
  }
}

const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
  button.addEventListener('mousedown', () => {
    button.style.backgroundColor = '#ccc';
  });

  button.addEventListener('mouseup', () => {
    button.style.backgroundColor = '#eee';
  });

  button.addEventListener('mouseleave', () => {
    button.style.backgroundColor = '#eee';
  });

  button.addEventListener('mouseenter', () => {
    if (!button.matches(':active')) {
      button.style.backgroundColor = '#ddd';
    }
  });
});
