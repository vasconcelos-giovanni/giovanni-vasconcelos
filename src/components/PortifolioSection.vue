<template>
  <SectionTemplate>
    <h2>{{ $t('views.homeView.aboutUserArticle.portifolioSection.heading') }}</h2>

    <div
      id="carouselExampleDark"
      class="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-inner">
          <PortifolioItemSlide
            src="https://github.com/vasconcelos-giovanni/gio-chirps/raw/main/readme/img/screenshots/1.png"
            :alt="$t('views.homeView.aboutUserArticle.portifolioSection.slides.slide0.alt')"
            class="active"
          />
          <PortifolioItemSlide
            src="https://github.com/vasconcelos-giovanni/divination-crystal-ball/raw/main/src/img/screenshot.png"
            :alt="$t('views.homeView.aboutUserArticle.portifolioSection.slides.slide0.alt')"
          />
          <PortifolioItemSlide
            src="https://github.com/vasconcelos-giovanni/books-recorder/raw/main/readme/img/screenshots/1.png"
            :alt="$t('views.homeView.aboutUserArticle.portifolioSection.slides.slide0.alt')"
          />
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span
          class="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span
          class="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <p>Go to <a href="#">Portifolio Page</a></p>
  </SectionTemplate>
</template>

<script setup>
import { SectionTemplate, PortifolioItemSlide } from '.';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
