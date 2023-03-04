<script setup lang="ts">
definePageMeta({
  title: "ジョウト図鑑",
})
const route = useRoute()
const pokedexArea = "johto"
const pokedexName = "ジョウト図鑑"

const { id } = route.params;

</script>
<template>
  <DetailsView :pokedexArea="pokedexArea" :pokedexName="pokedexName" :id="id" />
</template>
<style>
</style>