<template>
  <div class="programas-page">
    <div class="container">
      <h2 class="page-title">PROGRAMAS INSTITUCIONALES</h2>

      <div class="banner">
        <img :src="require('@/assets/planificacion.png')" alt="planificacion" class="banner-img" />
      </div>

      <section class="programs-grid">
        <div class="program">Aprendizaje de calidad y significativo para la Primera Infancia</div>
        <div class="program">Aprendizajes de calidad y significativos en los niveles de Educación Básica, Media y sus modalidades</div>
        <div class="program">Fortalecimiento de la Educación Superior.</div>

        <div class="program">Inclusividad Educativa</div>
        <div class="program">Evaluación Educativa para la mejora de los aprendizajes</div>
        <div class="program">Profesionalización Docente, para la dignificación del magisterio al servicio de los aprendizajes</div>

        <div class="program">Acceso Universal a las Tecnologías Educativas, Conocido como: “Enlaces con la Educación”</div>
        <div class="program">Programa Ciencia, Tecnología e innovación, que impactan el sector educativo, productivo y académico.</div>
        <div class="program">Mejora integral de infraestructura con ambientes escolares inclusivos, seguros y sostenibles.</div>

        <div class="program">Dotación de Uniformes, Zapatos y Útiles Escolares.</div>
        <div class="program">Alimentación y Salud Escolar-Vaso de Leche.</div>
        <div class="program">Modernización Institucional.</div>

        <div class="program">Protección y Convivencia Escolar para el Desarrollo de la Comunidad Educativa</div>
        <div class="program">Sistema Nacional de Asesoramiento Educativo (SISNAE)</div>
        <div class="program">Fortalecimiento de la Gestión en el Territorio</div>

        <div class="program">Consejería Escolar para la Comunidad Educativa</div>
        <div class="program">Protección y Gestión de Riesgos Medioambientales en la Comunidad Educativa</div>
        <div class="program"></div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgramasView'
}
</script>

<style scoped>
.programas-page { background: #f4f7fa; padding: 40px 0 80px; min-height: 100vh; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
.page-title { text-align: center; font-size: 36px; margin: 8px 0 18px; color:#2f3740; }
.banner { text-align:center; margin-bottom: 30px; }
.banner-text { display:inline-block; background:#2f3740; color:#fff; padding:8px 18px; border-radius:8px; font-weight:600 }
.programs-grid { display:grid; grid-template-columns: repeat(3, 1fr); gap: 40px 24px; }
.program { text-align:center; font-size: 14px; color:#1f2428; }
@media (max-width: 1000px) { .programs-grid { grid-template-columns: 1fr; } .page-title { font-size: 28px;} }
</style>
