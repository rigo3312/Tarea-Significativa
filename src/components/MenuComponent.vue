<template>
  <header class="navbar">
    <div class="navbar-top">
      <div class="navbar-left">
        <div class="instituciones">
          <span class="icon">🏛️</span>
          <span class="label">INSTITUCIONES</span>
        </div>
        <div class="links">
          <router-link to="/transparencia">Portal de Transparencia</router-link>
          <router-link to="/casos-antisoborno">Gestión de casos antisoborno</router-link>
        </div>
      </div>

      <div class="navbar-center">
        <img src="https://www.mined.gob.sv/wp-content/themes/instituciones/img/Logo_Gobierno.svg" alt="Gobierno de El Salvador" />
        <p class="gobierno">GOBIERNO DE EL SALVADOR</p>
        <p class="ministerio">MINISTERIO DE EDUCACIÓN</p>
      </div>

      <div class="navbar-right">
        <div class="search-container">
          <input type="text" placeholder="Buscar aquí..." />
          <span class="search-icon">🔍</span>
        </div>

        <button class="btn-denuncias">Avisos y Denuncias</button>

        <div class="lang">
          <button>EN</button>
          <span>|</span>
          <button class="active">ES</button>
        </div>
      </div>
    </div>

    <nav class="navbar-menu">
      <ul>
        <li><router-link to="/">Inicio</router-link></li>
        <li><router-link to="/servicios">Servicios</router-link></li>
        <li class="dropdown" @mouseenter="openDropdown('trabajo')" @mouseleave="closeDropdown('trabajo')">
          <p class="dropdown-toggle">
            Nuestro Trabajo
            <span class="arrow">▼</span>
          </p>
          <ul class="dropdown-menu" :class="{ show: activeDropdown === 'trabajo' }">
            <li><router-link to="/nuestro-trabajo/logros">Programas</router-link></li>
          </ul>
        </li>
        <li class="dropdown" @mouseenter="openDropdown('institucion')" @mouseleave="closeDropdown('institucion')">
          <p class="dropdown-toggle">
            Institución
            <span class="arrow">▼</span>
          </p>
          <ul class="dropdown-menu" :class="{ show: activeDropdown === 'institucion' }">
            <li><router-link to="/institucion/estructura">Educacion Superior</router-link></li>
          </ul>
        </li>
        <li class="dropdown" @mouseenter="openDropdown('contacto')" @mouseleave="closeDropdown('contacto')">
          <p class="dropdown-toggle">
            Contáctenos
            <span class="arrow">▼</span>
          </p>
          <ul class="dropdown-menu" :class="{ show: activeDropdown === 'contacto' }">
            <li><router-link to="/contacto/formulario">Directorio y Horario de Atencion</router-link></li>
          </ul>
        </li>
        <li class="dropdown" @mouseenter="openDropdown('organismos')" @mouseleave="closeDropdown('organismos')">
          <p class="dropdown-toggle">
            Organismos Internacionales
            <span class="arrow">▼</span>
          </p>
          <ul class="dropdown-menu" :class="{ show: activeDropdown === 'organismos' }">
            <li><router-link to="/organismos/cooperacion">Banco Mundial</router-link></li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
  <router-view/>
</template>

<script setup>
import { ref } from 'vue';

const activeDropdown = ref(null);

const openDropdown = (dropdown) => {
  activeDropdown.value = dropdown;
};

const closeDropdown = (dropdown) => {
  if (activeDropdown.value === dropdown) {
    activeDropdown.value = null;
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.navbar {
  font-family: "Segoe UI", Roboto, sans-serif;
  color: #ffffff;
  background-color: #2b3342;
}

.navbar-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 40px;
  border-bottom: 1px solid #3d4555;
  flex-wrap: wrap;
}

.navbar-left {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.instituciones {
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  font-size: 14px;
  color: #e1e1e1;
}

.links a,
.links router-link {
  display: block;
  font-size: 12px;
  color: #bfc6d1;
  text-decoration: none;
  transition: color 0.3s;
}

.links a:hover,
.links router-link:hover {
  color: #ffffff;
}

.navbar-center {
  text-align: center;
}

.navbar-center img {
  height: 40px;
  margin-bottom: 4px;
}

.gobierno {
  font-size: 11px;
  color: #a8b0be;
  letter-spacing: 1px;
}

.ministerio {
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.5px;
}

.navbar-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.search-container {
  position: relative;
}

.search-container input {
  background-color: #3a4354;
  border: 1px solid #50596b;
  border-radius: 6px;
  padding: 6px 28px 6px 10px;
  color: #e8e8e8;
  font-size: 13px;
}

.search-container input::placeholder {
  color: #b0b7c4;
}

.search-icon {
  position: absolute;
  right: 8px;
  top: 5px;
  font-size: 14px;
  color: #b0b7c4;
}

.btn-denuncias {
  background-color: #0b6dff;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  padding: 7px 14px;
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-denuncias:hover {
  background-color: #095dd8;
}

.lang {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #b0b7c4;
}

.lang button {
  background: none;
  border: none;
  color: #b0b7c4;
  cursor: pointer;
  font-weight: 500;
  transition: color 0.3s;
}

.lang button:hover,
.lang button.active {
  color: #ffffff;
}

.navbar-menu {
  background-color: #1f2633;
  padding: 10px 0;
}

.navbar-menu ul {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
  list-style: none;
}

.navbar-menu > ul > li {
  position: relative;
}

.navbar-menu a,
.navbar-menu router-link {
  color: #e1e5ec;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 600;
  transition: color 0.3s;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.navbar-menu a:hover,
.navbar-menu router-link:hover {
  color: #00a6ff;
}

.router-link-active {
  color: #00a6ff !important;
}

.dropdown {
  position: relative;
}

.dropdown-toggle {
  cursor: pointer;
}

.dropdown .arrow {
  font-size: 9px;
  transition: transform 0.3s ease;
}

.dropdown:hover .arrow {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #2b3342;
  border: 1px solid #3d4555;
  border-radius: 6px;
  padding: 8px 0;
  min-width: 220px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  margin-top: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  z-index: 1000;
}

.dropdown-menu.show {
  opacity: 1;
  visibility: visible;
}

.dropdown-menu li {
  list-style: none;
}

.dropdown-menu a {
  display: block;
  padding: 10px 20px;
  color: #e1e5ec;
  text-decoration: none;
  font-size: 13px;
  font-weight: 500;
  text-transform: none;
  transition: background-color 0.2s, color 0.2s;
}

.dropdown-menu a:hover {
  background-color: #3a4354;
  color: #00a6ff;
}

/* Flecha del dropdown (opcional) */
.dropdown-menu::before {
  content: '';
  position: absolute;
  top: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid #3d4555;
}

@media (max-width: 900px) {
  .navbar-top {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }

  .navbar-left {
    align-items: center;
  }

  .navbar-right {
    flex-wrap: wrap;
    justify-content: center;
  }

  .navbar-menu ul {
    gap: 16px;
    flex-direction: column;
    align-items: center;
  }

  .dropdown-menu {
    position: static;
    transform: none;
    margin-top: 8px;
    box-shadow: none;
  }

  .dropdown-menu::before {
    display: none;
  }
}
</style>