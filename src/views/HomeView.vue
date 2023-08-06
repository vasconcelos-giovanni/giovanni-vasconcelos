<template>
  <MainLayout>
    <template #hero>
      <HeroArticle />
    </template>
    <article>
      <AboutUserSection />
      <SkillsArticle />
      <LanguagesSection />
      <EducationSection />
    </article>
  </MainLayout>
</template>

<script setup>
import {
  AboutUserSection,
  EducationSection,
  HeroArticle,
  LanguagesSection,
  SkillsArticle,
} from '../components';
import { MainLayout } from '../layouts';
</script>
