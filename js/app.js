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
document.getElementById('click-number').addEventListener('click', function (event) {
    // find click number 
    const clickNumber = event.target.innerText;
    const inputMetcher = document.getElementById('input-metcher');
    // click C clear input meatcher 
    if (isNaN(clickNumber)) {
        if (clickNumber == 'C') {
            inputMetcher.value = '';
        }
    }
    // click number adding input-metcher
    else {
        const inputNumber = inputMetcher.value;
        inputMetcher.value = inputNumber + clickNumber;
    }
});