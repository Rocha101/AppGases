const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const { default: mongoose } = require('mongoose');
const routes = require('./routes');

const app = express();
const port = 3001; //

mongoose.connect('mongodb://localhost:27017/gee-iso-mongo',
    function (err){
    if (err) {
        console.log(err);
    }else{
    console.log('MongoDB conectado com sucesso')}});

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use(routes);

app.listen(port, function() {
    console.log(`rodando na porta: ${port}`);
});