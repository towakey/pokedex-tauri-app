<script setup lang="ts">
definePageMeta({
  title: "コーストカロス図鑑",
})
const pokedexArea = "coast_kalos"
</script>
<template>
  <PokedexView :pokedex-area="pokedexArea" />
</template>