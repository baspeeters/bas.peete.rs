<script lang="ts" setup>
import me from "~/lib/me";

definePageMeta({
  title: "About me",
});

useNuxtApp().$structuredData(me);
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
