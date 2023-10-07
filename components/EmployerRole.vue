<script lang="ts" setup>
import { PropType } from "vue/dist/vue";
import { Occupation, Organization, Person, Role } from "schema-dts";

const props = defineProps<{
  employer: Organization,
  role: Role | Occupation,
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
