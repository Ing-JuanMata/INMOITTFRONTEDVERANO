const conectar = require("./conexion");

/** Obtiene las cuentas de correo almacenadas en la base de datos */
const getCuentas = (req, res) => {
  const conn = conectar();
  conn.query(`SELECT correo FROM cuenta`, (err, results, fields) => {
    if (err) {
      res.json({ err });
      return;
    }
    res.json({ results });
  });
  conn.end();
};

/** Obtiene la contraseña de la cuenta solicitada
 * correo: cuenta de correo de la que se quiere obtener la contraseña
 */
const getCuenta = (req, res) => {
  const conn = conectar();
  conn.query(
    `SELECT password FROM cuenta WHERE correo = ?`,
    [req.params.correo],
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

/** Obtiene los clientes registrados en la base de datos */
const getClientes = (req, res) => {
  const conn = conectar();
  conn.query(`SELECT * FROM cliente`, (err, results, fields) => {
    if (err) {
      res.json({ err });
      return;
    }
    res.json({ results });
  });
  conn.end();
};

/** Obtiene toda la información sobre el cliente solicitado */
const getCliente = (req, res) => {
  const conn = conectar();
  conn.execute(
    `SELECT * FROM cliente WHERE idcliente = ?`,
    [req.params.idCliente],
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

/** Obtiene los nombres de los gerentes de proyecto registrados */
const getGerentesProyectos = (req, res) => {
  const conn = conectar();
  conn.query(
    `SELECT idgerente_proyecto, nombre FROM gerente_proyectos`,
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

/** Obtiene todos los datos de un determinado Gerente de proyectos
 * idGerente: id del gerente de proyectos buscado
 */
const getGerenteProyectos = (req, res) => {
  const conn = conectar();
  conn.execute(
    `SELECT gp.idgerente_proyecto, gp.nombre, gp.telefono, gp.direccion, cp.asentamiento, cp.codigo_postal, gp.correo FROM gerente_proyectos gp INNER JOIN codigo_postal cp ON gp.idcodigo_postal = cp.idcodigo_postal WHERE gp.idgerente_proyecto = ?`,
    [req.params.idGerente],
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

/** Obtiene los proyectos de un determinado gerente de proyectos
 * idGerente: El id del gerente de proyectos buscado
 */
const getProyectosGerente = (req, res) => {
  const conn = conectar();
  conn.query(
    `SELECT i.idinmueble, i.titulo, i.precio_venta, i.precio_renta, i.direccion FROM proyectos_gerente pg INNER JOIN inmueble i ON i.idinmueble = pg.idinmueble WHERE idgerente_proyectos = ?`,
    [req.params.idGerente],
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

/** Obtiene las cuentras de los administradores */
const getAdministradores = (req, res) => {
  const conn = conectar();
  conn.query(`SELECT * FROM administrador`, (err, results, fields) => {
    if (err) {
      res.json({ err });
      return;
    }
    res.json({ results });
  });
  conn.end();
};

/** Obtiene la información de un administrador determinado
 * idAdministrador: El id del administrador buscado
 */
const getAdministrador = (req, res) => {
  const conn = conectar();
  conn.execute(
    `SELECT * FROM administrador WHERE idadministrador = ?`,
    [req.params.idAdministrador],
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

/** Obtiene las cuentras de los agentes de ventas */
const getAgentesVentas = (req, res) => {
  const conn = conectar();
  conn.query(`SELECT * FROM agente_ventas`, (err, results, fields) => {
    if (err) {
      res.json({ err });
      return;
    }
    res.json({ results });
  });
  conn.end();
};

/** Obtiene la información de un agente de ventas determinado
 * idAgente: El id del agente de ventas buscado
 */
const getAgenteVentas = (req, res) => {
  const conn = conectar();
  conn.execute(
    `SELECT * FROM agente_ventas WHERE idagente_ventas = ?`,
    [req.params.idAgente],
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

/** Obtiene los proyectos asociados a un agente de ventas
 * idAgente: El id del agente de ventas buscado
 */
const getProyectosAgente = (req, res) => {
  const conn = conectar();
  conn.execute(
    `SELECT i.idinmueble, i.titulo, i.precio_venta, i.precio_renta, i.direccion FROM inmueble_agente ia INNER JOIN inmueble i ON i.idinmueble = ia.idinmueble WHERE ia.idagente_ventas = ?`,
    [req.params.idAgente],
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

/** Devuelve la información basica de los inmuebles (proyectos) */
const getInmuebles = (req, res) => {
  const conn = conectar();
  conn.query(
    `SELECT i.idinmueble, i.titulo, i.precio_venta, i.precio_renta, i.direccion, cp.asentamiento, cp.codigo_postal FROM inmueble i INNER JOIN codigo_postal cp ON i.idcodigo_postal = cp.idcodigo_postal`,
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

/** Obtiene toda la informacion de un inmueble
 * idInmueble: id del inmueble buscado
 */
const getInmueble = (req, res) => {
  const conn = conectar();
  conn.execute(
    `SELECT i.idinmueble, i.titulo, i.precio_venta, i.precio_renta, i.cuartos, i.pisos, i.area, i.direccion, cp.idcodigo_postal, cp.asentamiento, cp.codigo_postal FROM inmueble i INNER JOIN codigo_postal cp ON i.idcodigo_postal = cp.idcodigo_postal WHERE i.idinmueble = ?`,
    [req.params.idInmueble],
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

/** Obtiene todos lo servicios */
const getServicios = (req, res) => {
  const conn = conectar();
  conn.query(`SELECT * FROM servicio`, (err, results, fields) => {
    if (err) {
      res.json({ err });
      return;
    }
    res.json({ results });
  });
  conn.end();
};

/** Obtiene los servicios de un determinado inmueble
 * idInmueble: id del inmueble buscado
 */
const getServiciosInmueble = (req, res) => {
  const conn = conectar();
  conn.execute(
    `SELECT si.idServicio, s.nombre FROM servicio_inmueble si INNER JOIN servicio s ON s.idServicio = si.idServicio INNER JOIN inmueble i ON i.idinmueble = si.idinmueble WHERE si.idinmueble = ?`,
    [req.params.idInmueble],
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

/** Obtiene la lista de adeudos */
const getAdeudos = (req, res) => {
  const conn = conectar();
  conn.query(`SELECT * FROM adeudo`, (err, results, fields) => {
    if (err) {
      res.json({ err });
      return;
    }
    res.json({ results });
  });
  conn.end();
};

/** Obtiene los adeudos de un inmueble determinado
 * idInmueble: id del inmueble buscado
 */
const getAdeudosInmueble = (req, res) => {
  const conn = conectar();
  conn.query(
    `SELECT a.idadeudo, a.nombre, ai.cantidad FROM adeudos_inmueble ai INNER JOIN adeudo a ON a.idadeudo = ai.idadeudo INNER JOIN inmueble i ON ai.idinmueble = i.idinmueble WHERE ai.idinmueble = ${req.params.idInmueble}`,
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

/** Obtiene toda la informacion sobre los Valuadores */
const getValuadores = (req, res) => {
  const conn = conectar();
  conn.query(`SELECT * FROM valuador`, (err, results, fields) => {
    if (err) {
      res.json({ err });
      return;
    }
    res.json({ results });
  });
  conn.end();
};

/** Obtiene la informacion de un determinado Valuador
 * idValuador: id del valuador buscado
 */
const getValuador = (req, res) => {
  const conn = conectar();
  conn.query(
    `SELECT * FROM valuador WHERE idvaluador=?`,
    [req.params.idValuador],
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

/** Obtiene los inmuebles asociados a un determinado Valuador
 * idValuador: id del valuador buscado
 */
const getInmueblesEvaluador = (req, res) => {
  const conn = conectar();
  conn.execute(
    `SELECT i.idinmueble, i.titulo, i.precio_venta, i.precio_renta, i.direccion FROM inmueble_valuador iv INNER JOIN inmueble i ON i.idinmueble = iv.idinmueble WHERE idvaluador = ?`,
    [req.params.idValuador],
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

/** Obtiene los codigos postales */
const getCodigoPostal = (req, res) => {
  const conn = conectar();
  conn.query(`SELECT * FROM codigo_postal`, (err, results, fields) => {
    if (err) {
      res.json({ err });
      return;
    }
    res.json({ results });
  });
  conn.end();
};

module.exports = {
  getCuentas,
  getCuenta,
  getClientes,
  getCliente,
  getGerentesProyectos,
  getGerenteProyectos,
  getProyectosGerente,
  getAdministradores,
  getAdministrador,
  getAgentesVentas,
  getAgenteVentas,
  getProyectosAgente,
  getInmuebles,
  getInmueble,
  getServicios,
  getServiciosInmueble,
  getAdeudos,
  getAdeudosInmueble,
  getValuadores,
  getValuador,
  getInmueblesEvaluador,
  getCodigoPostal,
};
