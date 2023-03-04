<script setup lang="ts">
definePageMeta({
  title: "マウンテンカロス図鑑",
})
const route = useRoute()
const pokedexArea = "mountain_kalos"
const pokedexName = "マウンテンカロス図鑑"

const { id } = route.params;

</script>
<template>
  <DetailsView :pokedexArea="pokedexArea" :pokedexName="pokedexName" :id="id" />
</template>
<style>
</style>