import http from 'http';

const plainTextServer = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.write('Hello World');
    res.end();
});

export default plainTextServer;
