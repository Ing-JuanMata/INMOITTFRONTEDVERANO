const express = require("express");
const getControllers = require("./controllers/get");
const postControllers = require("./controllers/post");
const router = express.Router();

//GET
router.get("/cuentas", getControllers.getCuentas);
router.get("/cuentas/:correo", getControllers.getCuenta);
router.get("/clientes", getControllers.getClientes);
router.get("/clientes/:idCliente", getControllers.getCliente);
router.get("/gerentesproyectos", getControllers.getGerentesProyectos);
router.get("/gerentesproyectos/:idGerente", getControllers.getGerenteProyectos);
router.get("/proyectosgerente/:idGerente", getControllers.getProyectosGerente);
router.get("/administradores", getControllers.getAdministradores);
router.get(
  "/administradores/:idAdministrador",
  getControllers.getAdministrador
);
router.get("/agentesventas", getControllers.getAgentesVentas);
router.get("/agentesventas/:idAgente", getControllers.getAgenteVentas);
router.get("/proyectosagente/:idAgente", getControllers.getProyectosAgente);
router.get("/inmuebles", getControllers.getInmuebles);
router.get("/inmuebles/:idInmueble", getControllers.getInmueble);
router.get("/servicios", getControllers.getServicios);
router.get("/servicios/:idInmueble", getControllers.getServiciosInmueble);
router.get("/adeudos", getControllers.getAdeudos);
router.get("/adeudos/:idInmueble", getControllers.getAdeudosInmueble);

//POST
router.post("/cuenta", postControllers.postCuenta);
router.post("/cliente", postControllers.postCliente);

module.exports = router;
