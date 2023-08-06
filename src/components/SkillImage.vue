<template>
  <figure>
    <img
      :src="props.src"
      :alt="props.alt"
    />
    <figcaption hidden>{{ props.alt }}</figcaption>
  </figure>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  alt: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },
});
</script>
