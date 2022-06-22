const dados = require("./dados.json");

function faturamentoMensal() {
    let faturamentoTotal = 0;
    dados.forEach(x => {
        faturamentoTotal += x.faturamneto;
    });
    console.log(` Faturamento Total: ${faturamentoTotal} \n Percentual de cada Estado:`);

    for (let i = 0; i < dados.length; i++) {
        console.log(`${dados[i].estado}: ${(dados[i].faturamneto / faturamentoTotal * 100).toFixed(2)} %`);
    }

}

faturamentoMensal();