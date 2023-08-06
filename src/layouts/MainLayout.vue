<template>
  <header>
    <NavBar />
  </header>

  <main class="main-content">
    <slot name="hero" />

    <div class="p-4">
      <slot />
    </div>
  </main>

  <footer class="p-4 border-top border-secondary border-opacity-50">
    <MainFooter />
  </footer>
</template>

<script setup>
import { MainFooter, NavBar } from '../components';
</script>

<style scoped>
.main-content {
  margin-top: 5rem;
}
</style>
