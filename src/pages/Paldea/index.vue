<script setup lang="ts">
// definePageMeta({
//   title: "パルデア図鑑",
// })
const { data: pokedex} = await useFetch('/api/pokedex', { query: { id: 1, area: 'paldea', type: 'index' } })
const pokedate = pokedex.value.pokedex
</script>
<template>
  <v-container>
    <v-list lines="one">
      <NuxtLink
        v-for="list in pokedate" :key="list.id"
        :to="{path: `/Paldea/${list.no}`}">
        <v-list-item>No.{{ list.no }} {{ list.name }}</v-list-item>
      </NuxtLink>
    </v-list>
  </v-container>
</template>