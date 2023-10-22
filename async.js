function sum(x) {
    return new Promise((resolve, reject) => {
        if(Number(x)== NaN || Number(x) == undefined || typeof x != 'number'){
            reject('Parametro não é valido !')
        }
        setTimeout(() => {
            resolve(x + 5000);
        },3000);
    })
}

async function main(){
    try {
        const resultado = await sum('#');
        console.log('2 Resolvido, resultado:', resultado);
    } catch (error) {
        console.log(`Erro function main: ${error}`);
    }

}

main();