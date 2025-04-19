const fs = require('fs');

const readStream = fs.createReadStream('./docs/large.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/large2.txt');

readStream.on('data', function(data)  {
    console.log(data);
    console.log('----New Chunk----');
} )

readStream.on('data', function(data)  {
    writeStream.write(data);
} )

readStream.pipe(writeStream);