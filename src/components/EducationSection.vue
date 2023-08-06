<template>
  <SectionTemplate>
    <h2>{{ $t('views.homeView.aboutUserArticle.educationSection.heading') }}</h2>

    <DegreesListItem
      :degree="$t('views.homeView.aboutUserArticle.educationSection.degreesList.li0.degree')"
      :institution="
        $t('views.homeView.aboutUserArticle.educationSection.degreesList.li0.institution')
      "
      :time="$t('views.homeView.aboutUserArticle.educationSection.degreesList.li0.time')"
    />
    <DegreesListItem
      :degree="$t('views.homeView.aboutUserArticle.educationSection.degreesList.li1.degree')"
      :institution="
        $t('views.homeView.aboutUserArticle.educationSection.degreesList.li1.institution')
      "
      :time="$t('views.homeView.aboutUserArticle.educationSection.degreesList.li1.time')"
    />
  </SectionTemplate>
</template>

<script setup>
import { DegreesListItem, SectionTemplate } from '.';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
