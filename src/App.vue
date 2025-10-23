<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    | <router-link to="/orgint">Organización Institucional</router-link>
    | <router-link to="/servicios">Servicios</router-link>
    | <router-link to="/programas">Programas</router-link>
    | <router-link to="/EducacionSuperiorView">Institución</router-link>
    | <router-link to="/ContactenosView">Contactenos</router-link>


  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
