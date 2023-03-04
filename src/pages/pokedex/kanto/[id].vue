<script setup lang="ts">
definePageMeta({
  title: "カントー図鑑",
})
const route = useRoute()
const pokedexArea = "kanto"
const pokedexName = "カントー図鑑"

const { id } = route.params;

</script>
<template>
  <DetailsView :pokedexArea="pokedexArea" :pokedexName="pokedexName" :id="id" />
</template>
<style>
</style>