<template>
  <nav class="position-fixed col-12 col-md-10 col-lg-8 col-xl-6 navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a
        class="navbar-brand"
        href="#"
      >
        <img
          src="../assets/logo.svg"
          alt=""
          style="height: 3rem"
        />
      </a>
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
          <NavLink href="#">{{ $t('layouts.mainLayout.header.navbar.portifolio') }}</NavLink>
          <NavLink href="#">{{ $t('layouts.mainLayout.header.navbar.aboutWebsite') }}</NavLink>
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
const isDesktop = breakpoints.greater('md');
</script>
