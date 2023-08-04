<template>
  <article class="d-flex bg-light flex-wrap shadow-lg">
    <div :class="state.sectionSides">
      <img
        src="../assets/user-photo.jpg"
        class="user-photo rounded-circle"
        alt="..."
      />
    </div>
    <div :class="state.sectionSides">
      <SectionTemplate>
        <h1 class="fs-1">Giovanni Vasconcelos</h1>
        <p class="fs-5 fw-light">
          {{ $t('views.homeView.heroArticle.userDescription') + state.heroDescriptionSufix }}
        </p>
      </SectionTemplate>
    </div>
  </article>
</template>

<script setup>
import { SectionTemplate } from './';
import { reactive } from 'vue';

const state = reactive({
  sectionSides:
    'col-12 col-md-6 p-3 bg-transparent d-flex align-items-center justify-content-center',
  heroDescriptionSufix: 'PHP | JS | Laravel | Vue.js | Bootstrap | Tailwind CSS | MySQL',
});
</script>

<style scoped>
.user-photo {
  height: 18rem;
}
</style>
