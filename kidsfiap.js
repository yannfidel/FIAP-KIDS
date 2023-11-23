const mongoose = require('mongoose');


const produtoSchema = new mongoose.Schema({
    codigo : {
        type : Number,
        required : true
    },
    descricao : {
        type : String
    },
    fornecedor : {
        type : String
    },
    DataFabricacao : {
        type : Date,
        required : true
    },
    QuantidadeEstoque : {
        type : Number,
        required : true
    }
})

const Produto = mongoose.model("Produto", produtoSchema);

modules.exports = Produto;


