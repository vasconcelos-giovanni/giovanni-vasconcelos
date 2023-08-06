<template>
  <div class="carousel-item">
    <img
      :src="src"
      class="d-block w-100"
      :alt="alt"
      v-bind="$attrs"
    />
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  src: {
    type: String,
  },
  alt: {
    type: String,
  },
});
</script>
