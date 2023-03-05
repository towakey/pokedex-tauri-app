<script setup lang="ts">
definePageMeta({
  title: "アローラ図鑑(Sun Moon)",
})
const pokedexArea = "alola_sm"
</script>
<template>
  <PokedexView :pokedex-area="pokedexArea" />
</template>