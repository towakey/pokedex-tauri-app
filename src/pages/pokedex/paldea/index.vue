<script setup lang="ts">
definePageMeta({
  title: "パルデア図鑑",
})
const pokedexArea = "paldea"
</script>
<template>
  <PokedexView :pokedex-area="pokedexArea" />
</template>