<script setup lang="ts">
definePageMeta({
  title: "イッシュ図鑑(Black2 White2)",
})
const pokedexArea = "unova_b2w2"
</script>
<template>
  <PokedexView :pokedex-area="pokedexArea" />
</template>