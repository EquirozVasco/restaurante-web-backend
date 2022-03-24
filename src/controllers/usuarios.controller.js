// Controlador de usuarios

const res = require("express/lib/response")

/**
 * 
 * @param {Request} req 
 * @param {Response} resp 
 */

const crearUsuario = (req, res) => {
    res.send("Crear usuario")
}

const modificarUsuario = (req, res) => {
    res.send("Modificar Usuario")
}

const eliminarUsuario = (req, res) => {
    res.send("Eliminar Usuario")
}

const consultarUsuario = (req, res) => {
    res.send("Consulta un usuario")
}

const consultarUsuarios = (req, res) => {
    res.send("Consulta usuarios")
}

module.exports = { 
    crearUsuario, 
    modificarUsuario, 
    eliminarUsuario, 
    consultarUsuario, 
    consultarUsuarios 
}