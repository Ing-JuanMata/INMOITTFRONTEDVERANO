const conectar = require("./conexion");
const fetch = require("node-fetch");

const postCuenta = (req, res) => {
  const conn = conectar();
  conn.execute(
    "INSERT INTO cuenta VALUES (?, ?)",
    [req.body.correo, req.body.password],
    (err, results, fields) => {
      if (err) throw err;
      res.send(results);
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
    }),
    headers: { "Content-Type": "application/json" },
  }).then(() => {
    const conn = conectar();
    conn.execute(
      "INSERT INTO cliente(nombre, apellido, telefono, correo) VALUES (?, ?, ?, ?)",
      [req.body.nombre, req.body.apellido, req.body.telefono, req.body.correo],
      (err, results, fields) => {
        if (err) throw err;
        res.send(results);
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
    }),
    headers: { "Content-Type": "application/json" },
  }).then(() => {
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
        if (err) throw err;
        res.send(results);
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
    }),
    headers: { "Content-Type": "application/json" },
  }).then(() => {
    const conn = conectar();
    conn.execute(
      "INSERT INTO administrador(nombre, correo) VALUES (?, ?)",
      [req.body.nombre, req.body.correo],
      (err, results, fields) => {
        if (err) throw err;
        res.send(results);
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
    }),
    headers: { "Content-Type": "application/json" },
  }).then(() => {
    const conn = conectar();
    conn.execute(
      "INSERT INTO valuador(nombre, apellido, telefono, correo) VALUES (?, ?, ?, ?)",
      [req.body.nombre, req.body.apellido, req.body.telefono, req.body.correo],
      (err, results, fields) => {
        if (err) throw err;
        res.send(results);
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
    }),
    headers: { "Content-Type": "application/json" },
  }).then(() => {
    const conn = conectar();
    conn.execute(
      "INSERT INTO agente_ventas(nombre, apellido, telefono, correo) VALUES (?, ?, ?, ?)",
      [req.body.nombre, req.body.apellido, req.body.telefono, req.body.correo],
      (err, results, fields) => {
        if (err) throw err;
        res.send(results);
      }
    );
    conn.end();
  });
};

const postCodigoPostal = (req, res) => {
  const conn = conectar();
  conn.execute(
    "INSERT INTO codigo_postal(asentamiento, codigo_postal) VALUES (?, ?)",
    [req.body.asentamiento, req.body.codigo],
    (err, results, fields) => {
      if (err) throw err;
      res.send(results);
    }
  );
  conn.end();
};

module.exports = { postCuenta, postCliente };
