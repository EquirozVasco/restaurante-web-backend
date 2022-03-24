// Importamos framework
const express = require('express');

// Instanciamos un Router
const router = express.Router();


// Importar controladores
const usuario_controller = require('../controllers/usuarios.controller');

// Definición de los endpoints - rutas

const vrs = "/api/v1"

router.get(vrs + "/usuarios", usuario_controller.consultarUsuarios);
router.get(vrs + "/usuarios/:id", usuario_controller.consultarUsuario); // /usuarios/1 o /usuarios/2 etc
router.post(vrs + "/usuarios", usuario_controller.crearUsuario);
router.put(vrs + "/usuarios", usuario_controller.modificarUsuario);
router.delete(vrs + "/usuarios", usuario_controller.eliminarUsuario);

module.exports = router;
