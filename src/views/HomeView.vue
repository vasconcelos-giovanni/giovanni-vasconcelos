<template>
  <MainLayout>
    <template #hero>
      <HeroArticle />
    </template>
    <article>
      <PortifolioSection />
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
  PortifolioSection,
  SkillsArticle,
} from '../components';
import { MainLayout } from '../layouts';
</script>
