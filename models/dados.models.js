const mongoose = require('mongoose'); //

const DataSchema = new mongoose.Schema({
    co2: String,
    ch4: String,
    escopo: Number,
    descricao: String
},{
    timestamps:true
});

const dados = mongoose.model("dadosgas", DataSchema);
module.exports = dados;