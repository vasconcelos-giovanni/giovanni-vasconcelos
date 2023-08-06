<template>
  <SectionTemplate>
    <h3>{{ $t('views.homeView.aboutUserArticle.skillsArticle.frontendSection.heading') }}</h3>
    <SkillsGroup>
      <SkillImage
        src="https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D"
        alt="Vue.js"
      />
      <SkillImage
        src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white"
        alt="Bootstrap"
      />
      <SkillImage
        src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
        alt="TailwindCSS"
      />
      <!-- Add more SkillImage components for each figure -->
    </SkillsGroup>
  </SectionTemplate>
</template>

<script setup>
import { SectionTemplate } from '.';
import { SkillsGroup } from '.';
import { SkillImage } from '.';
</script>
