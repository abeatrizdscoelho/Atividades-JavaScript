function calcularFrete() {
    let distancia = parseFloat(document.getElementById('dist').value);
    let quantidade = parseInt(document.getElementById('qntd').value);
    let regiao = document.getElementById('regiao').value;
    let rastreamento = document.getElementById('rast').checked;
    let precoPeca;
    let resultado = document.getElementById('res');
    let taxaRastreamento;
    if (rastreamento) {
        taxaRastreamento = 200;
    } else {
        taxaRastreamento = 0;
    }

    switch (regiao) {
        case "Sudeste":
            precoPeca = 1.20;
            break
        case "Sul":
            precoPeca = 1.30;
            break
        case "Centro-Oeste":
            precoPeca = 1.50;
            break
    }

    let fretePecas;
    if (quantidade > 1000) {
        let semDesconto = 1000 * precoPeca;
        let comDesconto = (quantidade - 1000) * (precoPeca * 0.88) 
        fretePecas = semDesconto + comDesconto
    } else {
        fretePecas = quantidade * precoPeca
    }

    let litroCombustivel = 5.80
    let freteKm = distancia * litroCombustivel

    let freteTotal = fretePecas + freteKm + taxaRastreamento

    resultado.innerHTML = `<p>Taxa de Rastreamento: R$ ${taxaRastreamento.toFixed(2)}</p>
        <p>Valor do Frete Pelas Peças Transportadas: R$ ${fretePecas.toFixed(2)}</p>
        <p>Valor do Frete por Quilômetro Percorrido: R$ ${freteKm.toFixed(2)}</p>
        <p><strong>Total do Frete: R$ ${freteTotal.toFixed(2)}</strong></p>`
}