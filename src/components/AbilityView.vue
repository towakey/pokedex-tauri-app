<script setup lang="ts">
  defineProps(["ability1", "ability2", "dream_ability"])
</script>
<template>
  <v-card>
    <v-card-title>とくせい1 : {{ ability1 }}</v-card-title>
  </v-card>
  <v-card>
    <v-card-title v-if='ability2 !== ""'>とくせい2 : {{ ability2 }}</v-card-title>
  </v-card>
  <v-card>
    <v-card-title v-if='dream_ability !== ""'>かくれとくせい : {{ dream_ability }}</v-card-title>
  </v-card>
</template>
