<template>
  <a :href="link" class="info-card">
    <div class="icon">{{ icon }}</div>
    <div class="title">{{ title }}</div>
  </a>
</template>

<script>
export default {
  name: 'InfoCard',
  props: {
    icon: { type: String, default: '📄' },
    title: { type: String, default: '' },
    link: { type: String, default: '#' }
  }
}
</script>

<style scoped>
.info-card { display:flex; flex-direction:column; align-items:center; padding:8px 6px; text-decoration:none; color:inherit; border: none; border-radius:8px; background: transparent }
.info-card .icon { font-size:30px; margin-bottom:8px; color: inherit }
.info-card .title { font-size:14px; text-align:center; color: inherit }
</style>
