const mongoose = require('mongoose');

const esquemaUsr = new mongoose.Schema({
    nombre: {type:String,required:[true,'campo requerido']},
    apellido: {type:String,required:[true,'campo requerido']},
    correo: {type:String,required:[true,'campo requerido'],unique:true},
    pwd: {type:String,required:[true,'campo requerido']},
    cumpleaños: {type:Date,required:[true,'campo requerido']}
    },{timestamps:true})

const Usuario = mongoose.model('db_Usr', esquemaUsr);

module.exports = Usuario;