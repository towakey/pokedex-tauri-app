<script setup lang="ts">
definePageMeta({
  title: "シンオウ図鑑",
})
const pokedexArea = "sinnoh"
</script>
<template>
  <PokedexView :pokedex-area="pokedexArea" />
</template>