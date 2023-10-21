const http = require('http') //comando node serve para traser modulo dentro do sistema
const host = "127.0.0.1"
const port = 3000

const server = http.createServer((req, res) => { // Cria e configura o servidor
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('teste 12');
})

server.listen(port, host, ()=>{ // inicia o servidor Web
    console.log(`Server runnig at http://${host}:${port}`);
})