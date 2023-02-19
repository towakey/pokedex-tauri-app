<script setup lang="ts">
  defineProps(["no", "name", "classification", "height", "weight"])
</script>
<template>
  <v-card>
    <v-card-title><h1>No.{{ no }} {{ name }}</h1></v-card-title>
    <v-card-subtitle>{{ classification }}</v-card-subtitle>
    <v-card-text>
      <h2><!--<v-icon>mdi-human-male-height</v-icon>-->たかさ:{{ height }}m <!--<v-icon>mdi-scale</v-icon>-->おもさ:{{ weight }}m</h2>
    </v-card-text>
  </v-card>
</template>
