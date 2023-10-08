<script lang="ts" setup>
import { Occupation, Organization, Role } from "schema-dts";

const props = defineProps<{
  employer: Organization,
  role: Role,
}>();
</script>

<template>
  <div>
    <span>{{ role.startDate }}</span>
    <span> - </span>
    <span>{{ role.roleName }}</span>

    <span> @ </span>

    <a target="_blank" :href="employer.sameAs">
      {{ employer.name }}
    </a>
  </div>
</template>

<style scoped></style>
