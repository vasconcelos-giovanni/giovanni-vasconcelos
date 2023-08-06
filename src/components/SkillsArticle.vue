<template>
  <SectionTemplate>
    <h2>{{ $t('views.homeView.aboutUserArticle.skillsArticle.heading') }}</h2>
    <ProgrammingLanguagesSection />
    <BackendSection />
    <FrontendSection />
    <DatabaseSection />
    <OthersSection />
  </SectionTemplate>
</template>

<script setup>
import { SectionTemplate } from '.';
import { BackendSection } from '../components';
import { DatabaseSection } from '../components';
import { FrontendSection } from '../components';
import { ProgrammingLanguagesSection } from '../components';
import { OthersSection } from '../components';
</script>
