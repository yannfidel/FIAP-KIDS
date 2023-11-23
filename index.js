const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");


const dbName = "partytime";
const port = 3000;
const app = express();


app.get("/", (req, res)=> {
    //primeira rota de teste
    res.json({message : "Rota de teste será trocada!!!"});
    });
    //escutando a porta
    app.listen(port, ()=>{
    console.log(`O backend está rodando na porta ${port}`)
    })