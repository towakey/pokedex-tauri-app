<script setup lang="ts">
definePageMeta({
  title: "カントー図鑑",
})
const pokedexArea = "kanto"
</script>
<template>
  <PokedexView :pokedex-area="pokedexArea" />
</template>