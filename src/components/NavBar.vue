<template>
  <nav
    class="position-fixed col-12 col-md-10 col-lg-8 col-xl-6 overlay navbar navbar-expand-lg bg-light"
  >
    <div class="container-fluid">
      <router-link
        :to="{ name: 'home' }"
        class="navbar-brand text-decoration-none"
      >
        <img
          src="../assets/logo.svg"
          alt=""
          style="height: 3rem"
        />
      </router-link>
      <LanguageSwitcher v-if="!isDesktop" />
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse"
        id="navbarNavDropdown"
      >
        <ul class="navbar-nav ms-auto">
          <router-link
            :to="{ name: 'home' }"
            class="text-decoration-none"
          >
            <NavLink>{{ $t('layouts.mainLayout.header.navbar.home') }}</NavLink>
          </router-link>
          <router-link
            :to="{ name: 'portifolio' }"
            class="text-decoration-none"
          >
            <NavLink>{{ $t('layouts.mainLayout.header.navbar.portifolio') }}</NavLink>
          </router-link>
          <router-link
            :to="{ name: 'aboutWebsite' }"
            class="text-decoration-none"
          >
            <NavLink>{{ $t('layouts.mainLayout.header.navbar.aboutWebsite') }}</NavLink>
          </router-link>
          <LanguageSwitcher v-if="isDesktop" />
        </ul>
      </div>
    </div>
  </nav>
  ""
</template>

<script setup>
import { NavLink } from '.';
import { LanguageSwitcher } from '.';
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';

const breakpoints = useBreakpoints(breakpointsTailwind);
const isDesktop = breakpoints.greater('lg');
</script>

<style scoped>
.overlay {
  z-index: 1000;
}
</style>
