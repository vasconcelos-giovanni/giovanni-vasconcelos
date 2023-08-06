<template>
  <SectionTemplate>
    <h3>{{ $t('views.homeView.aboutUserArticle.skillsArticle.databaseSection.heading') }}</h3>
    <SkillsGroup>
      <SkillImage
        src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"
        alt="MySQL"
      />
    </SkillsGroup>
  </SectionTemplate>
</template>

<script setup>
import { SectionTemplate } from '.';
import { SkillsGroup } from '.';
import { SkillImage } from '.';
</script>
