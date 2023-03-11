<template>
  <section class="container">
    <p>This is post page with id {{ route.params.id }}</p>
  </section>
</template>

<script setup>
const route = useRoute()
</script>