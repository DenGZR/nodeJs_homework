import express from 'express';
import config from './config/config.json';
import plainTextServer from './http-servers/plain-text-server';
import { htmlServerSync, htmlServerStream } from './http-servers/html-server';
import jsonServer from './http-servers/json-server';
import echoServer from './http-servers/echo-server';
import routes from './routes'

// tast 1
plainTextServer.listen(4000, () => console.log('plainTextServer run on port 4000'));

htmlServerStream.listen(5000, () => console.log('htmlServerStream run on port 5000'));
htmlServerSync.listen(5050, () => console.log('htmlServerSync run on port 5050'));

jsonServer.listen(6060, () => console.log('jsonServer run on port 6060'));
// tast 2
echoServer.listen(7070, () => console.log('jsonServer run on port 7070'));

// tast 4
const app = express();
// task 8
// Routes
app.use('/', routes);

export default app;
