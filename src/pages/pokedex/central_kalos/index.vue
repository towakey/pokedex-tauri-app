<script setup lang="ts">
definePageMeta({
  title: "セントラルカロス図鑑",
})
const pokedexArea = "central_kalos"
</script>
<template>
  <PokedexView :pokedex-area="pokedexArea" />
</template>