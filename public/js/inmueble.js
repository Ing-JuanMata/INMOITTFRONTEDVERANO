const frmInmueble = document.getElementById("frmInmueble");

frmInmueble.addEventListener("submit", function (event) {
  event.preventDefault();

  if (this.precio_venta.value == 0 && this.precio_renta.value == 0) {
    alert("Por lo menos un precio debe tener un monto mayor a 0");
    return;
  }

  fetch("http://localhost/nuevo", {
    method: "POST",
    body: JSON.stringify({
      titulo: this.titulo.value,
      precioVenta: this.precio_venta.value,
      precioRenta: this.precio_renta.value,
      cuartos: this.cuartos.value,
      pisos: this.pisos.value,
      area: this.area.value,
      direccion: this.direccion.value,
      codigoPostal: this.codigoPostal.value,
    }),
    headers: { "Content-Type": "application/json" },
  }).then(() => {
    alert("registrado");
  });
});
