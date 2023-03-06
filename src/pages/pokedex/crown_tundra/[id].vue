<script setup lang="ts">
definePageMeta({
  title: "カンムリ雪原図鑑",
})
const route = useRoute()
const pokedexArea = "crown_tundra"
const pokedexName = "カンムリ雪原図鑑"

const { id } = route.params;

</script>
<template>
  <DetailsView :pokedexArea="pokedexArea" :pokedexName="pokedexName" :id="id" />
</template>
<style>
</style>