const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const cors = require('cors')

const { authentication } = require('./middleware/authentication')

// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');

const app = express();


console.log("application has been started on port 4004");



app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// app.use(authentication) pure application me middleware use karna hai to

app.use('/account', require('./routes/auth'))
app.use('/products', authentication, require('./routes/product'))

const errorHandeler = (err, req, res, next) => {

    const statusCode = err.statusCode || 500;

    const message = err.message || "Internal erver Error";

    res.status(statusCode).send({ errorMessage: message })
}

app.use(errorHandeler);

module.exports = app;
