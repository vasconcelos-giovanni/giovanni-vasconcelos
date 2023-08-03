<template>
  <li class="nav-item">
    <a
      class="nav-link active"
      v-bind="$attrs"
    >
      <slot />
    </a>
  </li>
</template>
