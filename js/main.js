document.getElementById(
  "header"
).innerHTML = `<img src="../img/narquitectura.png" class="img-fluid" height="250" alt="Nuestra Arquitectura">

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="http://biblioteca.fadu.uba.ar">Inicio</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link" href="./buscar.html">Buscar</a>
        <a class="nav-link" href="../templates/sumario_nuevo.html">Alta de Sumarios</a>
      </div>
    </div>
  </div>
</nav>`;

document.getElementById("footer").innerHTML = `
<div class="container-fluid footer-container">
  <div class="row footer-row">
    <div class="col-6 col-sm-6 col-md-3 align-items-start my-auto text-dark ml-3">
      <h6 class="my-auto">Centro de Documentación</h6>
      <div class="w-100"></div>
      <h6 class="my-auto">
        <strong>
          Biblioteca&nbsp;&nbsp;&nbsp;&nbsp;FADU&nbsp;&nbsp;-&nbsp;&nbsp;UBA
        </strong>
      </h6>
    </div>

    <div class="d-none d-md-block col-md-7"></div>

    <div class="col align-items-end my-auto text-dark">
      <p class="my-auto text-right" style="color: black; margin-right: 1rem">
        <strong>.UBA</strong>fadu
      </p>
    </div>
  </div>
</div>`;