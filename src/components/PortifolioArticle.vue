<template>
  <article>
    <PortifolioSlideShow>
      <PortifolioItemSlide
        src="https://github.com/vasconcelos-giovanni/gio-chirps/raw/main/readme/img/screenshots/1.png"
        :alt="$t('views.homeView.aboutUserArticle.portifolioSection.slides.slide0.alt')"
        class="active" />
      <PortifolioItemSlide
        src="https://github.com/vasconcelos-giovanni/divination-crystal-ball/raw/main/src/img/screenshot.png"
        :alt="$t('views.homeView.aboutUserArticle.portifolioSection.slides.slide0.alt')" />
      <PortifolioItemSlide
        src="https://github.com/vasconcelos-giovanni/books-recorder/raw/main/readme/img/screenshots/1.png"
        :alt="$t('views.homeView.aboutUserArticle.portifolioSection.slides.slide0.alt')"
    /></PortifolioSlideShow>
  </article>
</template>

<script setup>
import { PortifolioItemSlide, PortifolioSlideShow } from '.';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
