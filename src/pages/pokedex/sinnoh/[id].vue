<script setup lang="ts">
definePageMeta({
  title: "シンオウ図鑑",
})
const route = useRoute()
const pokedexArea = "sinnoh"
const pokedexName = "シンオウ図鑑"

const { id } = route.params;

</script>
<template>
  <DetailsView :pokedexArea="pokedexArea" :pokedexName="pokedexName" :id="id" />
</template>
<style>
</style>