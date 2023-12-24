<script setup lang="ts">
definePageMeta({
  title: "キタカミ図鑑",
})
const route = useRoute()
const pokedexArea = "kitakami"
const pokedexName = "キタカミ図鑑"

const { id } = route.params;

</script>
<template>
  <DetailsView :pokedexArea="pokedexArea" :pokedexName="pokedexName" :id="id" />
</template>
<style>
</style>