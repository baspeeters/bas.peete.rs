<script lang="ts" setup>
import me from "~/lib/me";
import { Article } from "schema-dts";

definePageMeta({
  title: "About me",
});

useNuxtApp().$structuredData(<Article>{
  "@context": "https://schema.org/",
  "@type": "Article",
  headline: "About me",
  image: "https://1.gravatar.com/avatar/9d4f09a9a169d0d6dddd4d0980cc94be?size=256",  author: me,
  about: me,
});
</script>

<template>
  <div>
    <h1>About me</h1>

    <h2>Work history</h2>
    <WorkHistory :person="me"/>

    <h2>Socials</h2>
    <Socials/>
  </div>
</template>

<style scoped></style>
