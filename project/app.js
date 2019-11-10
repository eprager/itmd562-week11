const express = require('express');
const app = express();
const morgan = require('morgan');

const userRoutes = require('./api/routes/users');

app.use(morgan('dev'));

// Route to handle user requests
app.use('/users', userRoutes);

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;
