let expression = '';

function appendToDisplay(value) {
    expression += value;
    document.getElementById('result').value = expression;
}

function clearDisplay() {
    expression = '';
    document.getElementById('result').value = '';
}

function deleteNumber() {
    expression = expression.slice(0, -1);
    document.getElementById('result').value = expression;
}

function calculateResult() {
    try {
        const result = eval(expression);
        document.getElementById('result').value = result;
        expression = result.toString();
    } catch (error) {
        document.getElementById('result').value = 'Error';
        expression = '';
    }
}