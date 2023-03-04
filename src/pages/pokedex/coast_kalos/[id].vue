<script setup lang="ts">
definePageMeta({
  title: "コーストカロス図鑑",
})
const route = useRoute()
const pokedexArea = "coast_kalos"
const pokedexName = "コーストカロス図鑑"

const { id } = route.params;

</script>
<template>
  <DetailsView :pokedexArea="pokedexArea" :pokedexName="pokedexName" :id="id" />
</template>
<style>
</style>