<template>
  <header>
    <NavBar />
  </header>

  <main class="main-content">
    <slot name="hero" />
    <slot class="p-4" />
  </main>

  <footer></footer>
</template>

<script setup>
import { NavBar } from '../components';
</script>

<style scoped>
.main-content {
  margin-top: 5rem;
}
</style>
