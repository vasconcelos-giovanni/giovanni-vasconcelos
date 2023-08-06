<template>
  <h2>{{ $t('views.homeView.aboutUserArticle.portifolioSection.heading') }}</h2>
  <PortifolioArticle />
  <p>Go to <a href="#">Portifolio Page</a></p>
</template>

<script setup>
import { PortifolioArticle } from '.';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
