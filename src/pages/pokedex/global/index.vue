<script setup lang="ts">
// definePageMeta({
//   title: "パルデア図鑑",
// })
const { data: pokedex} = await useFetch('/api/pokedex', { query: { id: 1, area: 'paldea', type: 'index' } })
const pokedate = pokedex.value.pokedex
</script>
<template>
  <v-container>
    <!-- <v-list lines="one"> -->
      <NuxtLink
        v-for="list in pokedate" :key="list.id"
        :to="{path: `/Paldea/${list.no}`}" no-prefetch>
        <v-card>
          <v-card-title>No.{{ list.no }} {{ list.name }}</v-card-title>
        </v-card>
      </NuxtLink>
    <!-- </v-list> -->
  </v-container>
</template>