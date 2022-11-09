
const {body , validationResult} = require('express-validator');

const exp = require("express");
const router = exp.Router();

router.get('/', (req, res) => {
    res.render("index",{validaciones:[], Datos:req.body})
})
router.get('/CrearUsuario', (req, res) => {
    res.render("CrearUsuario",{validaciones:[], Datos:req.body})
});

const creaUsr = require("../controllers/creaUsuario")
router.post('/CrearUsuario', [
    body('nombre','Ingrese Nombre')
        .exists()
        .isLength({min:5}),
    body('apellido','Ingrese apellido')
        .exists()
        .isLength({min:5}),
    body('correo','Ingrese correo')
        .exists()
        .isLength({min:5})
        .isEmail(),
    body('pwd','Ingrese Password')
        .exists()
        .isLength({min:5}),
    body('cumpleaños','Ingrese Cumpleaños')
        .exists()
        .isDate(),
], (req, res) => {
    
    const errores = validationResult(req)
    if (!errores.isEmpty())
    {
        let arrErr = errores.array();
        console.log(arrErr);
        res.render("CrearUsuario",{validaciones:arrErr, Datos:req.body})
    }
    else {
        creaUsr(req, res);
    }
})

const valUsr = require("../controllers/validaUsuario")
router.post('/ValidarUsuario',[
    body('correo','Ingrese Correo')
        .exists()
        .isLength({min:5})
        .isEmail(),
    body('pwd','Ingrese Password')
        .exists()
        .isLength({min:5})
    ],  (req,res) =>{
    
    const errores = validationResult(req)
    if (!errores.isEmpty())
    {
        let arrErr = errores.array();
        console.log(arrErr);
        res.render("index",{validaciones:arrErr, Datos:req.body})
    }
    else {
        valUsr(req,res);
    }
})

module.exports = router;