const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const app = express();

// Import Routes
const productsRoute = require('./routes/products');
// const usersRoute = require('./routes/users');
const orderRouter = require('./routes/orders');

//USe Routes
app.use('/api/products', productsRoute)
// app.use('/api/users', usersRoute)
app.use('/api/orders', orderRouter);

app.use(cors({
    origin:"*",
    methods: ['GET', 'PUT', 'DELETE', 'PATCH', 'POST'],
    allowedHeaders: 'Content-Type, Authorization, Origin, X-Requested-With, Accept'
}))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;
