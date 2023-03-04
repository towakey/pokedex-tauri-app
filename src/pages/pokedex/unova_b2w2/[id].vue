<script setup lang="ts">
definePageMeta({
  title: "イッシュ図鑑(Black2 White2)",
})
const route = useRoute()
const pokedexArea = "unova_b2w2"
const pokedexName = "イッシュ図鑑"

const { id } = route.params;

</script>
<template>
  <DetailsView :pokedexArea="pokedexArea" :pokedexName="pokedexName" :id="id" />
</template>
<style>
</style>