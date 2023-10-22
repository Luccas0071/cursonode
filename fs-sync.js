// Metodo Bloqueante
const fs = require('fs');

console.log("Antes da leitura do Arquivo");
console.log((process.hrtime()[0]/60).toFixed(5));

const dados = fs.readFileSync("file.txt");

console.log("Executando o console após o arquivo")
console.log((process.hrtime()[0]/60).toFixed(5));