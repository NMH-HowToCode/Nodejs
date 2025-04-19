const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    let filename;

    switch (req.url) {
        case '/':
            res.statusCode = 200;
            filename = 'index.html';
            break;
        case '/about':
            res.statusCode = 200;
            filename = 'about.html';
            break;
        case '/about-us':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        case '/contact':
            res.statusCode = 200;
            filename = 'contact.html';
            break;
        case '/contact-us':
            res.statusCode = 301;
            res.setHeader('Location', '/contact');
            res.end();
            break;
        default:
            res.statusCode = 404;
            filename = '404.html';
            break;
    }

    // Set header content type
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('./views/' + filename, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    });
});

server.listen(3000, 'localhost', () => {
    console.log('Server is running on port 3000');
});