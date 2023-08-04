<template>
  <MainLayout>
    <template #hero>
      <HeroArticle />
    </template>
    <AboutUserSection />
  </MainLayout>
</template>

<script setup>
import { MainLayout } from '../layouts';
import { HeroArticle } from '../components';
import { AboutUserSection } from '../components';
</script>
