<script setup lang="ts">
definePageMeta({
  title: "パルデア図鑑",
})
const route = useRoute()
const pokedexArea = "paldea"
const pokedexName = "パルデア図鑑"

const { id } = route.params;

</script>
<template>
  <DetailsView :pokedexArea="pokedexArea" :pokedexName="pokedexName" :id="id" />
</template>
<style>
</style>