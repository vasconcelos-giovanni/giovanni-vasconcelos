<template>
  <SectionTemplate>
    <h3>
      {{ $t('views.homeView.aboutUserArticle.skillsArticle.programmingLanguagesSection.heading') }}
    </h3>
    <SkillsGroup>
      <SkillImage
        src="https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white"
        alt="PHP"
      />
      <SkillImage
        src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
        alt="JavaScript"
      />
      <!-- Add more SkillImage components for each programming language -->
    </SkillsGroup>
  </SectionTemplate>
</template>

<script setup>
import { SectionTemplate, SkillImage, SkillsGroup } from '../components';
</script>
