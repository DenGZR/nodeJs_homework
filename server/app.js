import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes'

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Routes
app.use('/', routes);

app.use((err, req, res, next) => {
    res.status(400).json({
    success: false,
    message: err.message
});
});

export default app;
