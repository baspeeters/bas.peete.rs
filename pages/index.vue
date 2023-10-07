<script lang="ts" setup>
import me from "../lib/person";
</script>

<template>
  <div>
    <h2>Work history</h2>
    <WorkHistory :person="me"/>

    <h2>Socials</h2>
    <Socials />
  </div>
</template>

<style>
html {
  background-color: #222;
}

body {
  margin:5em auto;
  padding:1em;
  max-width:960px;
  background-color:transparent;
  font-family: monospace;
  font-size: 1.25em;
  line-height: 1em;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #0099ff;
}

p,
span {
  color: darkgray;
}

a {
  color: #00ffff;
  text-decoration: underline;
}

a:hover,
a:active {
  text-decoration: none;
}

a[target='_blank']::after {
  content: '\231D';
}

ul {
  color: #0099ff;
}
</style>
