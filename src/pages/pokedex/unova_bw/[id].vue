<script setup lang="ts">
definePageMeta({
  title: "イッシュ図鑑(Black White)",
})
const route = useRoute()
const pokedexArea = "unova_bw"
const pokedexName = "イッシュ図鑑"
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