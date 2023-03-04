<script setup lang="ts">
definePageMeta({
  title: "セントラルカロス図鑑",
})
const route = useRoute()
const pokedexArea = "central_kalos"
const pokedexName = "セントラルカロス図鑑"

const { id } = route.params;

</script>
<template>
  <DetailsView :pokedexArea="pokedexArea" :pokedexName="pokedexName" :id="id" />
</template>
<style>
</style>