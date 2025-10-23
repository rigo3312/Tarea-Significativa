<template>
  <div class="servicios-page">
    <div class="container">
      <h2 class="page-title">Guía de servicios</h2>
      <p class="subtitle">SERVICIOS DESTACADOS</p>

      <div class="featured-row">

        <div class="feature center-feature">
          <div class="feature-icon-box">📁</div>
          <p class="feature-title bold">Registro y auténtica de títulos de Educación Superior</p>
        </div>

        <div class="feature">
          <div class="feature-icon-box">📁</div>
          <p class="feature-title bold">Servicios y trámites en línea</p>
        </div>
      </div>

      <section class="grid-section">
        <div class="grid-area">
          <h3 class="section-heading">SERVICIOS EDUCACIÓN BÁSICA Y MEDIA</h3>
          <div class="three-cols">
            <div>Certificación de registro de título de educación media.</div>
            <div>Certificación de registro de notas</div>
            <div>Auténticas de documentos académicos</div>
          </div>

          <div class="three-cols">
            <div>Equivalencia de estudios en el extranjero</div>
            <div>Incorporación de títulos de educación media del extranjero</div>
            <div>Marginación de documentos académicos</div>
          </div>
        </div>

        <div class="grid-area">
          <h3 class="section-heading">SERVICIOS EN LÍNEA</h3>
          <div class="three-cols">
            <div>Servicios y trámites en línea</div>
            <div>Bachillerato Virtual (en línea)</div>
            <div>Directorio de Centros Educativos</div>
          </div>

          <div class="three-cols center-row">
            <div></div>
            <div>Boleta de resultados PAES / AVANZO</div>
            <div></div>
          </div>
        </div>

        <div class="grid-area">
          <h3 class="section-heading">SERVICIOS EDUCACIÓN SUPERIOR</h3>
          <div class="three-cols">
            <div>Reposición de certificado de registro y auténtica de título de Educación Superior</div>
            <div>Auténtica de diferentes documentos emitidos por las Instituciones de Educación Superior</div>
            <div>Registro y auténtica de título de Educación Superior con estudios por equivalencia</div>
          </div>

          <div class="three-cols">
            <div>Registro y auténtica de títulos de Educación Superior</div>
            <div>Registro y auténtica de títulos de Educación Superior – Postgrados (Maestrías y especialidades)</div>
            <div>Auténtica de Curso de Formación Pedagógica de Educación Superior</div>
          </div>

          <div class="three-cols">
            <div>Incorporación de títulos de Educación Superior procedentes del extranjero</div>
            <div>Solicitud de constancia de notas de Instituciones de Educación Superior cerradas</div>
            <div>Registro de Firmas y Sellos de Autoridades de las Instituciones de Educación Superior</div>
          </div>

          <div class="three-cols">
            <div class="full-width">Información sobre el estado legal de las instituciones de educación superior y las carreras que ofrecen</div>
          </div>
        </div>
      </section>

      <div class="faq">
        <h4>¿TIENE DUDAS?</h4>
        <p>Visita nuestras <a href="#">preguntas frecuentes aquí</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiciosView'
}
</script>

<style scoped>
.servicios-page {
  background: #f4f7fa;
  color: #222;
  min-height: 100vh;
  padding: 60px 0 100px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
}

.page-title {
  text-align: center;
  margin: 0 0 10px;
  font-size: 48px;
  font-weight: 400;
  color: #2f3740;
}

.subtitle {
  text-align: center;
  margin: 0 0 40px;
  font-size: 20px;
  letter-spacing: 2px;
  color: #6b6f76;
}

.featured-row {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 120px;
  margin-bottom: 60px;
}

.feature {
  text-align: center;
  width: 360px;
}

.feature-icon { width: 32px; height: 32px; display: inline-block; }

.feature-icon-box { font-size: 40px; color: #2f3740; display:inline-block; margin-bottom:12px; }

.feature-title { margin: 0; color: #1f2428; font-size: 15px; text-align:center }
.feature-title.bold { font-weight: 700; }

.grid-section { margin-top: 30px; }

.grid-area { margin-bottom: 48px; }

.section-heading { font-size: 26px; margin: 20px 0 26px; color: #2f3740; }

.three-cols {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  align-items: start;
  margin-bottom: 20px;
}

.three-cols div { text-align: center; color: #222; font-size: 15px; }

.center-row { justify-items: center; }

.full-width { grid-column: 1 / -1; text-align:center; font-weight:600 }

.faq { text-align: center; margin-top: 60px; }

.faq h4 { margin: 0 0 8px; font-size: 20px }

.faq a { color: #0b67b2; font-style: italic }

@media (max-width: 1000px) {
  .featured-row { grid-template-columns: 1fr; }
  .three-cols { grid-template-columns: 1fr; }
  .page-title { font-size: 34px; }
}
</style>
