const Usuario  = require("../models/modelo");
const encrypt  = require("../config/encriptacion");

module.exports = async (req, res) => {

    const {nombre, apellido, correo, pwd, cumpleaños} = {...req.body};

    const usr = new Usuario
    usr.nombre = nombre;
    usr.apellido = apellido;
    usr.correo = correo;
    usr.pwd = await encrypt.encriptar(pwd);
    usr.cumpleaños = cumpleaños;

    usr.save()
    .then(newUserData => {
        res.redirect("/")
    })
    .catch(err => {
        console.log(err);
        res.send(err + "<br><a href='CrearUsuario.html'>Volver!</a>")
    });
}