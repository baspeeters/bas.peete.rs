<script lang="ts" setup>
import website from "~/lib/website";

useNuxtApp().$structuredData(website);
</script>

<template>
  <div>
    <p>Welcome.</p>
  </div>
</template>