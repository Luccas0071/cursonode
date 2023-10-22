const fs = require('fs');

fs.readFile("file2.txt",(err, data)=>{
    if(err) throw err;
    console.log(data);

    fs.unlink("file.txt", (unlinkErr)=>{
        if(unlinkErr) throw unlinkErr;
        console.log("Arquivo excluido !");
    })

});



