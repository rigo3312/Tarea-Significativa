<template>
  <div class="page-content">
    
    <h1>Educación superior</h1>

    <section class="card-section">
      <h2>Documentos</h2>
      <div class="grid-container">
        <InfoCard
          icon="📄"
          title="Fortalecimiento de capacidades para la implementación..."
          link="#"
        />
        <InfoCard
          icon="📊"
          title="Caracterización de la atención educativa de estudiantes..."
          link="#"
        />
        <InfoCard icon="📚" title="Publicaciones" link="#" />
        <InfoCard
          icon="📈"
          title="Estadísticas de Educación Superior"
          link="#"
        />
        <InfoCard icon="💰" title="Becas y Financiamiento" link="#" />
        <InfoCard icon="💰" title="Becas y Financiamiento" link="#" />
      </div>
    </section>

    <section class="service-section">
      <h2>Servicios</h2>
      <div class="grid-container-services">
        <ServiceLink
          imageUrl="https://via.placeholder.com/150/ffffff/333333?text=Servicio+1"
          link="#"
        />
        <ServiceLink
          imageUrl="https://via.placeholder.com/150/ffffff/333333?text=Servicio+2"
          link="#"
        />
        <ServiceLink
          imageUrl="https://via.placeholder.com/150/ffffff/333333?text=Servicio+3"
          link="#"
        />
        <ServiceLink
          imageUrl="https://via.placeholder.com/150/ffffff/333333?text=Servicio+4"
          link="#"
        />
      </div>
    </section>
  </div>
</template>

<script>
// 1. Importamos los componentes que esta VISTA necesita
// ¡Asegúrate que la ruta '../components/' sea correcta!
import InfoCard from '../components/InfoCard.vue';
import ServiceLink from '../components/ServiceLink.vue';

export default {
  name: 'EducacionSuperiorView',
  
  // 2. Registramos los componentes para poder usarlos en el <template>
  components: {
    InfoCard,
    ServiceLink,
  },
};
</script>

<style scoped>
/* 'scoped' significa que estos estilos SÓLO se aplican a esta vista */
.page-content h1 {
  font-size: 2.5em;
  font-weight: 300; /* Texto más delgado */
  border-bottom: 1px solid #555;
  padding-bottom: 10px;
}

.card-section,
.service-section {
  margin-top: 40px;
}

/* Títulos de sección (Documentos, Servicios) */
.card-section h2,
.service-section h2 {
  font-size: 1.8em;
  font-weight: 300;
  /* */
  color: #aed5ff; 
}

/* El grid para las tarjetas de íconos */
.grid-container {
  display: grid;
  /* Crea columnas automáticas que se ajustan al tamaño */
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 25px;
}

/* El grid para los círculos de servicio */
.grid-container-services {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 25px;
  justify-items: center; /* Centra los círculos */
  padding: 20px 0;
}
</style>