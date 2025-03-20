function calcularMedia() {
    let atividade = parseFloat(document.getElementById('atv').value);
    let prova = parseFloat(document.getElementById('prova').value);
    let trabalho = parseFloat(document.getElementById('trabalho').value);
    let resultado = document.getElementById('res');

    let pesoAtividade = 2;
    let pesoProva = 5;
    let pesoTrabalho = 3;

    let media = ((atividade * pesoAtividade) + (prova * pesoProva) + (trabalho * pesoTrabalho)) / (pesoAtividade + pesoProva + pesoTrabalho)

    let classificacao
    if(media <= 5) {
        classificacao = 'F'
    } else if (media > 5 && media <= 6) {
        classificacao = 'E'
    } else if (media > 6 && media <= 7) {
        classificacao = 'D'
    } else if (media > 7 && media <= 8) {
        classificacao = 'C'
    } else if (media > 8 && media <= 9) {
        classificacao = 'B'
    } else if (media > 9 && media <= 10) {
        classificacao = 'A'
    }

    resultado.innerHTML = `A média do aluno é ${media.toFixed(2)} e a sua classificação é ${classificacao}.`
}