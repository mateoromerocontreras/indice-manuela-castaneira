const USD_RATE = 1480;

function convertSalary() {
    const salaryInput = document.getElementById('salaryInput');
    const resultDiv = document.getElementById('result');

    const salaryARS = parseFloat(salaryInput.value);

    if (isNaN(salaryARS) || salaryARS <= 0) {
        resultDiv.innerHTML = 'Por favor, ingrese un salario válido';
        resultDiv.style.color = '#dc3545';
        return;
    }

    const salaryUSD = salaryARS / USD_RATE;

    resultDiv.innerHTML = `Salario según el IMC: $${salaryUSD.toFixed(2)}`;
    resultDiv.style.color = '#28a745';
}

// Permitir conversión al presionar Enter
document.getElementById('salaryInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        convertSalary();
    }
});