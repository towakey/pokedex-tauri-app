<script setup lang="ts">
definePageMeta({
  title: "セントラルカロス図鑑",
})
const route = useRoute()
const pokedexArea = "central_kalos"
const pokedexName = "セントラルカロス図鑑"
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