<script setup lang="ts">
const appConfig = useAppConfig()
defineProps(["description"])
</script>
<template>
  <v-list lines="two">
    <v-list-item
      v-for="(ver, index) in description" :key="index"
    >
      <v-list-item-title>{{ appConfig.verExchange[index] }}</v-list-item-title>
      <v-list-item-subtitle class="wrap-text">{{ ver }}</v-list-item-subtitle>
    </v-list-item>
  </v-list>
</template>
