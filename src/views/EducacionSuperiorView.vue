<template>
  <div class="edu-page">
    <div class="inner">
      <header class="hero">
        <h1>Educación superior</h1>
      </header>

      <section class="documents">
        <h2>Documentos</h2>
        <div class="docs-grid">
          <div class="doc-item">
            <div class="doc-icon">⬇️</div>
            <p class="doc-title">Fortalecimiento de capacidades para la implementación de la Educación Dual en las Instituciones de Educación Superior en El Salvador (DUALES)</p>
          </div>

          <div class="doc-item">
            <div class="doc-icon">⬇️</div>
            <p class="doc-title">Caracterización de la atención educativa de estudiantes con discapacidad en las Instituciones de Educación Superior-IES de El Salvador</p>
          </div>

          <div class="doc-item">
            <div class="doc-icon">👥</div>
            <p class="doc-title">Publicaciones</p>
          </div>

          <div class="doc-item">
            <div class="doc-icon">📊</div>
            <p class="doc-title">Estadísticas de Educación Superior</p>
          </div>

          <div class="doc-item">
            <div class="doc-icon">📄</div>
            <p class="doc-title">Solicitud para asignación de especialidad curricular a profesionales no docentes</p>
          </div>

          <div class="doc-item">
            <div class="doc-icon">⬇️</div>
            <p class="doc-title">Becas y Financiamiento</p>
          </div>
        </div>
      </section>

      <section class="services">
        <h2>Servicios</h2>
        <div class="services-row">
          <div class="service-link-row">
            <a class="service-link-text" href="#">GUIA PARA INCORPORACIÓN DE TITULOS DE EDUCACIÓN SUPERIOR</a>
            <a class="service-link-text" href="#">PROCESO DE ATENCION AL USUARIO GERENCIA REGISTRO- DNES AGOSTO 2020</a>
            <a class="service-link-text" href="#">SOLICITUD VIRTUAL PARA ASIGNACIÓN DE ESPECIALIDAD CURRICULAR A PROFESIONALES NO DOCENTES</a>
          </div>

          <div class="services-icons">
            <ServiceLink :imageUrl="img1" />
            <ServiceLink :imageUrl="img2" />
            <ServiceLink :imageUrl="img3" />
            <ServiceLink :imageUrl="img4" />
          </div>
        </div>
      </section>

      <section class="carreras">
        <h3>Carreras Autorizadas</h3>
        <ul>
          <li>Listado de carreras autorizadas octubre 2024</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import ServiceLink from '../components/ServiceLink.vue'
import img1 from '@/assets/carreras01.jpg'
import img2 from '@/assets/universidad02.jpg'
import img3 from '@/assets/interes03.jpg'
import img4 from '@/assets/servicios04.jpg'

export default {
  name: 'EducacionSuperiorView',
  components: { ServiceLink },
  data() {
    return { img1, img2, img3, img4 }
  }
}
</script>

<style scoped>
.edu-page { background:#2f3942; color:#e6eef6; min-height:100vh; padding:40px 0; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif }
.inner { max-width:1200px; margin:0 auto; padding:0 24px }
.hero h1 { font-size:36px; font-weight:300; margin:8px 0 22px; color:#f5f7fa }

.documents { border-top:1px solid rgba(255,255,255,0.03); padding-top:20px }
.documents h2 { color:#cfe6ff; font-weight:600; margin-bottom:18px }
.docs-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:22px 24px; align-items:start }
.doc-item { text-align:center; padding:8px }
.doc-icon { font-size:28px; margin-bottom:10px }
.doc-title { font-size:14px; line-height:1.4; color:#d9e8f6 }

.services { border-top:1px solid rgba(255,255,255,0.03); padding-top:24px; margin-top:28px }
.services h2 { color:#cfe6ff; font-weight:600; margin-bottom:12px }
.service-link-row { display:flex; gap:20px; justify-content:space-between; color:#c0d6e9; font-size:12px; margin-bottom:28px }
.service-link-text { color:inherit; text-decoration:none }

.services-icons { display:flex; gap:80px; justify-content:center; align-items:center; padding:30px 0 }

.carreras { border-top:1px solid rgba(255,255,255,0.03); padding-top:30px; margin-top:20px }
.carreras h3 { letter-spacing:4px; text-transform:uppercase; color:#f5f7fa; font-weight:600; margin-bottom:12px }
.carreras ul { margin:0; padding-left:20px }
.carreras li { color:#d9e8f6; font-size:13px }

@media (max-width:900px) {
  .docs-grid { grid-template-columns:1fr }
  .service-link-row { flex-direction:column; gap:12px }
  .services-icons { gap:30px; flex-wrap:wrap }
}
</style>