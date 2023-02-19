<script setup lang="ts">
const route = useRoute()
// definePageMeta({
//   title: route,
// })
const pokedexArea = "coast_kalos"
const pokedexName = "コーストカロス図鑑"
let prev, next, loadPokedex,pokedate;

const { id } = route.params;
loadPokedex = await useFetch('/api/pokedex?id='+id+'&area='+pokedexArea+'&type=details', { refresh: true })
pokedate = loadPokedex.data.value.pokedex

</script>
<template>
  <DetailsView :pokedexArea="pokedexArea" :pokedexName="pokedexName" :pokedate="pokedate" />
</template>
<style>
</style>