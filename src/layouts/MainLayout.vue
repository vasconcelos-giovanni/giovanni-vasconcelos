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
