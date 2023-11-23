const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
name : { type : String },
email : {type : String, required : true },
password : {type : String, required: true}
});

const User = mongoose.model('User', UserSchema);
module.exports = User;

app.post("/cadastrousuario", async (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
   const password = req.body.password;
    //validação de campos
    if(nome == null || email == null || password == null){
    return res.status(400).json({error : "Preencher todos os campos!!!"});
    }
    //teste de duplicidade
    const emailExiste = await Usuario.findOne({email : email});
    if(emailExiste){
    return res.status(400).json({error : "O email informado já existe"});
    }})

    const usuario = new UserSchema({
        nome: nome,
        email: email,
        password : password
        });
    try {
    const newUsuario = await usuario.save();
    res.json({ error: null, msg: "Cadastro ok", UsuarioId: newUsuario._id });
    } catch (error) {};
        //rota de get de formulario
        app.get("/cadastrousuario", async (req, res) => {
        res.sendFile(__dirname + "/index.html");
});

app.get("/", async (req, res) => {
    res.sendFile(__dirname + "/index.html");
    });
    app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
    });
    