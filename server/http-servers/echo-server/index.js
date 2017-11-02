import http from 'http';

const echoServer = http.createServer((req, res) => {
    res.writeHead(200);
    req.pipe(res);
});

export default echoServer;