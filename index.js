/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById('input-el');
const convertBtn = document.getElementById('convert-btn');
const lengthResultEl = document.getElementById('length-result-el');
const volumeResultEl = document.getElementById('volume-result-el');
const massResultEl = document.getElementById('mass-result-el');
const clearBtn = document.getElementById('clear-btn');



convertBtn.addEventListener('click', function() {
    let unit = inputEl.value;

    if (unit < 1) {
        lengthResultEl.textContent = 'Please enter a valid number';
        volumeResultEl.textContent = 'Please enter a valid number';
        massResultEl.textContent = 'Please enter a valid number';
    } else if (unit > 999) {
        lengthResultEl.textContent = 'Please enter a number less than 1000';
        volumeResultEl.textContent = 'Please enter a number less than 1000';
        massResultEl.textContent = 'Please enter a number less than 1000';
    } else {
        let feet = unit * 3.281;
        let meter = unit / 3.281;
        let liter = unit / 0.264;
        let gallon = unit * 0.264;
        let kilogram = unit / 2.204;
        let pound = unit * 2.204;

        lengthResultEl.textContent = `${unit} meters = ${feet.toFixed(3)} feet | ${unit} feet = ${meter.toFixed(3)} meters`;
        volumeResultEl.textContent = `${unit} liters = ${gallon.toFixed(3)} gallons | ${unit} gallons = ${liter.toFixed(3)} liters`;
        massResultEl.textContent = `${unit} kilograms = ${pound.toFixed(3)} pounds | ${unit} pounds = ${kilogram.toFixed(3)} kilograms`;
    }
});

clearBtn.addEventListener('dblclick', function() {
    inputEl.value = '';
    lengthResultEl.textContent = '';
    volumeResultEl.textContent = '';
    massResultEl.textContent = '';
});
