<script setup lang="ts">
definePageMeta({
  title: "マウンテンカロス図鑑",
})
const pokedexArea = "mountain_kalos"
</script>
<template>
  <PokedexView :pokedex-area="pokedexArea" />
</template>