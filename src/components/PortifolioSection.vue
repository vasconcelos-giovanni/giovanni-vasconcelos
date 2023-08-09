<template>
  <h2>{{ $t('views.homeView.aboutUserArticle.portifolioSection.heading') }}</h2>
  <PortifolioArticle />
  <router-link
    :to="{ name: 'portifolio' }"
    class="text-decoration-none"
  >
    Go to Portifolio Page</router-link
  >
</template>

<script setup>
import { PortifolioArticle } from '.';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
