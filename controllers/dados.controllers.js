const Dados = require("../models/dados.models")

module.exports = {

    async index(req, res) { 
        const dado = await Dados.find();
        res.json(dado); 
    },
    async create(req, res) {
       const {co2, ch4, escopo, descricao} = req.body; 

       let data = {};

       let dado = await Dados.findOne({descricao});

       if(!dado){
        data = {co2, ch4, escopo, descricao};
        dado = await Dados.create(data);

        return res.status(200).json(dado);
        } else{
            return res.status(500).json(dado);
        };
    },
    async details(req, res) { 
        const {_id} = req.params;
        const dado = await Dados.findOne({_id});
        res.json(dado); 
    },
    async delete(req, res) {
        const {_id} = req.params;
        const dado = await Dados.findByIdAndDelete({_id});
        return res.json(dado);
    },
    async update(req, res) {
        const {_id, co2, ch4, escopo, descricao} = req.body;

        const data = {co2, ch4, escopo, descricao};

        const dado = await Dados.findOneAndUpdate({_id},data,{new: true});

        res.json(dado);
    }
}