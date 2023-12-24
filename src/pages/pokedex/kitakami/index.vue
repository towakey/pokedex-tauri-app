<script setup lang="ts">
definePageMeta({
  title: "キタカミ図鑑",
})
const pokedexArea = "kitakami"
</script>
<template>
  <PokedexView :pokedex-area="pokedexArea" />
</template>