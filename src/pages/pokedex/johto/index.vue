<script setup lang="ts">
definePageMeta({
  title: "ジョウト図鑑",
})
const pokedexArea = "johto"
</script>
<template>
  <PokedexView :pokedex-area="pokedexArea" />
</template>