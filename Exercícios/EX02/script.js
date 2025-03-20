let crianca = 0, jovem = 0, adulto = 0, idoso = 0;
function Verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');
    var idade = ano - Number(fano.value);
    let description = ''
    if (idade >= 0 && idade < 10) {
        crianca ++
        description = 'Criança'
    } else if (idade < 21) {
        jovem ++
        description = 'Jovem'
    } else if (idade < 59) {
        adulto ++
        description = 'Adulto'
    } else {
        idoso++
        description = 'Idoso'
    }
    document.getElementById('description').textContent = description;
    res.innerHTML = `Idade: ${idade} anos.`

    atualizarContadores();
}

function atualizarContadores() {
    document.getElementById('contador-crianca').textContent = crianca;
    document.getElementById('contador-jovem').textContent = jovem;
    document.getElementById('contador-adulto').textContent = adulto;
    document.getElementById('contador-idoso').textContent = idoso;
}