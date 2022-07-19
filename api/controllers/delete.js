const conectar = require("./conexion");
const fetch = require("node-fetch");

/** Elimina una cuenta de cliente
 * correo:
 */
const deleteCliente = (req, res) => {
  const conn = conectar();
  conn.execute(
    "DELETE FROM cliente WHERE correo = ?",
    [req.body.correo],
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

/** Elimina una cuenta de administrador
 * correo:
 */
const deleteAdministrador = (req, res) => {
  const conn = conectar();
  conn.execute(
    "DELETE FROM administrador WHERE correo = ?",
    [req.body.correo],
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

/** Elimina una cuenta de gerente de proyectos
 * correo:
 */
const deleteGerente = (req, res) => {
  const conn = conectar();
  conn.execute(
    "DELETE FROM gerente_proyectos WHERE correo = ?",
    [req.body.correo],
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

/** Elimina una cuenta de valuador
 * correo:
 */
const deleteValuador = (req, res) => {
  const conn = conectar();
  conn.execute(
    "DELETE FROM valuador WHERE correo = ?",
    [req.body.correo],
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

/** Elimina una cuenta de agente de ventas
 * correo:
 */
const deleteAgente = (req, res) => {
  const conn = conectar();
  conn.execute(
    "DELETE FROM agente_ventas WHERE correo = ?",
    [req.body.correo],
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

/** Elimina un tipo de adeudo
 * idAdeudo:
 */
const deleteAdeudo = (req, res) => {
  const conn = conectar();
  conn.execute(
    "DELETE FROM adeudo WHERE idadeudo = ?",
    [req.body.idAdeudo],
    (err, results, fields) => {
      if (err) res.json({ err });
      res.send(results);
    }
  );
  conn.end();
};

/** Elimina un adeudo de un inmueble
 * idAdeudo:
 * idInmueble;
 */
const deleteAdeudoInmueble = (req, res) => {
  const conn = conectar();
  conn.execute(
    "DELETE FROM adeudos_inmueble WHERE idadeudo = ? AND idinmueble = ?",
    [req.body.idAdeudo, req.body.idInmueble],
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

/** Elimina un servicio
 * idServicio:
 */
const deleteServicio = (req, res) => {
  const conn = conectar();
  conn.execute(
    "DELETE FROM servicio WHERE idServicio = ?",
    [req.body.idServicio],
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

/** Elimina un servicio de un inmueble
 * idServicio:
 * idInmueble:
 */
const deleteServicioInmueble = (req, res) => {
  const conn = conectar();
  conn.execute(
    "DELETE FROM servicio_inmueble WHERE idServicio = ? AND idinmueble = ?",
    [req.body.idServicio, req.body.idInmueble],
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

/** Elimina un inmueble */
const deleteInmueble = (req, res) => {
  const conn = conectar();
  conn.execute(
    "DELETE FROM inmueble WHERE idinmueble = ?",
    [req.body.idInmueble],
    (err, results, fields) => {
      if (err) {
        res.json({ err });
        return;
      }
      res.json({ results });
    }
  );
};

/** Elimina en enlace de inmueble/valuador
 * idInmueble:
 * idValuador:
 */
const deleteInmuebleValuador = (req, res) => {
  const conn = conectar();
  conn.execute(
    "DELETE FROM inmueble_valuador WHERE idinmueble = ? AND idvaluador = ?",
    [req.params.idInmueble, req.params.idValuador],
    (err, result, fields) => {
      if (err) {
        res.json({ err });
        return;
      }
      res.json({ results });
    }
  );
};

/** Elimina en enlace de inmueble/agente
 * idInmueble:
 * idAgente:
 */
const deleteInmuebleAgente = (req, res) => {
  const conn = conectar();
  conn.execute(
    "DELETE FROM inmueble_agente WHERE idinmueble = ? AND idagente_ventas = ?",
    [req.params.idInmueble, req.params.idAgente],
    (err, result, fields) => {
      if (err) {
        res.json({ err });
        return;
      }
      res.json({ results });
    }
  );
};

module.exports = {
  deleteCliente,
  deleteAdministrador,
  deleteGerente,
  deleteValuador,
  deleteAgente,
  deleteAdeudo,
  deleteAdeudoInmueble,
  deleteServicio,
  deleteServicioInmueble,
  deleteInmueble,
  deleteInmuebleValuador,
  deleteInmuebleAgente,
};
