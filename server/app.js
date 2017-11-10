import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import passport from './middleware/passportLocalStrategy';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());

// Routes
app.use('/', routes);

app.use((err, req, res, next) => {
    res.status(400).json({
    success: false,
    message: err.message
});
});

export default app;
