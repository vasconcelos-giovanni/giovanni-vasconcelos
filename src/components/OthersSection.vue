<template>
  <SectionTemplate>
    <h3>{{ $t('views.homeView.aboutUserArticle.skillsArticle.othersSection.heading') }}</h3>
    <SkillsGroup>
      <SkillImage
        src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"
        alt="Git"
      />
      <SkillImage
        src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black"
        alt="Linux"
      />
    </SkillsGroup>
  </SectionTemplate>
</template>

<script setup>
import { SectionTemplate } from '.';
import SkillImage from './SkillImage.vue';
import SkillsGroup from './SkillsGroup.vue';
</script>
