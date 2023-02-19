<script setup lang="ts">
const route = useRoute()
// definePageMeta({
//   title: route,
// })
const pokedexArea = "paldea"
const pokedexName = "パルデア図鑑"
let loadPokedex,pokedate;

const { id } = route.params;
loadPokedex = await useFetch('/api/pokedex?id='+id+'&area='+pokedexArea+'&type=details', { refresh: true })
pokedate = loadPokedex.data.value.pokedex

</script>
<template>
  <DetailsView :pokedexArea="pokedexArea" :pokedexName="pokedexName" :pokedate="pokedate" />
</template>
<style>
</style>