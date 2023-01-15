<script setup lang="ts">
definePageMeta({
  title: "パルデア図鑑",
})
const { data: pokedex} = await useFetch('/api/pokedex', { query: { id: 1, area: 'paldea', type: 'index' } })
const pokedate = pokedex.value.pokedex
// const lists = ref<{id: number, name: string}[]>([]);
// lists.value = [{
//   id: 1,
//   name: "ニャオハ",
// },{
//   id: 2,
//   name: "ニャローテ",
// },{
//   id: 3,
//   name: "マスカーニャ",
// }]
</script>
<template>
  <v-container>
    <!-- <h1>details.vue[{{ pokedate }}]</h1> -->
    <v-list lines="one">
      <!-- <NuxtLink
        v-for="list in pokedate" :key="list.id"
        :to="{path: `/Paldea/${list.name}`, query: { id:list.no}}"> -->
      <NuxtLink
        v-for="list in pokedate" :key="list.id"
        :to="{path: `/Paldea/${list.no}`}">
        <v-list-item>No.{{ list.no }} {{ list.name }}</v-list-item>
      </NuxtLink>
    </v-list>
  </v-container>
</template>