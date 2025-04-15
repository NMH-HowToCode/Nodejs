let Interval = globalThis.setInterval(function() {
    console.log('Hello World');
}, 1000)


globalThis.setTimeout(function(){
    clearInterval(Interval);
}, 5000)

// Retrieve directory name
console.log(__dirname);

// Retrieve file name
console.log(__filename);