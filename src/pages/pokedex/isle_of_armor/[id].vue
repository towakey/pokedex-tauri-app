<script setup lang="ts">
definePageMeta({
  title: "ヨロイ島図鑑",
})
const route = useRoute()
const pokedexArea = "isle_of_armor"
const pokedexName = "ヨロイ島図鑑"

const { id } = route.params;

</script>
<template>
  <DetailsView :pokedexArea="pokedexArea" :pokedexName="pokedexName" :id="id" />
</template>
<style>
</style>