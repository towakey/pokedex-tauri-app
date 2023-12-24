<script setup lang="ts">
definePageMeta({
  title: "ブルーベリー図鑑",
})
const pokedexArea = "blueberry"
</script>
<template>
  <PokedexView :pokedex-area="pokedexArea" />
</template>