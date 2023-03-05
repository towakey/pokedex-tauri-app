<script setup lang="ts">
definePageMeta({
  title: "イッシュ図鑑(Black White)",
})
const pokedexArea = "unova_bw"
</script>
<template>
  <PokedexView :pokedex-area="pokedexArea" />
</template>