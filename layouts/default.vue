<script lang="ts" setup></script>

<template>
  <div>
    <span id="website-title">Bas Peeters</span>

    <MainMenu />

    <slot />
  </div>
</template>

<style scoped>
span#website-title {
  color: deepskyblue;
  font-size: 2em;
  font-style: italic;
  font-weight: bold;
}
</style>
