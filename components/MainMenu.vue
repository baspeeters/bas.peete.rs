<script lang="ts" setup></script>

<template>
  <div>
    <nav>
      <ul>
        <li>
          <a href="/">
            Home
          </a>
        </li>
        <li>
          <NuxtLink to="/about-me">
            About me
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
nav > ul {
  display: flex;
  gap: 1.25em;
  list-style-type: none;
  margin: 1em 0 2em 0;
  padding: 0;
}
</style>
