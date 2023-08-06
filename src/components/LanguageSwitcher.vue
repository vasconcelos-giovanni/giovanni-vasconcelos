<template>
  <div class="dropdown">
    <button
      class="btn btn-outline-secondary dropdown-toggle"
      type="button"
      id="languageDropdown"
      data-bs-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      {{ currentLanguage }}
    </button>
    <div
      class="dropdown-menu"
      aria-labelledby="languageDropdown"
    >
      <button
        v-for="(language, locale) in supportedLanguages"
        :key="locale"
        class="dropdown-item"
        @click="changeLanguage(locale)"
      >
        {{ language }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const i18n = useI18n();

const supportedLanguages = {
  en: 'English',
  ptBr: 'Português (Brasil)',
};

const currentLanguage = computed(() => supportedLanguages[i18n.locale.value]);

const changeLanguage = (newLocale) => {
  i18n.locale.value = newLocale;
};
</script>
