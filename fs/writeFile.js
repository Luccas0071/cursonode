const {writeFile} = require('fs')

writeFile("arquivo.txt", 'Criando arquivo de testo com WriteFile', (err) => {
    if (err) throw err;
    console.log("Arquivo Criado com Sucesso !");
})