<template>
  <article class="d-flex bg-light flex-wrap shadow-lg">
    <div :class="state.sectionSides">
      <img
        src="../assets/user-photo.jpg"
        class="user-photo rounded-circle"
        alt="Giovanni Vasconcelos"
      />
    </div>
    <div :class="state.sectionSides">
      <div>
        <h1 class="fs-1">Giovanni Vasconcelos</h1>
        <p class="fs-5 fw-light text-center">
          {{ $t('views.homeView.heroArticle.userDescription') + state.heroDescriptionSufix }}
        </p>
      </div>
    </div>
  </article>
</template>

<script setup>
import { reactive } from 'vue';

const state = reactive({
  sectionSides:
    'col-12 col-md-6 p-3 bg-transparent d-flex align-items-center justify-content-center',
  heroDescriptionSufix: 'PHP | JS | Laravel | Vue.js | Bootstrap | MySQL',
});
</script>

<style scoped>
.user-photo {
  height: 18rem;
}
</style>
