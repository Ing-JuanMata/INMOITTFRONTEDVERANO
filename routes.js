const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();

router.get("/", (req, res) => {
  let ruta = "";
  const actor = req.session.tipo;
  switch (actor) {
    case "Gerente":
      ruta = `proyectos/${req.session.clave}`;
      break;
    case "Agente":
      ruta = `inmueblesAgente/${req.session.clave}`;
      break;
    case "Valuador":
      ruta = `inmueblesValuador/${req.session.clave}`;
      break;
    default:
      ruta = "inmuebles";
  }
  fetch(`http://localhost/data/${ruta}`)//t/data/inmuebles
    .then((data) => data.json())
    .then((data) => {
      res.render("proyectos", {
        proyectos: data.results,
        actor,
      });
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

router.get("/registroAdmin", (req, res) => {
  if (req.session.tipo == "Admin") res.render("registroAdmin");
  res.redirect("/");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

router.get("/nuevo", (req, res) => {
  if (!(req.session.tipo == "Agente" || req.session.tipo == "Gerente")) {
    res.redirect("/");
    return;
  }

  fetch("http://localhost/data/cp")
    .then((data) => data.json())
    .then((asentamientos) => {
      if (asentamientos.err) {
        console.log(asentamientos.err);
        res.redirect("/");
        return;
      }
      res.render("proyecto", {
        cps: asentamientos.results,
        actor: req.session.tipo,
        creado: false,
        datos: {},
      });
    });
});

router.get("/editar/:idInmueble", (req, res) => {
  const actor = req.session.tipo;
  if (!(actor == "Agente" || actor == "Gerente" || actor == "Valuador")) {
    res.redirect(`/inmueble/${req.params.idInmueble}`);
    return;
  }
  fetch("http://localhost/data/cp")
    .then((data) => data.json())
    .then((asentamientos) => {
      if (asentamientos.err) {
        console.log(asentamientos.err);
        res.redirect("/");
        return;
      }
      fetch(`http://localhost/data/inmuebles/${req.params.idInmueble}`)
        .then((data) => data.json())
        .then((data) => {
          if (!data.results[0]) {
            res.redirect("/");
            return;
          }
          res.render("proyecto", {
            cps: asentamientos.results,
            actor,
            creado: true,
            datos: data.results[0],
          });
        });
    });
});

router.get("/inmueble/:idInmueble", (req, res) => {
  const actor = req.session.tipo;
  if (actor == "Agente" || actor == "Gerente" || actor == "Valuador") {
    res.redirect(`/editar/${req.params.idInmueble}`);
    return;
  }
  fetch("http://localhost/data/cp")
    .then((data) => data.json())
    .then((asentamientos) => {
      if (asentamientos.err) {
        console.log(asentamientos.err);
        res.redirect("/");
        return;
      }
      fetch(`http://localhost/data/inmuebles/${req.params.idInmueble}`)
        .then((data) => data.json())
        .then((data) => {
          if (!data.results[0]) {
            res.redirect("/");
            return;
          }
          res.render("proyecto", {
            cps: asentamientos.results,
            actor,
            creado: true,
            datos: data.results[0],
          });
        });
    });
});

router.get("/inmueble/:idInmueble", (req, res) => {
  res.render("proyecto", {
    actor: req.session.tipo,
  });
});

router.get("/agentes", (req, res) => {
  res.render("agentes", {
    actor: req.session.tipo,
  });
});

router.get("/perfil", (req, res) => {
  let ruta = "";
  switch (req.session.tipo) {
    case "Admin":
      ruta = "administradores";
      break;
    case "Cliente":
      ruta = "clientes";
      break;
    case "Gerente":
      ruta = "gerentes";
      break;
    case "Agente":
      ruta = "agentes";
      break;
    case "Valuador":
      ruta = "valuadores";
      break;
    default:
      res.redirect("/");
      return;
  }
  fetch(`http://localhost/data/${ruta}/${req.session.correo}`)
    .then((data) => data.json())
    .then((data) => {
      if (data.err) {
        res.redirect("/");
        return;
      }
      let datos = data.results[0];
      fetch("http://localhost/data/cp")
        .then((data) => data.json())
        .then((data) => {
          if (data.err) {
            res.redirect("/");
            return;
          }
          let cps = data.results;
          res.render("perfil", {
            actor: req.session.tipo,
            datos,
            cps,
          });
        });
    });
});

router.get("/about", (req, res) => {
  fetch("http://localhost/data/administradores")
    .then((data) => data.json())
    .then((data) => {
      if (data.err) {
        res.render("sobreEmpresa", {
          actor: req.session.tipo,
          admins: [],
        });
      }
      res.render("sobreEmpresa", {
        actor: req.session.tipo,
        admins: data.results,
      });
    });
});

router.get("/usuarios", (req, res) => {
  if (req.session.tipo != "Admin") {
    res.redirect("/");
    return;
  }

  fetch("http://localhost/data/cuentas")
    .then((data) => data.json())
    .then((data) => {
      if (data.err) {
        res.render("Usuarios", {
          actor: req.session.tipo,
          cuentas: [],
        });
        return;
      }
      res.render("Usuarios", {
        actor: req.session.tipo,
        cuentas: data.results,
      });
    });
});

router.get("/usuarios/:correo/:tipo", (req, res) => {
  if (req.session.tipo != "Admin") {
    res.redirect("/");
    return;
  }

  let ruta = "";
  switch (req.params.tipo) {
    case "Admin":
      ruta = "administradores";
      break;
    case "Cliente":
      ruta = "clientes";
      break;
    case "Gerente":
      ruta = "gerentes";
      break;
    case "Agente":
      ruta = "agentes";
      break;
    case "Valuador":
      ruta = "valuadores";
      break;
  }
  fetch(`http://localhost/data/${ruta}/${req.params.correo}`)
    .then((data) => data.json())
    .then((data) => {
      if (data.err) {
        res.redirect("/");
        return;
      }
      res.render("usuario", {
        actor: req.session.tipo,
        datos: data.results[0],
        tipo: req.params.tipo,
      });
    });
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
        let ruta = "";
        let identificador = "";
        let tipo = data.results[0].tipo;
        switch (data.results[0].tipo) {
          case "Cliente":
            ruta = "clientes";
            identificador = "idcliente";
            break;
          case "Gerente":
            ruta = "gerentes";
            identificador = "idgerente_proyecto";
            break;
          case "Admin":
            ruta = "administradores";
            identificador = "idAdministrador";
            break;
          case "Valuador":
            ruta = "valuadores";
            identificador = "idValuador";
            break;
          case "Agente":
            ruta = "agentes";
            identificador = "idagente_ventas";
            break;
        }

        fetch(`http://localhost/data/${ruta}/${req.body.correo}`)
          .then((data) => (data.json ? data.json() : res.status(401).end()))
          .then((data) => {
            if (data.err) {
              console.log(data.err);
              res.status(401).end();
              return;
            }
            console.log("Todo bien");
            sess = req.session;
            sess.correo = req.body.correo;
            sess.tipo = tipo;
            sess.clave = data.results[0][identificador];
            res.status(200).end();
            return;
          });
      } else {
        
        res.status(401).end();
      }
    });
});

router.post("/nuevo", (req, res) => {
  let datos =
    req.session.tipo == "Gerente"
      ? { idGerente: req.session.clave }
      : { idAgente: req.session.clave };
  fetch(`http://localhost/data/Inmueble`, {
    method: "POST",
    body: JSON.stringify(req.body),
    headers: { "Content-Type": "application/json" },
  })
    .then((data) => data.json())
    .then((data) => {
      datos.idInmueble = data.results.insertId;
      fetch(
        req.session.tipo == "Gerente"
          ? "http://localhost/data/gerenteProyecto"
          : "http://localhost/data/agenteInmueble",
        {
          method: "POST",
          body: JSON.stringify(datos),
          headers: { "Content-Type": "application/json" },
        }
      ).then(() => {
        res.json({ idInmueble: datos.idInmueble }).end();
      });
    });
});

router.put("/perfil", (req, res) => {
  let ruta = "";
  switch (req.session.tipo) {
    case "Admin":
      ruta = "administrador";
      break;
    case "Cliente":
      ruta = "cliente";
      break;
    case "Gerente":
      ruta = "gerente";
      break;
    case "Agente":
      ruta = "agente";
      break;
    case "Valuador":
      ruta = "valuador";
      break;
  }
  let datos = req.body;
  datos.correoN = datos.correo;
  datos.correo = req.session.correo;
  fetch(`http://localhost/data/${ruta}`, {
    method: "PUT",
    body: JSON.stringify(datos),
    headers: { "Content-Type": "application/json" },
  })
    .then((data) => data.json())
    .then((data) => {
      if (data.err) {
        res.status(403).end();
        return;
      }
      req.session.correo = datos.correoN;
      res.status(200).end();
    });
});

router.put("/cuenta", (req, res) => {
  fetch("http://localhost/data/cuenta", {
    method: "PUT",
    body: JSON.stringify({
      password: req.body.password,
      correo: req.session.correo,
    }),
    headers: { "Content-Type": "application/json" },
  }).then(() => {
    res.end();
  });
});
module.exports = router;
