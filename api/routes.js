const express = require("express");
const getControllers = require("./controllers/get");
const postControllers = require("./controllers/post");
const deleteControllers = require("./controllers/delete");
const putCotrollers = require("./controllers/put");
const router = express.Router();

//GET
router.get("/cuentas", getControllers.getCuentas);
router.get("/cuentas/:correo", getControllers.getCuenta);
router.get("/clientes", getControllers.getClientes);
router.get("/clientes/:correo", getControllers.getCliente);
router.get("/gerentes", getControllers.getGerentesProyectos);
router.get("/gerentes/:correo", getControllers.getGerenteProyectos);
router.get("/proyectos/:idGerente", getControllers.getProyectosGerente);
router.get("/administradores", getControllers.getAdministradores);
router.get("/administradores/:correo", getControllers.getAdministrador);
router.get("/agentes", getControllers.getAgentesVentas);
router.get("/agentes/:correo", getControllers.getAgenteVentas);
router.get("/inmueblesAgente/:idAgente", getControllers.getProyectosAgente);
router.get("/inmuebles", getControllers.getInmuebles);
router.get("/inmuebles/:idInmueble", getControllers.getInmueble);
router.get("/servicios", getControllers.getServicios);
router.get("/servicios/:idInmueble", getControllers.getServiciosInmueble);
router.get("/adeudos", getControllers.getAdeudos);
router.get("/adeudos/:idInmueble", getControllers.getAdeudosInmueble);
router.get("/cp", getControllers.getCodigoPostal);
router.get("/valuadores", getControllers.getValuadores);
router.get("/valuadores/:correo", getControllers.getValuador);
router.get(
  "/inmueblesValuador/:idValuador",
  getControllers.getInmueblesEvaluador
);

//POST
router.post("/cuenta", postControllers.postCuenta);
router.post("/cliente", postControllers.postCliente);
router.post("/gerente", postControllers.postGerenteProyectos);
router.post("/administrador", postControllers.postAdministrador);
router.post("/valuador", postControllers.postValuador);
router.post("/agente", postControllers.postAgenteVentas);
router.post("/cp", postControllers.postCodigoPostal);
router.post("/adeudo", postControllers.postAdeudo);
router.post("/servicio", postControllers.postServicio);
router.post("/inmueble", postControllers.postInmueble);
router.post("/adeudoInmueble", postControllers.postAdeudoInmueble);
router.post("/servicioInmueble", postControllers.postServicioInmueble);
router.post("/gerenteProyecto", postControllers.postProyectoGerente);
router.post("/valuadorInmueble", postControllers.postInmuebleValuador);
router.post("/agenteInmueble", postControllers.postInmuebleAgente);

//DELETE
router.delete("/cliente", deleteControllers.deleteCliente);
router.delete("/administrador", deleteControllers.deleteAdministrador);
router.delete("/gerente", deleteControllers.deleteGerente);
router.delete("/valuador", deleteControllers.deleteValuador);
router.delete("/agente", deleteControllers.deleteAgente);
router.delete("/adeudo", deleteControllers.deleteAdeudo);
router.delete("/adeudoInmueble", deleteControllers.deleteAdeudoInmueble);
router.delete("/servicio", deleteControllers.deleteServicio);
router.delete("/servicioInmueble", deleteControllers.deleteServicioInmueble);
router.delete("/inmueble", deleteControllers.deleteInmueble);
router.delete("/inmuebleValuador", deleteControllers.deleteInmuebleValuador);
router.delete("/inmuebleAgente", deleteControllers.deleteInmuebleAgente);

//PUT
router.put("/cuenta", putCotrollers.putCuenta);
router.put("/cliente", putCotrollers.putCliente);
router.put("/gerente", putCotrollers.putGerente);
router.put("/administrador", putCotrollers.putAdministrador);
router.put("/valuador", putCotrollers.putValuador);
router.put("/agente", putCotrollers.putAgente);
router.put("/cp", putCotrollers.putCodigoPostal);
router.put("/adeudo", putCotrollers.putAdeudo);
router.put("/servicio", putCotrollers.putServicio);
router.put("/inmueble", putCotrollers.putInmueble);
router.put("/adeudoInmueble", putCotrollers.putAdeudoInmueble);
//POR FACILIDAD TECNICA
router.post("/perfil", putCotrollers.putPerfil);
router.post("/inmuebleImg", putCotrollers.putInmuebleImg);

module.exports = router;
