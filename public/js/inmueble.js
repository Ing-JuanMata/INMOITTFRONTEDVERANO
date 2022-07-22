const frmInmueble = document.getElementById("frmInmueble");
const modalServicios = document.getElementById("rservicio");
const agServicio = document.getElementById("agServicio");
const agAdeudo = document.getElementById("agAdeudo");
const modalAdeudos = document.getElementById("radeudo");
const btnValuador = document.getElementById("btnValuador");
if (modalServicios && modalAdeudos) {
  modalServicios.addEventListener("click", registrarServicio);
  modalAdeudos.addEventListener("click", registrarAdeudo);
}

if (agServicio) {
  agServicio.addEventListener("click", agregarServicio);
}
if (agAdeudo) {
  agAdeudo.addEventListener("click", agregarAdeudo);
}
if (btnValuador) {
  btnValuador.addEventListener("click", agregarValuador);
}

function agregarValuador(event) {
  event.preventDefault();
  const valuador = document.getElementById("valuadores");
  const idInmueble = window.location.pathname.split("/").slice(-1)[0];
  const idValuador = valuador.options[valuador.selectedIndex].value;

  fetch("http://localhost/data/valuadorInmueble", {
    method: "POST",
    body: JSON.stringify({
      idInmueble,
      idValuador,
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then((data) => data.json())
    .then((data) => {
      if (!data.err) {
        alert("Su solicitud de evaluacion ha sido enviada");
      } else {
        alert(
          "El valuador que requiere ya esta en proceso de revisar su inmueble"
        );
      }
    });
}
frmInmueble.addEventListener("submit", function (event) {
  event.preventDefault();
});

function actualizarInmueble() {
  const frm = document.getElementById("frmInmueble");
  if (frm.precio_venta.value == 0 && frm.precio_renta.value == 0) {
    alert("Por lo menos un precio debe tener un monto mayor a 0");
    return;
  }

  fetch("http://localhost/data/inmueble", {
    method: "PUT",
    body: JSON.stringify({
      titulo: frm.titulo.value,
      precioVenta: frm.precio_venta.value,
      precioRenta: frm.precio_renta.value,
      cuartos: frm.cuartos.value,
      pisos: frm.pisos.value,
      area: frm.area.value,
      direccion: frm.direccion.value,
      codigoPostal: frm.codigoPostal.value,
      idInmueble: window.location.pathname.split("/").slice(-1)[0],
    }),
    headers: { "Content-Type": "application/json" },
  }).then((data) => window.location.reload());
}

function eliminarInmueble() {
  fetch("http://localhost/data/inmueble", {
    method: "DELETE",
    body: JSON.stringify({
      idInmueble: window.location.pathname.split("/").slice(-1)[0],
    }),
    headers: { "Content-Type": "application/json" },
  }).then(() => window.location.reload());
}
function crearInmueble() {
  const frm = document.getElementById("frmInmueble");
  if (frm.precio_venta.value == 0 && frm.precio_renta.value == 0) {
    alert("Por lo menos un precio debe tener un monto mayor a 0");
    return;
  }

  fetch("http://localhost/nuevo", {
    method: "POST",
    body: JSON.stringify({
      titulo: frm.titulo.value,
      precioVenta: frm.precio_venta.value,
      precioRenta: frm.precio_renta.value,
      cuartos: frm.cuartos.value,
      pisos: frm.pisos.value,
      area: frm.area.value,
      direccion: frm.direccion.value,
      codigoPostal: frm.codigoPostal.value,
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then((data) => data.json())
    .then((data) => {
      window.location.replace(
        `http://localhost/editar/${data.idInmueble}`
      );
    });
}

function consultarValuadores() {
  fetch("http://localhost/data/valuadores")
    .then((data) => data.json())
    .then((data) => {
      ({ results } = data);
      const valuadores = document.getElementById("valuadores");
      results.forEach((result) => {
        valuadores.appendChild(
          createOption({
            val: result.idvaluador,
            nombre: `${result.nombre} ${result.apellido} (${result.correo})`,
          })
        );
      });
    });
}
function consultarServicios() {
  fetch("http://localhost/data/servicios")
    .then((data) => data.json())
    .then((data) => {
      ({ results } = data);
      const servicios = document.getElementById("servicio");
      results.forEach((result) => {
        servicios.appendChild(
          createOption({ val: result.idServicio, nombre: result.nombre })
        );
      });
    });
  const idInmueble = window.location.pathname.split("/").slice(-1);
  fetch(`http://localhost/data/servicios/${idInmueble}`)
    .then((data) => data.json())
    .then((data) => {
      ({ results } = data);
      const bodyServicios = document.querySelector("#tblServicios tbody");
      results.forEach((result) => {
        bodyServicios.appendChild(
          createRow({
            id: result.idServicio,
            nombre: result.nombre,
            tipo: "Servicio",
          })
        );
      });
    });
}
function consultarAdeudos() {
  fetch("http://localhost/data/adeudos")
    .then((data) => data.json())
    .then((data) => {
      ({ results } = data);
      const adeudos = document.getElementById("adeudo");
      results.forEach((result) => {
        adeudos.appendChild(
          createOption({
            val: result.idadeudo,
            nombre: result.nombre,
          })
        );
      });
    });

  const idInmueble = window.location.pathname.split("/").slice(-1);
  fetch(`http://localhost/data/adeudos/${idInmueble}`)
    .then((data) => data.json())
    .then((data) => {
      ({ results } = data);
      const bodyAdeudos = document.querySelector("#tblAdeudos tbody");
      results.forEach((result) => {
        bodyAdeudos.appendChild(
          createRow({
            id: result.idadeudo,
            nombre: result.nombre,
            cantidad: result.cantidad,
            tipo: "Adeudo",
          })
        );
      });
    });
}

function registrarServicio(event) {
  event.preventDefault();
  const nombre = document.getElementById("nombreServicio").value;
  document.getElementById("nombreServicio").value = "";
  fetch("http://localhost/data/servicio", {
    method: "POST",
    body: JSON.stringify({
      nombre,
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then((data) => data.json())
    .then((data) => {
      document
        .getElementById("servicio")
        .appendChild(createOption({ val: data.results.insertId, nombre }));
    });
}

function registrarAdeudo(event) {
  event.preventDefault();
  const nombre = document.getElementById("nombreAdeudo").value;
  document.getElementById("nombreAdeudo").value = "";
  fetch("http://localhost/data/adeudo", {
    method: "POST",
    body: JSON.stringify({
      nombre,
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then((data) => data.json())
    .then((data) => {
      document
        .getElementById("adeudo")
        .appendChild(
          createOption({ val: data.results.insertId, nombre, tipo: "Adeudo" })
        );
    });
}

function agregarServicio(event) {
  event.preventDefault();
  const bodyServicios = document.querySelector("#tblServicios tbody");
  const servicio = document.getElementById("servicio");
  const nombre = servicio.options[servicio.selectedIndex].outerText;
  const idInmueble = window.location.pathname.split("/").slice(-1)[0];
  const idServicio = servicio.options[servicio.selectedIndex].value;

  fetch("http://localhost/data/servicioInmueble", {
    method: "POST",
    body: JSON.stringify({
      idInmueble,
      idServicio,
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then((data) => data.json())
    .then((data) => {
      if (!data.err) {
        bodyServicios.appendChild(
          createRow({ nombre, id: idServicio, tipo: "Servicio" })
        );
      }
    });
}

function agregarAdeudo(event) {
  event.preventDefault();
  const bodyAdeudos = document.querySelector("#tblAdeudos tbody");
  const adeudo = document.getElementById("adeudo");
  const nombre = adeudo.options[adeudo.selectedIndex].outerText;
  const idInmueble = window.location.pathname.split("/").slice(-1)[0];
  const idAdeudo = adeudo.options[adeudo.selectedIndex].value;
  const cantidad = document.getElementById("cantidad").value;

  fetch("http://localhost/data/adeudoInmueble", {
    method: "POST",
    body: JSON.stringify({
      idInmueble,
      idAdeudo,
      cantidad,
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then((data) => data.json())
    .then((data) => {
      if (data.err) {
        console.log(data.err);
        return;
      }
      if (!data.err) {
        bodyAdeudos.appendChild(createRow({ nombre, id: idAdeudo, cantidad }));
      }
    });
}

function eliminarServicio(event) {
  event.preventDefault();
  if (!document.getElementById("servicio")) {
    alert("ACCION DENEGADA");
    return;
  }
  const idServicio = event.target.value;
  fetch("http://localhost/data/servicioInmueble", {
    method: "DELETE",
    body: JSON.stringify({
      idInmueble: window.location.pathname.split("/").slice(-1)[0],
      idServicio,
    }),
    headers: { "Content-Type": "application/json" },
  }).then(() => window.location.reload());
}

function eliminarAdeudo(event) {
  event.preventDefault();
  const idAdeudo = event.target.value;
  fetch("http://localhost/data/adeudoInmueble", {
    method: "DELETE",
    body: JSON.stringify({
      idInmueble: window.location.pathname.split("/").slice(-1)[0],
      idAdeudo,
    }),
    headers: { "Content-Type": "application/json" },
  }).then(() => window.location.reload());
}

function createOption(opciones) {
  let option = document.createElement("option");
  option.value = opciones.val;
  option.text = opciones.nombre;
  return option;
}

function createRow(opciones) {
  let tr = document.createElement("tr");
  let tds = [document.createElement("td"), document.createElement("td")];

  let accion = document.createElement("button");
  accion.value = opciones.id;
  accion.textContent = "Quitar";
  accion.classList.add("btn", "btn-danger");
  accion.addEventListener(
    "click",
    opciones.tipo == "Adeudo" ? eliminarAdeudo : eliminarServicio
  );

  tds[0].textContent = opciones.nombre;
  if (opciones.cantidad) {
    tds.push(document.createElement("td"));
    tds[1].textContent = opciones.cantidad;
    tds[2].appendChild(accion);
  } else {
    tds[1].appendChild(accion);
  }

  tds.forEach((td) => {
    tr.appendChild(td);
  });
  return tr;
}

if (modalServicios && modalAdeudos) {
  consultarServicios();
  consultarAdeudos();
}

if (document.getElementById("valuadores")) {
  consultarValuadores();
}
