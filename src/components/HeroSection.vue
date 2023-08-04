<template>
  <section class="d-flex bg-light shadow-lg">
    <div :class="state.sectionSides">
      <img
        src="../assets/user-photo.jpg"
        class="user-photo rounded-circle"
        alt="..."
      />
    </div>
    <div :class="state.sectionSides">
      <div>
        <p class="fs-1 fw-light">Giovanni Vasconcelos</p>
        <p class="fs-5 fw-light">
          Full-Stack Web Developer PHP | JS | Laravel | Vue.js | Bootstrap | Tailwind CSS | MySQL
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue';

const state = reactive({
  sectionSides: 'col-md-6 p-3 bg-transparent d-flex align-items-center justify-content-center',
});
</script>

<style scoped>
.user-photo {
  height: 18rem;
}
</style>
