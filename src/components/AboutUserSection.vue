<template>
  <SectionTemplate>
    <h2>{{ $t('views.homeView.aboutUserSection.heading') }}</h2>
    <p>{{ $t('views.homeView.aboutUserSection.content[0]') }}</p>

    <!-- <p
      v-for="paragraph of $t('views.homeView.aboutUserSection.content')"
      :key="paragraph"
    >
      {{ paragraph }}
    </p> -->

    <!-- <p>{{ state.aboutUserSection.content[0] }}</p> -->
  </SectionTemplate>
</template>

<script setup>
import { SectionTemplate } from '.';
</script>
