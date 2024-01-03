const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');

const userRoutes = require('./routes/user');

const app = express();

app.use(bodyParser.json());

app.use((req,res,next) => {
    res.setHeader('Access-COntrol-Allow-Origin', '#');
    res.setHeader('Access-COntrol-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-COntrol-Allow-Headers', 'Content-Type', 'Authorization');
})

app.use('/admin', adminRoutes)

app.listen(8080);