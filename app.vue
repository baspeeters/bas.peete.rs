<script setup lang="ts">
import website from "~/lib/website";
import { useRoute } from "vue-router";

const route = useRoute();

useHead({
  titleTemplate: () => {
    return `${ website.name } - ${ route.meta.title ?? 'Home' }`;
  }
})
</script>

<template>
  <div>
    <NuxtLayout>
      <RouterView />
    </NuxtLayout>
  </div>
</template>