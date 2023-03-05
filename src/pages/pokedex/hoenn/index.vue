<script setup lang="ts">
definePageMeta({
  title: "ホウエン図鑑",
})
const pokedexArea = "hoenn"
</script>
<template>
  <PokedexView :pokedex-area="pokedexArea" />
</template>