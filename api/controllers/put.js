const conectar = require("./conexion");
const fetch = require("node-fetch");

const putCuenta = (req, res) => {
  conn = conectar();
  conn.execute(
    "UPDATE cuenta SET password = ? WHERE correo = ?",
    [req.body.password, req.body.correo],
    (err, results, fields) => {
      if (err) {
        res.json({ err });
        return;
      }
      res.json({ results });
    }
  );
};
const putCliente = (req, res) => {
  const conn = conectar();
  conn.execute(
    "UPDATE cliente SET nombre = ?, apellido = ?, telefono = ?, correo = ? WHERE correo = ?",
    [
      req.body.nombre,
      req.body.apellido,
      req.body.telefono,
      req.body.correoN,
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
};

const putGerente = (req, res) => {
  const conn = conectar();
  conn.execute(
    "UPDATE gerente_proyectos SET nombre = ?, telefono = ?, direccion = ?, idcodigo_postal = ?, correo = ? WHERE correo = ?",
    [
      req.body.nombre,
      req.body.telefono,
      req.body.direccion,
      req.body.codigoPostal,
      req.body.correoN,
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
};

const putAdministrador = (req, res) => {
  const conn = conectar();
  conn.execute(
    "UPDATE administrador SET nombre = ?, correo = ? WHERE correo = ?",
    [req.body.nombre, req.body.correoN, req.body.correo],
    (err, results, fields) => {
      if (err) {
        res.json({ err });
        return;
      }
      res.json({ results });
    }
  );
};

const putValuador = (req, res) => {
  const conn = conectar();
  conn.execute(
    "UPDATE valuador SET nombre = ?, apellido = ?, telefono = ?, correo = ? WHERE correo = ?",
    [
      req.body.nombre,
      req.body.apellido,
      req.body.telefono,
      req.body.correoN,
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
};

const putAgente = (req, res) => {
  const conn = conectar();
  conn.execute(
    "UPDATE agente_ventas SET nombre = ?, apellido = ?, telefono = ?, correo = ? WHERE correo = ?",
    [
      req.body.nombre,
      req.body.apellido,
      req.body.telefono,
      req.body.correoN,
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
};

const putCodigoPostal = (req, res) => {
  const conn = conectar();
  conn.execute(
    "UPDATE codigo_postal SET asentamiento = ?, codigo_postal = ? WHERE idcodigo_postal = ?",
    [req.body.asentamiento, req.body.codigoPostal, req.body.idCodigoPostal],
    (err, results, fields) => {
      if (err) {
        res.json({ err });
        return;
      }
      res.json({ results });
    }
  );
};

const putAdeudo = (req, res) => {
  const conn = conectar();
  conn.execute(
    "UPDATE adeudo SET nombre = ? WHERE idadeudo = ?",
    [req.body.nombre, req.body.idAdeudo],
    (err, results, fields) => {
      if (err) {
        res.json({ err });
        return;
      }
      res.json({ results });
    }
  );
};

const putServicio = (req, res) => {
  const conn = conectar();
  conn.execute(
    "UPDATE servicio SET nombre = ? WHERE idServicio = ?",
    [req.body.nombre, req.body.idServicio],
    (err, results, fields) => {
      if (err) {
        res.json({ err });
        return;
      }
      res.json({ results });
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
      req.body.codigoPostal,
      req.body.idInmueble,
    ],
    (err, results, fields) => {
      if (err) {
        res.json({ err });
        return;
      }
      res.json({ results });
    }
  );
};

const putAdeudoInmueble = (req, res) => {
  const conn = conectar();
  conn.execute(
    "UPDATE adeudos_inmueble SET cantidad = ? WHERE idinmueble = ? AND idadeudo = ?",
    [req.body.cantidad, req.body.idInmueble, req.body.idAdeudo],
    (err, results, fields) => {
      if (err) {
        res.json({ err });
        return;
      }
      res.json({ results });
    }
  );
};

module.exports = {
  putCuenta,
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
