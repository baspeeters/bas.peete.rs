<script lang="ts" setup>
import { Organization, Person, Role } from "schema-dts";
import person from "../lib/person";
import { PropType } from "vue";

const props = defineProps({
  person: Object as PropType<Person>,
});
</script>

<template>
  <div>
    <ul>
      <li>
        <EmployerRole
            :employer="person.worksFor"
            :role="person.hasOccupation"
        />
      </li>
      <li v-for="position in person.alumniOf">
        <EmployerRole
          :employer="position"
          :role="position.employee.hasOccupation"
        />
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
