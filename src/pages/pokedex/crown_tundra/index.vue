<script setup lang="ts">
definePageMeta({
  title: "カンムリ雪原図鑑",
})
const pokedexArea = "crown_tundra"
</script>
<template>
  <PokedexView :pokedex-area="pokedexArea" />
</template>