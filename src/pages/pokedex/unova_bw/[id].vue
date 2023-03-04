<script setup lang="ts">
definePageMeta({
  title: "イッシュ図鑑(Black White)",
})
const route = useRoute()
const pokedexArea = "unova_bw"
const pokedexName = "イッシュ図鑑"

const { id } = route.params;

</script>
<template>
  <DetailsView :pokedexArea="pokedexArea" :pokedexName="pokedexName" :id="id" />
</template>
<style>
</style>