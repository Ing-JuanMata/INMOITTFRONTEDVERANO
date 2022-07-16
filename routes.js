const express = require("express");
const router = express.Router();

router.get("/administrador", (req, res) => {
  res.render("administrador/ProyectosA");
});
router.get("/administrador/about", (req, res) => {
  res.render("administrador/SobreEmpresa");
});
router.get("/administrador/usuarios", (req, res) => {
  res.render("administrador/usuarios");
});
router.get("/administrador/crudAbout", (req, res) => {
  res.render("administrador/CRUDsobreEmpresa");
});

router.get("/cliente", (req, res) =>{
  res.render("cliente/index")
})

module.exports = router;
