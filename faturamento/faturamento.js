const dados = require('./dados.json');

console.log(typeof dados);
console.log(dados.length);
console.log(dados);

var maiorFaturamentoMes = 0;
var menorFaturamentoMes = 0;
var totalFaturamento = 0;
var mediaFaturamento = 0;
var diasTrabalhados = 0;
var diasMaioresMedia = [];

function calcularFaturamento(dados) {

    for (let i = 0; i < dados.length; i++) {

        if (dados[i].valor != 0) {
            totalFaturamento += dados[i].valor;
            diasTrabalhados++;
        }
        if (dados[i].valor != 0 && maiorFaturamentoMes === 0 && menorFaturamentoMes === 0) {
            maiorFaturamentoMes = dados[i].valor;
            menorFaturamentoMes = dados[i].valor;
        } else {
            if (maiorFaturamentoMes < dados[i].valor) {
                maiorFaturamentoMes = dados[i].valor;
            }
            if (menorFaturamentoMes > dados[i].valor && dados[i].valor != 0) {
                menorFaturamentoMes = dados[i].valor;
            }
        }
    }
    mediaFaturamento = totalFaturamento / diasTrabalhados;

    for (let i = 0; i < dados.length; i++) {
        if (dados[i].valor != 0) {
            if (mediaFaturamento < dados[i].valor) {
                diasMaioresMedia.push(dados[i].dia);
            }
        }
    }
}

calcularFaturamento(dados);
console.log(`Dados Faturamento Mensal:\n Faturamento Mensal: ${totalFaturamento.toFixed(2)} \n Maior Faturamento do Mês: ${maiorFaturamentoMes.toFixed(2)} \n Menor Faturamento do Mês: ${menorFaturamentoMes.toFixed(2)}\n Média Mensal: ${mediaFaturamento.toFixed(2)}\n Dias que Faturamento foi Maior que a Média: ${diasMaioresMedia}\n Total de Dias Trabalhados: ${diasTrabalhados}`);