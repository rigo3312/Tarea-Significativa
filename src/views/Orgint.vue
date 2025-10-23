<template>
  <div class="orgint-container">
    <div class="inner">
      <header class="header-section">
        <h1 class="main-title">Banco Mundial - Estándares Ambientales y Sociales</h1>
      </header>

      <section class="content-section">
        <ul class="standards-list">
          <li><strong>PPPI</strong> – Plan de Participación de Partes Interesadas</li>
          <li><strong>PMGO</strong> – Procedimientos de Gestión de Mano de Obra</li>
          <li><strong>PCAS</strong> – Plan de Compromiso Social y Ambiental</li>
          <li><strong>MRI</strong> – Marco de Reasentamiento Involuntario</li>
          <li><strong>MPPI</strong> – Marco de Planificación de Pueblos Indígenas</li>
          <li><strong>MGAS (Anexos)</strong> – Marco de Gestión Ambiental y Social (Anexos)</li>
          <li><strong>MGAS</strong> – Marco de Gestión Ambiental y Social</li>
        </ul>
      </section>

      <footer class="footer-section">
        <p class="publication-date">Publicado el 08-12-2022.</p>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrgintComponent'
}
</script>

<style scoped>
.orgint-container {
  background: #2f3942; /* solid dark bluish background to match screenshot */
  color: #ffffff;
  min-height: 100vh;
  padding: 40px 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.orgint-container .inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
}

.header-section {
  text-align: left;
  margin-bottom: 40px;
}

.main-title {
  font-size: 3.2rem;
  font-weight: 300;
  letter-spacing: 1px;
  line-height: 1.1;
  margin: 0 0 20px 0;
  color: #f5f7fa;
}

.content-section {
  margin-bottom: 60px;
}

.standards-list {
  list-style: disc;
  padding-left: 28px;
  margin: 0;
}

.standards-list li {
  font-size: 1.05rem;
  line-height: 2.1;
  margin-bottom: 8px;
}

.standards-list li strong {
  font-weight: 600;
  color: #9ecbe6;
  margin-right: 6px;
}

.footer-section {
  text-align: left;
  color: rgba(255,255,255,0.8);
  margin-bottom: 40px;
}

@media (max-width: 768px) {
  .main-title {
    font-size: 1.8rem;
  }

  .standards-list li {
    font-size: 1rem;
  }
}
</style>
