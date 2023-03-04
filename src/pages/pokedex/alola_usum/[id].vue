<script setup lang="ts">
definePageMeta({
  title: "アローラ図鑑(UltraSun UltraMoon)",
})
const route = useRoute()
const pokedexArea = "alola_usum"
const pokedexName = "アローラ図鑑"

const { id } = route.params;

</script>
<template>
  <DetailsView :pokedexArea="pokedexArea" :pokedexName="pokedexName" :id="id" />
</template>
<style>
</style>