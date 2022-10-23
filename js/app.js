// Find generate-btn ,generate-input and generate pin
document.getElementById('generate-btn').addEventListener('click', function generatePin() {
    const generateInput = document.getElementById('generate-input')
    const generatePin = Math.round(Math.random() * 10000);
    const generatePinCheck = generatePin + '';
    if (generatePinCheck.length == 3) {
        generatePin()
        console.log('jhgj');
    }
    else {
        generateInput.value = generatePin;
    }
})