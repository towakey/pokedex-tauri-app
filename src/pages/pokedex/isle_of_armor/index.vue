<script setup lang="ts">
definePageMeta({
  title: "ヨロイ島図鑑",
})
const pokedexArea = "isle_of_armor"
</script>
<template>
  <PokedexView :pokedex-area="pokedexArea" />
</template>