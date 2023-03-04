<script setup lang="ts">
definePageMeta({
  title: "ホウエン図鑑",
})
const route = useRoute()
const pokedexArea = "hoenn"
const pokedexName = "ホウエン図鑑"

const { id } = route.params;

</script>
<template>
  <DetailsView :pokedexArea="pokedexArea" :pokedexName="pokedexName" :id="id" />
</template>
<style>
</style>