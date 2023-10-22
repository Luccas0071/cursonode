const EventEmitter = require('events')

//Criar a classe
class Evento extends EventEmitter {}

//Criar um evento
const meuEvento = new Evento();

//Criar um Evento
meuEvento.on('seguranca', (x,y)=>{
    console.log(`Executando o evento 'seguranca': ${x} ${y}`);
})

//Emitir o Evento
meuEvento.emit('seguranca', 'userAdmin', 'Alterou Salário')