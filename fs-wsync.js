// Metodo não Bloqueante
const fs = require('fs');

console.log("Antes da leitura do Arquivo");
console.log((process.hrtime()[0]/60).toFixed(5));

const dados = fs.readFile("file.txt",(err, data)=>{
    if(err) throw err;
});

console.log("Executando o console após o arquivo")
console.log((process.hrtime()[0]/60).toFixed(5));