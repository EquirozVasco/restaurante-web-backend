// Importar los servicios

const {leerDocumentos, agregarDocumento} = require('../services/mongodb.service');

// Controlador de usuarios

const res = require("express/lib/response")

/**
 * 
 * @param {Request} req 
 * @param {Response} resp 
 */


const crearUsuario = async (req, res) => {
    let respuesta = {}
    try {
        respuesta.ok = true;
        respuesta.message = "Usuario agregado correctamente";
        // Agregar a la base de datos de usuarios
        let informacion = req.body;
        let resultado = await agregarDocumento('usuarios', informacion);
        console.log(resultado);
        respuesta.info = resultado;
        res.send(respuesta);

    } catch (error) {
        respuesta.ok = false;
        respuesta.message = "Ha ocurrido un error agregando el usuario";
        respuesta.info = error;
        res.status(500).send(respuesta);
    }
}

const modificarUsuario = (req, res) => {
    res.send("Modificar Usuario")
}

const eliminarUsuario = (req, res) => {
    res.send("Eliminar Usuario")
}

const consultarUsuario = (req, res) => {
    let id = req.params.id;
    res.send("Consulta un usuario " + id);
}

const consultarUsuarios = async (req, res) => {
    let respuesta = {}
    try {
        respuesta.ok = true;
        respuesta.message = "Usuarios consultados correctamente";
        // Consulta a la base de datos de usuarios
        let resultado = await leerDocumentos('usuarios');
        console.log(resultado);
        respuesta.info = resultado;
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