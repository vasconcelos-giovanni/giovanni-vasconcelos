<template>
  <li class="nav-item">
    <a
      class="nav-link"
      v-bind="$attrs"
    >
      <slot />
    </a>
  </li>
</template>
