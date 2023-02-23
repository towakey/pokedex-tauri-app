<script setup lang="ts">
definePageMeta({
  title: "ヒスイ図鑑",
})
const route = useRoute()
const pokedexArea = "hisui"
const pokedexName = "ヒスイ図鑑"
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