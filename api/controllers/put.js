const conectar = require("./conexion");
const fetch = require("node-fetch");

const putCliente = (req, res) => {
  const conn = conectar();
  conn.execute(
    "UPDATE cliente SET nombre = ?, apellido = ?, telefono = ? WHERE correo = ?",
    [req.body.nombre, req.body.apellido, req.body.telefono, req.body.correo],
    (err, results, fields) => {
      if (err) res.json({ err });
      if (req.body.correo === req.body.correoN) res.json({ results });
      fetch("http://localhost/data/cuenta", {
        method: "POST",
        body: JSON.stringify({
          correo: req.body.correoN,
          password: req.body.password,
        }),
        headers: { "Content-Type": "application/json" },
      }).then(() => {
        conn.execute(
          "UPDATE cliente SET correo = ? WHERE correo = ?",
          [req.body.correoN, req.body.correo],
          (err, results, fields) => {
            if (err) res.json({ err });
            fetch("http://localhost/data/cuenta", {
              method: "DELETE",
              body: JSON.stringify({
                correo: req.body.correo,
              }),
              headers: { "Content-Type": "application/json" },
            }).then(() => {
              res.json({ results });
            });
          }
        );
        conn.end();
      });
    }
  );
};

const putGerente = (req, res) => {
  const conn = conectar();
  conn.execute(
    "UPDATE gerente_proyectos SET nombre = ?, telefono = ?, direccion = ?, idcodigo_postal = ? WHERE correo = ?",
    [
      req.body.nombre,
      req.body.telefono,
      req.body.direccion,
      req.body.codigoPostal,
      req.body.correo,
    ],
    (err, results, fields) => {
      if (err) res.json({ err });
      if (req.body.correo === req.body.correoN) res.json({ results });
      fetch("http://localhost/data/cuenta", {
        method: "POST",
        body: JSON.stringify({
          correo: req.body.correoN,
          password: req.body.password,
        }),
        headers: { "Content-Type": "application/json" },
      }).then(() => {
        conn.execute(
          "UPDATE gerente_proyectos SET correo = ? WHERE correo = ?",
          [req.body.correoN, req.body.correo],
          (err, results, fields) => {
            if (err) res.json({ err });
            fetch("http://localhost/data/cuenta", {
              method: "DELETE",
              body: JSON.stringify({
                correo: req.body.correo,
              }),
              headers: { "Content-Type": "application/json" },
            }).then(() => {
              res.json({ results });
            });
          }
        );
        conn.end();
      });
    }
  );
};

const putAdministrador = (req, res) => {
  const conn = conectar();
  conn.execute(
    "UPDATE administrador SET nombre = ? WHERE correo = ?",
    [req.body.nombre, req.body.correo],
    (err, results, fields) => {
      if (err) res.json({ err });
      if (req.body.correo === req.body.correoN) res.json({ results });
      fetch("http://localhost/data/cuenta", {
        method: "POST",
        body: JSON.stringify({
          correo: req.body.correoN,
          password: req.body.password,
        }),
        headers: { "Content-Type": "application/json" },
      }).then(() => {
        conn.execute(
          "UPDATE administrador SET correo = ? WHERE correo = ?",
          [req.body.correoN, req.body.correo],
          (err, results, fields) => {
            if (err) res.json({ err });
            fetch("http://localhost/data/cuenta", {
              method: "DELETE",
              body: JSON.stringify({
                correo: req.body.correo,
              }),
              headers: { "Content-Type": "application/json" },
            }).then(() => {
              res.json({ results });
            });
          }
        );
        conn.end();
      });
    }
  );
};

