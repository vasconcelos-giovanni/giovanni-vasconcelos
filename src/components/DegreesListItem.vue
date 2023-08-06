<template>
  <p>
    <span class="fw-bold">{{ props.degree }}</span
    ><span class="fst-italic"> - {{ props.institution }}</span
    ><span> - {{ props.time }}</span>
  </p>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  degree: {
    type: String,
    required: true,
  },
  institution: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});
</script>
