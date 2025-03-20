const form = document.getElementById('form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); //Impede o carregamento da página quando enviamos os dados.
    const weight = (document.getElementById('weight').value);
    const height = (document.getElementById('height').value) / 100;
    const imc = (weight / (height * height)).toFixed(2); //2 casas após a vírgula.
    const value = document.getElementById('value');
    let description = '';
    document.getElementById('infos').classList.remove('hidden');

    if (imc < 16) {
        description = 'Baixo Peso - Muito Grave!'
    } else if (imc >= 16 && imc <= 16.99) {
        description = 'Baixo Peso - Grave!'
    } else if (imc >= 17 && imc <= 18.49) {
        description = 'Baixo Peso!'
    } else if (imc >= 18.50 && imc <= 24.99) {
        description = 'Peso Normal!'
    } else if (imc >= 25 && imc <= 29.99) {
        description = 'Sobrepeso!'
    } else if (imc >= 30 && imc <= 34.99) {
        description = 'Obesidade Grau I'
    } else if (imc >= 35 && imc <= 39.99) {
        description = 'Obesidade Grau II'
    } else if (imc > 40) {
        description = 'Obesidade Grau III'
    }
    value.textContent = imc;
    document.getElementById('description').textContent = description;
    document.getElementById('novoCalc').addEventListener('click', function() {
        form.reset();
    });
    document.getElementById('saida').addEventListener('click', function() {
        form.style.display ='none';
        alert('Você saiu do Cálculo IMC!')
    });
});