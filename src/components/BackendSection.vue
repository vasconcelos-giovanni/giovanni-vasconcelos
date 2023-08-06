<template>
  <SectionTemplate>
    <h3>{{ $t('views.homeView.aboutUserArticle.skillsArticle.backendSection.heading') }}</h3>
    <SkillsGroup>
      <SkillImage
        src="https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white"
        alt="Laravel"
      />
    </SkillsGroup>
  </SectionTemplate>
</template>

<script setup>
import { SectionTemplate } from '.';
import { SkillsGroup } from '.';
import { SkillImage } from '.';
</script>
