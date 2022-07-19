const conectar = require("./conexion");
const fetch = require("node-fetch");

/** correo, password */
const postCuenta = (req, res) => {
  const conn = conectar();
  conn.execute(
    "INSERT INTO cuenta VALUES (?, ?)",
    [req.body.correo, req.body.password],
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

/** correo, password, nombre, apellido, telefono */
const postCliente = (req, res) => {
  fetch("http://localhost/data/cuenta", {
    method: "POST",
    body: JSON.stringify({
      correo: req.body.correo,
      password: req.body.password,
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

/** correo, password, nombre, telefono, direccion, codigoPostal */
const postGerenteProyectos = (req, res) => {
  fetch("http://localhost/data/cuenta", {
    method: "POST",
    body: JSON.stringify({
      correo: req.body.correo,
      password: req.body.password,
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

/** Inserta la informacion de un administrador
 * correo: Correo a registrar
 * password: Password para iniciar sesion
 * nombre: Nombre del administrador
 */
const postAdministrador = (req, res) => {
  fetch("http://localhost/data/cuenta", {
    method: "POST",
    body: JSON.stringify({
      correo: req.body.correo,
      password: req.body.password,
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

/** Inserta la informacion de un valuador
 * correo: Correo a registrar
 * password: Password para iniciar sesion
 * nombre: Nombre del valuador
 * apellido: Apellido de la oficina del valuador
 * telefono: Telefono del valuador
 */
const postValuador = (req, res) => {
  fetch("http://localhost/data/cuenta", {
    method: "POST",
    body: JSON.stringify({
      correo: req.body.correo,
      password: req.body.password,
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

/** Inserta la informacion de un agente de ventas
 * correo: Correo a registrar
 * password: Password para iniciar sesion
 * nombre: Nombre del agente de ventas
 * apellido: Apellido de la oficina del agente de ventas
 * telefono: Telefono del agente de ventas
 */
const postAgenteVentas = (req, res) => {
  fetch("http://localhost/data/cuenta", {
    method: "POST",
    body: JSON.stringify({
      correo: req.body.correo,
      password: req.body.password,
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

/** Inserta la informacion sobre algun codigo postal
 * asentamiento: Nombre del asentamiento que hace referencia el codigo postal
 * codigoPostal: codigo postal del asentamiento
 */
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

/** Inserta un adeudo
 * nombre: Nombre del adeudo en cuestion
 */
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

/** Inserta un servicio
 * nombre: nombre del servicio
 */
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

/** Inserta un inmueble
 * titulo:
 * precioVenta:
 * precioRenta:
 * cuartos:
 * pisos:
 * area:
 * direccion:
 * codigoPostal:
 */
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

/** Agrega un adeudo a un inmueble
 * idAdeudo:
 * idInmueble:
 * cantidad:
 */
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

/** Agrega un servicio a un inmueble
 * idInmueble:
 * idServicio
 */
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

/** Agrega un proyecto a un gerente de proyectos
 * idInmueble:
 * idGerente:
 */
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

/** Agrega un inmueble a un valuador
 * idInmueble:
 * idValuador:
 */
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

/** Agrega un inmueble a un Agente de ventas
 * idInmueble:
 * idAgente:
 */
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
