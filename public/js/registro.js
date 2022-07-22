frmCliente = document.getElementById("frmCliente");
frmGerente = document.getElementById("frmGerente");
frmAgente = document.getElementById("frmAgente");
frmValuador = document.getElementById("frmValuador");

frmCliente.addEventListener("submit", function (event) {
  event.preventDefault();
  const datos = {
    correo: this.correo.value,
    password: this.password.value,
    nombre: this.nombre.value,
    apellido: this.apellido.value,
    telefono: this.telefono.value,
  };
  fetch("http://localhost/data/cliente", {
    method: "POST",
    body: JSON.stringify(datos),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((response) => {
      if (response.err) {
        alert(response.err.sqlMessage);
        return;
      }
      fetch("http://localhost/session", {
        method: "POST",
        body: JSON.stringify({
          correo: datos.correo,
          tipo: "Cliente",
          clave: response.results.insertId,
        }),
        headers: { "Content-Type": "application/json" },
      }).then(() => {
        window.location.replace("http://localhost/perfil");
      });
    });
});

frmAgente.addEventListener("submit", function (event) {
  event.preventDefault();
  const datos = {
    correo: this.correo.value,
    password: this.password.value,
    nombre: this.nombre.value,
    apellido: this.apellido.value,
    telefono: this.telefono.value,
  };
  fetch("http://localhost/data/agente", {
    method: "POST",
    body: JSON.stringify(datos),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((response) => {
      if (response.err) {
        alert(response.err.sqlMessage);
        return;
      }
      fetch("http://localhost/session", {
        method: "POST",
        body: JSON.stringify({
          correo: datos.correo,
          tipo: "Agente",
          clave: response.results.insertId,
        }),
        headers: { "Content-Type": "application/json" },
      }).then(() => {
        window.location.replace("http://localhost/perfil");
      });
    });
});

frmValuador.addEventListener("submit", function (event) {
  event.preventDefault();
  const datos = {
    correo: this.correo.value,
    password: this.password.value,
    nombre: this.nombre.value,
    apellido: this.apellido.value,
    telefono: this.telefono.value,
  };
  fetch("http://localhost/data/valuador", {
    method: "POST",
    body: JSON.stringify(datos),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((response) => {
      if (response.err) {
        alert(response.err.sqlMessage);
        return;
      }
      fetch("http://localhost/session", {
        method: "POST",
        body: JSON.stringify({
          correo: datos.correo,
          tipo: "Valuador",
          clave: response.results.insertId,
        }),
        headers: { "Content-Type": "application/json" },
      }).then(() => {
        window.location.replace("http://localhost/perfil");
      });
    });
});

frmGerente.addEventListener("submit", function (event) {
  event.preventDefault();
  const datos = {
    correo: this.correo.value,
    password: this.password.value,
    nombre: this.nombre.value,
    direccion: this.direccion.value,
    telefono: this.telefono.value,
    codigoPostal: this.codigoPostal.value,
  };
  fetch("http://localhost/data/gerente", {
    method: "POST",
    body: JSON.stringify(datos),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((response) => {
      if (response.err) {
        alert(response.err.sqlMessage);
        return;
      }
      fetch("http://localhost/session", {
        method: "POST",
        body: JSON.stringify({
          correo: datos.correo,
          tipo: "Gerente",
          clave: response.results.insertId,
        }),
        headers: { "Content-Type": "application/json" },
      }).then(() => {
        window.location.replace("http://localhost/perfil");
      });
    });
});
