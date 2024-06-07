let display = document.getElementById('display');

function clearDisplay() {
    // Clear the display
    display.innerText = '0';
}

function appendCharacter(character) {
    // Append a character to the display
    if (display.innerText === '0' || display.innerText === 'Error') {
        display.innerText = character;
    } else {
        display.innerText += character;
    }
}

function calculateResult() {
    try {
        // Replace the square operator with Math.pow syntax
        let expression = display.innerText.replace(/\^2/g, '**2');
        
        // Evaluate the expression
        let result = eval(expression);
        
        // Display the result
        display.innerText = result;
    } catch (error) {
        // Handle any errors
        display.innerText = 'Error';
    }
}

// Event listeners for keyboard support (optional)
document.addEventListener('keydown', (event) => {
    if (event.key >= '0' && event.key <= '9') {
        appendCharacter(event.key);
    } else if (['+', '-', '*', '/', '%', '.'].includes(event.key)) {
        appendCharacter(event.key);
    } else if (event.key === 'Enter') {
        calculateResult();
    } else if (event.key === 'Backspace') {
        display.innerText = display.innerText.slice(0, -1) || '0';
    } else if (event.key === 'Escape') {
        clearDisplay();
    }
});