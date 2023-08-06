<template>
  <SectionTemplate>
    <h2>{{ $t('views.homeView.aboutUserArticle.languagesSection.heading') }}</h2>
    <ul
      class="list-group list-group-flush list-group-horizontal-md d-flex justify-content-center align-items-center"
    >
      <li :class="state.listItemStyle">
        🇬🇧
        {{ $t('views.homeView.aboutUserArticle.languagesSection.languagesList.enLi0') }}
      </li>
      <li :class="state.listItemStyle">
        🇪🇸
        {{ $t('views.homeView.aboutUserArticle.languagesSection.languagesList.esLi1') }}
      </li>
      <li :class="state.listItemStyle">
        🇧🇷
        {{ $t('views.homeView.aboutUserArticle.languagesSection.languagesList.ptLi2') }}
      </li>
    </ul>
    <br />
  </SectionTemplate>
</template>

<script setup>
import { SectionTemplate } from '.';
import { reactive } from 'vue';

const state = reactive({
  listItemStyle: 'list-group-item',
});
</script>
