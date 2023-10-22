function soma(x, callback) {
    return setTimeout(() => {
        return callback(null, x + 5000);
    },3000);
}

//Callback function
function resolveSoma(err, resultado){
    if(err) throw err;
    console.log(resultado);
}

soma(100, resolveSoma)


// function escreve() {
//     console.log("Executando a função escreve: ", soma(100));
// }


// escreve();
