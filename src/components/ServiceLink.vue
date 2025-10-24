<template>
  <a :href="link" class="service-link">
    <img :src="imageUrl" alt="service" />
  </a>
</template>

<script>
export default {
  name: 'ServiceLink',
  props: {
    imageUrl: { type: String, default: '' },
    link: { type: String, default: '#' }
  }
}
</script>

<style scoped>
.service-link img { width:140px; height:140px; object-fit:cover; border-radius:50%; border:2px solid rgba(255,255,255,0.06); box-shadow:0 2px 6px rgba(0,0,0,0.2) }
</style>
