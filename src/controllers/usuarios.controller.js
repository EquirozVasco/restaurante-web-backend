// Importar los servicios

const run = require('../services/mongodb.service');

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
    let respuesta = {}
    try {
        respuesta.ok = true;
        respuesta.message = "Usuarios consultados correctamente";
        // Consulta a la base de datos de usuarios
        run().catch(console.dir);
        
        respuesta.info = [{ nombre: "Juan" }];
        res.send(respuesta);
    } catch (error) {
        respuesta.ok = false;
        respuesta.message = "Ha ocurrido un error consultando los usuarios";
        respuesta.info = error;
        res.status(500).send(respuesta);
    }
}

module.exports = {
    crearUsuario,
    modificarUsuario,
    eliminarUsuario,
    consultarUsuario,
    consultarUsuarios
}