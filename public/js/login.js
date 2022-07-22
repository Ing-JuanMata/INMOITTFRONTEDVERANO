login = document.getElementById("login");

login.addEventListener("submit", function (event) {
  event.preventDefault();
  const datos = { correo: this.correo.value, password: this.password.value };
  fetch("http://localhost/login", {
    method: "POST",
    body: JSON.stringify(datos),
    headers: { "Content-Type": "application/json" },
  }).then((data) => {
    console.log(data.status);
    if (data.status == 401) {
      alert("Correo o contraseña incorrectos");
      return;
    }
    window.location.replace("http://localhost/perfil");
  });
});
