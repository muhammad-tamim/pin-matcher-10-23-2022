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
document.getElementById('submit-btn').addEventListener('click', function () {
    const generateInput = document.getElementById('generate-input');
    const inputMetcher = document.getElementById('input-metcher');
    // when submit btn click compare generateInput and InputMetcher and show reasult 
    if (generateInput.value == inputMetcher.value) {
        document.getElementById('pin-not-matched').style.display = 'none';
        document.getElementById('pin-matched').style.display = 'block';
    } else {
        document.getElementById('pin-not-matched').style.display = 'block';
        document.getElementById('pin-matched').style.display = 'none';
    }
    generateInput.value = '';
    inputMetcher.value = '';
})