function calcularSalario() {
    let codigo = document.getElementById('codigo').value;
    let horasTrabalhadas = document.getElementById('horaTrabalhada').value;
    let valorBaseHora = document.getElementById('valorHora').value;
    let turno = document.getElementById('turno').value;
    let categoria = document.getElementById('categoria').value;
    let resultado = document.getElementById('res');

    let valorHora = calcularValorHora(valorBaseHora, turno, categoria)
    let salarioInicial = valorHora * horasTrabalhadas
    let auxAlim = 0
    if (salarioInicial <= 800){
        auxAlim = salarioInicial * 0.25
    } else if (salarioInicial > 800 && salarioInicial <= 1200){
        auxAlim = salarioInicial * 0.20
    } else {
        auxAlim = salarioInicial * 0.15
    }

    let salarioFinal = salarioInicial + auxAlim

    resultado.innerHTML = `<p>Código: ${codigo}</p> 
                       <p>Horas Trabalhadas: ${horasTrabalhadas}</p>
                       <p>Turno: ${turno}</p>
                       <p>Categoria: ${categoria}</p>
                       <p>Valor Hora: ${valorHora.toFixed(2)}</p>
                       <p>Salário Inicial: ${salarioInicial.toFixed(2)}</p>
                       <p>Auxílio Alimentar: ${auxAlim.toFixed(2)}</p>
                       <p>Salário Final: ${salarioFinal.toFixed(2)}</p>`
}

function calcularValorHora(valorBaseHora, turno, categoria){
    let valorHora = 1
    if (categoria === 'Funcionário'){
        switch(turno){
            case 'Matutino':
                valorHora = 1.10
                break
            case 'Vespertino':
                valorHora = 1.15
                break
            case 'Noturno':
                valorHora = 1.20
                break
        }
    } else if (categoria === 'Gerente'){
        switch(turno){
            case 'Matutino':
                valorHora = 1.30
                break
            case 'Vespertino':
                valorHora = 1.35
                break
            case 'Noturno':
                valorHora = 1.40
                break
        }
    }
    return valorBaseHora * valorHora
}