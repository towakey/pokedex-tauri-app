<script setup lang="ts">
definePageMeta({
  title: "ガラル図鑑",
})
const pokedexArea = "galar"
</script>
<template>
  <PokedexView :pokedex-area="pokedexArea" />
</template>