const putValuador = (req, res) => {
  const conn = conectar();
  conn.execute(
    "UPDATE valuador SET nombre = ?, apellido = ?, telefono = ? WHERE correo = ?",
    [req.body.nombre, req.body.apellido, req.body.telefono, req.body.correo],
    (err, results, fields) => {
      if (err) res.json({ err });
      if (req.body.correo === req.body.correoN) res.json({ results });
      fetch("http://localhost/data/cuenta", {
        method: "POST",
        body: JSON.stringify({
          correo: req.body.correoN,
          password: req.body.password,
        }),
        headers: { "Content-Type": "application/json" },
      }).then(() => {
        conn.execute(
          "UPDATE valuador SET correo = ? WHERE correo = ?",
          [req.body.correoN, req.body.correo],
          (err, results, fields) => {
            if (err) res.json({ err });
            fetch("http://localhost/data/cuenta", {
              method: "DELETE",
              body: JSON.stringify({
                correo: req.body.correo,
              }),
              headers: { "Content-Type": "application/json" },
            }).then(() => {
              res.json({ results });
            });
          }
        );
        conn.end();
      });
    }
  );
};

const putAgente = (req, res) => {
  const conn = conectar();
  conn.execute(
    "UPDATE agente_ventas SET nombre = ?, apellido = ?, telefono = ? WHERE correo = ?",
    [req.body.nombre, req.body.apellido, req.body.telefono, req.body.correo],
    (err, results, fields) => {
      if (err) res.json({ err });
      if (req.body.correo === req.body.correoN) res.json({ results });
      fetch("http://localhost/data/cuenta", {
        method: "POST",
        body: JSON.stringify({
          correo: req.body.correoN,
          password: req.body.password,
        }),
        headers: { "Content-Type": "application/json" },
      }).then(() => {
        conn.execute(
          "UPDATE agente_ventas SET correo = ? WHERE correo = ?",
          [req.body.correoN, req.body.correo],
          (err, results, fields) => {
            if (err) res.json({ err });
            fetch("http://localhost/data/cuenta", {
              method: "DELETE",
              body: JSON.stringify({
                correo: req.body.correo,
              }),
              headers: { "Content-Type": "application/json" },
            }).then(() => {
              res.json({ results });
            });
          }
        );
        conn.end();
      });
    }
  );
};

const putCodigoPostal = (req, res) => {
  const conn = conectar();
  conn.execute(
    "UPDATE codigo_postal SET asentamiento = ?, codigo_postal = ? WHERE idcodigo_postal = ?",
    [req.body.asentamiento, req.body.codigoPostal, req.body.idCodigoPostal],
    (err, result, fields) => {
      if (err) res.json({ err });
      res.json({ result });
    }
  );
};

const putAdeudo = (req, res) => {
  const conn = conectar();
  conn.execute(
    "UPDATE adeudo SET nombre = ? WHERE idadeudo = ?",
    [req.body.nombre, req.body.idAdeudo],
    (err, result, fields) => {
      if (err) res.json({ err });
      res.json({ result });
    }
  );
};

const putServicio = (req, res) => {
  const conn = conectar();
  conn.execute(
    "UPDATE servicio SET nombre = ? WHERE idServicio = ?",
    [req.body.nombre, req.body.idServicio],
    (err, result, fields) => {
      if (err) res.json({ err });
      res.json({ result });
    }
  );
};

const putInmueble = (req, res) => {
  const conn = conectar();
  conn.execute(
    "UPDATE inmueble SET titulo = ?, precio_venta = ?, precio_renta = ?, cuartos = ?, pisos = ?, area = ?, direccion = ?, idcodigo_postal = ? WHERE idinmueble = ?",
    [
      req.body.titulo,
      req.body.precioVenta,
      req.body.precioRenta,
      req.body.cuartos,
      req.body.pisos,
      req.body.area,
      req.body.direccion,
      req.body.idcodigo_postal,
      req.body.idinmueble,
    ],
    (err, result, fields) => {
      if (err) res.json({ err });
      res.json({ result });
    }
  );
};

const putAdeudoInmueble = (req, res) => {
  const conn = conectar();
  conn.execute(
    "UPDATE adeudos_inmueble SET cantidad = ? WHERE idinmueble = ? AND idadeudo = ?",
    [req.body.cantidad, req.body.idinmueble, req.body.idAdeudo],
    (err, result, fields) => {
      if (err) res.json({ err });
      res.json({ result });
    }
  );
};

module.exports = {
  putCliente,
  putGerente,
  putAdministrador,
  putValuador,
  putAgente,
  putCodigoPostal,
  putAdeudo,
  putServicio,
  putInmueble,
  putAdeudoInmueble,
};
