const conectar = require("./conexion");
const fetch = require("node-fetch");

const postCuenta = (req, res) => {
  const conn = conectar();
  conn.execute(
    "INSERT INTO cuenta VALUES (?, ?, ?)",
    [req.body.correo, req.body.password, req.body.tipo],
    (err, results, fields) => {
      if (err) {
        res.json({ err });
        return;
      }
      res.json({ results });
    }
  );
  conn.end();
};

const postCliente = (req, res) => {
  fetch("http://localhost/data/cuenta", {
    method: "POST",
    body: JSON.stringify({
      correo: req.body.correo,
      password: req.body.password,
      tipo: "Cliente",
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then((data) => data.json())
    .then((data) => {
      if (data.err) {
        res.json({ err: data.err });
        return;
      }
      const conn = conectar();
      conn.execute(
        "INSERT INTO cliente(nombre, apellido, telefono, correo) VALUES (?, ?, ?, ?)",
        [
          req.body.nombre,
          req.body.apellido,
          req.body.telefono,
          req.body.correo,
        ],
        (err, results, fields) => {
          if (err) {
            res.json({ err });
            return;
          }
          res.json({ results });
        }
      );
      conn.end();
    });
};

const postGerenteProyectos = (req, res) => {
  fetch("http://localhost/data/cuenta", {
    method: "POST",
    body: JSON.stringify({
      correo: req.body.correo,
      password: req.body.password,
      tipo: "Gerente",
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then((data) => data.json())
    .then((data) => {
      if (data.err) {
        res.json({ err: data.err });
        return;
      }
      const conn = conectar();
      conn.execute(
        "INSERT INTO gerente_proyectos(nombre, telefono, direccion, idcodigo_postal, correo) VALUES (?, ?, ?, ?, ?)",
        [
          req.body.nombre,
          req.body.telefono,
          req.body.direccion,
          req.body.codigoPostal,
          req.body.correo,
        ],
        (err, results, fields) => {
          if (err) {
            res.json({ err });
            return;
          }
          res.json({ results });
        }
      );
      conn.end();
    });
};

const postAdministrador = (req, res) => {
  fetch("http://localhost/data/cuenta", {
    method: "POST",
    body: JSON.stringify({
      correo: req.body.correo,
      password: req.body.password,
      tipo: "Admin",
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then((data) => data.json())
    .then((data) => {
      if (data.err) {
        res.json({ err: data.err });
        return;
      }
      const conn = conectar();
      conn.execute(
        "INSERT INTO administrador(nombre, correo) VALUES (?, ?)",
        [req.body.nombre, req.body.correo],
        (err, results, fields) => {
          if (err) {
            res.json({ err });
            return;
          }
          res.json({ results });
        }
      );
      conn.end();
    });
};

const postValuador = (req, res) => {
  fetch("http://localhost/data/cuenta", {
    method: "POST",
    body: JSON.stringify({
      correo: req.body.correo,
      password: req.body.password,
      tipo: "Valuador",
    }),
    headers: { "Content-Type": "application/json" },
  }).then((data) => {
    if (data.err) {
      res.json({ err: data.err });
      return;
    }
    const conn = conectar();
    conn.execute(
      "INSERT INTO valuador(nombre, apellido, telefono, correo) VALUES (?, ?, ?, ?)",
      [req.body.nombre, req.body.apellido, req.body.telefono, req.body.correo],
      (err, results, fields) => {
        if (err) {
          res.json({ err });
          return;
        }
        res.json({ results });
      }
    );
    conn.end();
  });
};

const postAgenteVentas = (req, res) => {
  fetch("http://localhost/data/cuenta", {
    method: "POST",
    body: JSON.stringify({
      correo: req.body.correo,
      password: req.body.password,
      tipo: "Agente",
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then((data) => data.json())
    .then((data) => {
      if (data.err) {
        res.json({ err: data.err });
        return;
      }
      const conn = conectar();
      conn.execute(
        "INSERT INTO agente_ventas(nombre, apellido, telefono, correo) VALUES (?, ?, ?, ?)",
        [
          req.body.nombre,
          req.body.apellido,
          req.body.telefono,
          req.body.correo,
        ],
        (err, results, fields) => {
          if (err) {
            res.json({ err });
            return;
          }
          res.json({ results });
        }
      );
      conn.end();
    });
};

const postCodigoPostal = (req, res) => {
  const conn = conectar();
  conn.execute(
    "INSERT INTO codigo_postal(asentamiento, codigo_postal) VALUES (?, ?)",
    [req.body.asentamiento, req.body.codigoPostal],
    (err, results, fields) => {
      if (err) {
        res.json({ err });
        return;
      }
      res.json({ results });
    }
  );
  conn.end();
};

const postAdeudo = (req, res) => {
  const conn = conectar();
  conn.execute(
    "INSERT INTO adeudo(nombre) VALUES (?)",
    [req.body.nombre],
    (err, results, fields) => {
      if (err) {
        res.json({ err });
        return;
      }
      res.json({ results });
    }
  );
  conn.end();
};

const postServicio = (req, res) => {
  const conn = conectar();
  conn.execute(
    "INSERT INTO servicio(nombre) VALUES (?)",
    [req.body.nombre],
    (err, results, fields) => {
      if (err) {
        res.json({ err });
        return;
      }
      res.json({ results });
    }
  );
  conn.end();
};

const postInmueble = (req, res) => {
  const conn = conectar();
  conn.execute(
    "INSERT INTO inmueble(titulo, precio_venta, precio_renta, cuartos, pisos, area, direccion, idcodigo_postal) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    [
      req.body.titulo,
      req.body.precioVenta,
      req.body.precioRenta,
      req.body.cuartos,
      req.body.pisos,
      req.body.area,
      req.body.direccion,
      req.body.codigoPostal,
    ],
    (err, results, fields) => {
      if (err) {
        res.json({ err });
        return;
      }
      res.json({ results });
    }
  );
  conn.end();
};

const postAdeudoInmueble = (req, res) => {
  const conn = conectar();
  conn.execute(
    "INSERT INTO adeudos_inmueble VALUES (?, ?, ?)",
    [req.body.idAdeudo, req.body.idInmueble, req.body.cantidad],
    (err, results, fields) => {
      if (err) {
        res.json({ err });
        return;
      }
      res.json({ results });
    }
  );
  conn.end();
};

const postServicioInmueble = (req, res) => {
  const conn = conectar();
  conn.execute(
    "INSERT INTO servicio_inmueble VALUES (?, ?)",
    [req.body.idInmueble, req.body.idServicio],
    (err, results, fields) => {
      if (err) {
        res.json({ err });
        return;
      }
      res.json({ results });
    }
  );
  conn.end();
};

const postProyectoGerente = (req, res) => {
  const conn = conectar();
  conn.execute(
    "INSERT INTO proyectos_gerente VALUES (?, ?)",
    [req.body.idInmueble, req.body.idGerente],
    (err, results, fields) => {
      if (err) {
        res.json({ err });
        return;
      }
      res.json({ results });
    }
  );
  conn.end();
};

const postInmuebleValuador = (req, res) => {
  const conn = conectar();
  conn.execute(
    "INSERT INTO inmueble_valuador VALUES (?, ?)",
    [req.body.idInmueble, req.body.idValuador],
    (err, results, fields) => {
      if (err) {
        res.json({ err });
        return;
      }
      res.json({ results });
    }
  );
  conn.end();
};

const postInmuebleAgente = (req, res) => {
  const conn = conectar();
  conn.execute(
    "INSERT INTO inmueble_agente VALUES (?, ?)",
    [req.body.idInmueble, req.body.idAgente],
    (err, results, fields) => {
      if (err) {
        res.json({ err });
        return;
      }
      res.json({ results });
    }
  );
  conn.end();
};

module.exports = {
  postCuenta,
  postCliente,
  postGerenteProyectos,
  postAdministrador,
  postValuador,
  postAgenteVentas,
  postCodigoPostal,
  postAdeudo,
  postServicio,
  postInmueble,
  postAdeudoInmueble,
  postServicioInmueble,
  postProyectoGerente,
  postInmuebleValuador,
  postInmuebleAgente,
};
