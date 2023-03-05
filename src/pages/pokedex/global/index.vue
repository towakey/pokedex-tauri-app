<script setup lang="ts">
definePageMeta({
  title: "全国図鑑",
})
const pokedexArea = "global"
</script>
<template>
  <PokedexView :pokedex-area="pokedexArea" />
</template>