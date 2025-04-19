const fs = require('fs');

// File Read
fs.readFile('./docs/nodejs.txt', (err,data) => {
    if(err){
        console.log(err);
    }

    console.log(data.toString());
})



if(!fs.existsSync('./docs/nodejs123.txt')){
    // File Create
    fs.writeFile('./docs/nodejs123.txt', 'How to code node js 123', (err) => {
        if(err){
            console.log(err);
        }

        console.log('File Created.');
    })
}
else{
    //File Delete
    fs.unlink('./docs/nodejs123.txt', (err) => {
        if(err){
            console.log(err);
        }

        console.log('file deleted.');
    })
}

if(fs.existsSync('./new-folder')){
    // Folder Delete
    fs.rmdir('./new-folder', (err) => {
        if(err){
            console.log(err);
        }
    
        console.log('folder deleted.');
    })
}
else{
    // Folder Create
    fs.mkdir('./new-folder', (err) => {
        if(err){
            console.log(err);
        }
        console.log('Folder created.');
    })
}



