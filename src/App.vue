<template>
  <MenuComponent></MenuComponent>
  <PieComponent></PieComponent>
</template>

<script>
import MenuComponent from './components/MenuComponent.vue';
import PieComponent from './components/PieComponent.vue';

export default{
  name: 'App',
  components: {
    MenuComponent,
    PieComponent
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
