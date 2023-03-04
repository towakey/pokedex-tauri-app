<script setup lang="ts">
definePageMeta({
  title: "ガラル図鑑",
})
const route = useRoute()
const pokedexArea = "galar"
const pokedexName = "ガラル図鑑"

const { id } = route.params;

</script>
<template>
  <DetailsView :pokedexArea="pokedexArea" :pokedexName="pokedexName" :id="id" />
</template>
<style>
</style>