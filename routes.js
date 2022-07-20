const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("proyectos", {
    proyectos: [1, 2, 3, 4, 5],
  });
});

router.get("/registro", (req, res) => {
  fetch("http://localhost/data/cp")
    .then((data) => data.json())
    .then((asentamientos) => {
      if (asentamientos.err) {
        console.log(asentamientos.err);
        res.redirect("/");
        return;
      }
      console.log(asentamientos.results);
      res.render("registro", {
        asentamientos: asentamientos.results,
      });
    });
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/inmueble/:idInmueble", (req, res) => {
  res.render("proyecto");
});

router.get("/agentes", (req, res) => {
  res.render("agentes");
});

router.get("/perfil", (req, res) => {
  res.render("perfil");
});

router.get("/about", (req, res) => {
  router.render("sobreEmpresa");
});

router.get("/usuarios", (req, res) => {
  router.get("Usuarios");
});

router.post("/session", (req, res) => {
  let sess = req.session;
  sess.correo = req.body.correo;
  sess.tipo = req.body.tipo;
  sess.clave = req.body.clave;
  res.end();
});

router.post("/login", (req, res) => {
  fetch(`http://localhost/data/cuentas/${req.body.correo}`)
    .then((data) => (data.json ? data.json() : res.status(401).end()))
    .then((data) => {
      if (!data.results[0]) {
        res.status(401).end();
        return;
      }
      if (data.results[0].password == req.body.password) {
        switch (data.results[0].tipo) {
          case "Cliente":
            fetch(`http://localhost/data/clientes/${req.body.correo}`)
              .then((data) => (data.json ? data.json() : res.status(401).end()))
              .then((data) => {
                sess = req.session;
                sess.correo = req.body.correo;
                sess.tipo = "Cliente";
                sess.clave = data.results[0].idcliente;
                res.status(200).end();
              });
            break;
          case "Gerente":
            fetch(`http://localhost/data/gerentes/${req.body.correo}`)
              .then((data) => (data.json ? data.json() : res.status(401).end()))
              .then((data) => {
                sess = req.session;
                sess.correo = req.body.correo;
                sess.tipo = "Gerente";
                sess.clave = data.results[0].idgerente_proyecto;
                res.status(200).end();
              });
            break;
          case "Admin":
            fetch(`http://localhost/data/administradores/${req.body.correo}`)
              .then((data) => (data.json ? data.json() : res.status(401).end()))
              .then((data) => {
                sess = req.session;
                sess.correo = req.body.correo;
                sess.tipo = "Admin";
                sess.clave = data.results[0].idAdministrador;
                res.status(200).end();
              });
            break;
          case "Valuador":
            fetch(`http://localhost/data/valuadores/${req.body.correo}`)
              .then((data) => (data.json ? data.json() : res.status(401).end()))
              .then((data) => {
                sess = req.session;
                sess.correo = req.body.correo;
                sess.tipo = "Valuador";
                sess.clave = data.results[0].idValuador;
                res.status(200).end();
              });
            break;
          case "Agente":
            fetch(`http://localhost/data/agentes/${req.body.correo}`)
              .then((data) => (data.json ? data.json() : res.status(401).end()))
              .then((data) => {
                sess = req.session;
                sess.correo = req.body.correo;
                sess.tipo = "Agente";
                sess.clave = data.results[0].idagente_ventas;
                res.status(200).end();
              });
            break;
        }
        return;
      }
      res.status(401).end();
    });
});
module.exports = router;
