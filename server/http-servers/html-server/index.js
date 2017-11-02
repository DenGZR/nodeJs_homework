import http from 'http';
import fs from 'fs';
import path from 'path';

const htmlFile = path.join(path.dirname(process.mainModule.filename), './http-servers/html-server/html/index.html');

export const htmlServerSync = http.createServer((req, res) => {
    const data = fs.readFileSync(htmlFile, 'utf8');

    res.setHeader('Content-Type', 'text/html');
    res.write(data);
    res.end();
});

export const htmlServerStream = http.createServer((req, res) => {
    const stream = fs.createReadStream(htmlFile);

    stream.on('error', function(error) {
        res.writeHead(404, 'Not Found');
        res.end();
    });

    stream.pipe(res);
});
