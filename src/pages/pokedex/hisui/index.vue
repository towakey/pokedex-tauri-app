<script setup lang="ts">
definePageMeta({
  title: "ヒスイ図鑑",
})
const pokedexArea = "hisui"
</script>
<template>
  <PokedexView :pokedex-area="pokedexArea" />
</template>