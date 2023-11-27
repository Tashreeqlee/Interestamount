let calculateButton = document.getElementById('calculate');
let outputDiv = document.getElementById('output');

calculateButton.addEventListener('click', () => {
    let amount = parseFloat(document.getElementById('amount').value);
    let interest = parseFloat(document.getElementById('interest').value);
    let result = amount * (interest / 100);
    outputDiv.textContent = `Interest: ${result}`;
});