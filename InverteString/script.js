const string = "Hello World!";
let invertString = "";

for (let i = string.length - 1; i >= 0; i--) {
    invertString += string[i];
}

console.log(`String Original: ${string}`);
console.log(`String Invertida: ${invertString}`);