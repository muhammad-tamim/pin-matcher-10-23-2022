// Find generate-btn ,generate-input and generate pin
document.getElementById('generate-btn').addEventListener('click', function getPin() {
    const generateInput = document.getElementById('generate-input')
    const generatePin = Math.round(Math.random() * 10000);
    const generatePinCheck = generatePin + '';
    if (generatePinCheck.length != 4) {
        getPin();
    }
    else {
        generateInput.value = generatePin;
    }
})