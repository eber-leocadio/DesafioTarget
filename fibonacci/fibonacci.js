let input = require("fs").readFileSync("stdin", "utf-8");

let number = parseInt(input);

var sequenciaFibonacci = [0, 1];

function fibonacci(n){    

    for(let i=1; i<= n; i++){
        sequenciaFibonacci.push(sequenciaFibonacci[i-1] + sequenciaFibonacci[i]);
    }    
}

function verificarNumeroSequencia(n, sequenciaFibonacci){
    let flag=0;
    sequenciaFibonacci.forEach(item => {
        if(item === n){
            flag = 1;
            return console.log(`Numero ${n} encontrado na sequência`);
        }        
    });
    if(flag === 0)
        return console.log(`Numero ${n} não encontrado na sequência`);
}
fibonacci(number);
console.log(`Sequência Fibonacci: ${sequenciaFibonacci}`);
verificarNumeroSequencia(number, sequenciaFibonacci);