<script setup lang="ts">
definePageMeta({
  title: "アローラ図鑑(UltraSun UltraMoon)",
})
const pokedexArea = "alola_usum"
</script>
<template>
  <PokedexView :pokedex-area="pokedexArea" />
</template>