<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div
    id="app"
    class="d-flex align-items-center justify-content-center"
  >
    <div
      id="wrapper"
      class="col-12 col-md-10 col-lg-8 col-xl-6 shadow-lg"
    >
      <RouterView />
    </div>
  </div>
</template>
