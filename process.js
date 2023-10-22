console.log(`Nome do Arquivo: `, __filename);
console.log(`Diretório do Arquivo: `, __dirname);
console.log(`Diretório em que foi invocado: `, process.cwd());
console.log(`Parâmetros de execução: `, process.argv);
console.log(`Sistema Operacional: `, process.env.OS);
console.log(`Usuário no SO: `, process.env.USERNAME);
console.log(`Idioma: `, process.env.LANG);
console.log(`Nome do Servidor: `, process.env.COMPUTERNAME);

switch(process.argv[2]){

    case '-a':
        console.log('Execute rotina principal');
        break;
    case '-i':
        console.log('Execute Instalação');
        break;
    case '-q':
        console.log('Encerrando Aplicação');
        process.exit(); //interrompe imediatamente
        break;
    default:
        console.log('Parâmetro Inválido');
}

console.log(`Ambiente de Servidor: `, process.platform);

