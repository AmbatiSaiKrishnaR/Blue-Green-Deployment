let display = document.getElementById('display');
let currentInput = '';

function appendToDisplay(value) {
    if (value === '=') {
        try {
            currentInput = eval(currentInput).toString();
            if (currentInput === 'undefined' || currentInput === 'NaN') {
                currentInput = 'Error';
            }
        } catch (error) {
            currentInput = 'Error';
        }
    } else if (value === 'C') {
        currentInput = '';
    } else {
        currentInput += value;
    }
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        if (currentInput === 'undefined' || currentInput === 'NaN') {
            currentInput = 'Error';
        }
    } catch (error) {
        currentInput = 'Error';
    }
    display.value = currentInput;
}
