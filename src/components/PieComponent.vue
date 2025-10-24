<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-left">
        <h3>Ministerio de Educación, Ciencia y Tecnología</h3>
        <p>
          Alameda Juan Pablo II y Calle Guadalupe, Edificios A, San Salvador,
          El Salvador, Centroamérica.
        </p>

        <div class="contact-group">
          <p><span class="icon">📍</span> Conmutador Edificios A1 y A2:<br /> (+503) 2592-2000, 2592-2122</p>
          <p><span class="icon">📍</span> Conmutador Edificios A3 y A4:<br /> 2592-3117</p>
          <p><span class="icon">📞</span> Unidad de Acceso a la Información Pública:<br /> 2281-0274, 2222-2043, 2222-2008</p>
          <p><span class="icon">⚠️</span> Quejas, avisos o denuncias:<br /> 2592-2009</p>
          <p><span class="icon">✉️</span> educacion@mined.gob.sv</p>
        </div>
      </div>

      <div class="footer-center">
        <img src="https://www.mined.gob.sv/wp-content/themes/instituciones/img/Logo_Gobierno.svg" alt="Gobierno de El Salvador" />
        <p class="gov-text">GOBIERNO DE EL SALVADOR</p>

        <div class="schedule">
          <h4>Horario de atención</h4>
          <p>Lunes a Viernes de 7:30 a.m. a 3:30 p.m.</p>
        </div>

        <div class="social">
          <p>Únete a nuestra comunidad</p>
          <div class="social-icons">
            <a href="#" title="Facebook">
                <img src="https://www.mined.gob.sv/wp-content/themes/instituciones/img/facebook.svg" data-appear-anim-style="fadeInUp" alt="" style="visibility: visible; width: 2rem;" class="img-fluid img-follow-icon-style float-lg-none pad-icons-head pulse-hvr animated">
            </a>
            <a href="#" title="Twitter">
                <img src="https://www.mined.gob.sv/wp-content/themes/instituciones/img/twitter.svg" data-appear-anim-style="fadeInUp" alt="" style="visibility: visible; width: 2rem;" class="img-fluid img-follow-icon-style float-lg-none pad-icons-head pulse-hvr animated">
            </a>
            <a href="#" title="YouTube">
                <img src="https://www.mined.gob.sv/wp-content/themes/instituciones/img/youtube.svg" data-appear-anim-style="fadeInUp" alt="" style="visibility: visible; width: 2rem;" class="img-fluid img-follow-icon-style float-lg-none pad-icons-head pulse-hvr animated">
            </a>
          </div>
        </div>
      </div>

      <div class="footer-right">
        <ul>
          <li><a href="#">Mapa del Sitio</a></li>
          <li><a href="#">Política Web</a></li>
          <li><a href="#">Preguntas Frecuentes</a></li>
          <li><a href="#">Carta de Derechos</a></li>
          <li><a href="#">Avisos y Denuncias</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2025 Ministerio de Educación de El Salvador. Todos los derechos reservados.</p>
    </div>

    <button class="scroll-top" @click="scrollToTop" title="Volver arriba">↑</button>
  </footer>
</template>

<script setup>
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.footer {
  background: linear-gradient(180deg, #2f3748 0%, #252c3a 100%);
  color: #d8dde5;
  font-family: "Segoe UI", Roboto, sans-serif;
  padding-top: 40px;
  position: relative;
  overflow: hidden;
}

.footer-container {
  display: grid;
  grid-template-columns: 1.2fr 1fr 0.8fr;
  gap: 50px;
  padding: 0 60px 40px;
}

.footer h3 {
  color: #ffffff;
  font-size: 16px;
  margin-bottom: 8px;
}

.footer-left p,
.footer-right a {
  font-size: 14px;
  line-height: 1.6;
  color: #cfd4de;
}

.footer-left p {
  margin-bottom: 8px;
}

.contact-group {
  margin-top: 12px;
}

.icon {
  margin-right: 5px;
}

.footer-center {
  text-align: center;
}

.footer-center img {
  height: 60px;
  margin-bottom: 8px;
}

.gov-text {
  font-size: 13px;
  color: #c8ced9;
  letter-spacing: 0.5px;
  margin-bottom: 18px;
}

.schedule h4 {
  color: #ffffff;
  font-size: 14px;
  margin-bottom: 4px;
}

.schedule p {
  font-size: 13px;
  color: #cfd4de;
}

.social {
  margin-top: 20px;
}

.social p {
  font-size: 13px;
  margin-bottom: 10px;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.social-icons a {
  background-color: #3a4354;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e2e6ed;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.3s;
}

.social-icons a:hover {
  background-color: #0b6dff;
  transform: translateY(-2px);
}

.footer-right ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-right a {
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.footer-right a:hover {
  color: #00aaff;
}

.footer-bottom {
  border-top: 1px solid #3c4454;
  text-align: center;
  padding: 12px;
  font-size: 13px;
  color: #aeb4bf;
  background-color: #252c3a;
}

.scroll-top {
  position: fixed;
  bottom: 25px;
  right: 25px;
  background-color: #0b6dff;
  color: #ffffff;
  border: none;
  border-radius: 50%;
  width: 42px;
  height: 42px;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.scroll-top:hover {
  background-color: #095ed8;
  transform: translateY(-4px);
}

@media (max-width: 900px) {
  .footer-container {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 30px;
    padding: 0 30px 40px;
  }

  .footer-left, .footer-right {
    align-items: center;
  }

  .social-icons {
    justify-content: center;
  }
}
</style>
