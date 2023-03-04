<script setup lang="ts">
definePageMeta({
  title: "ヒスイ図鑑",
})
const route = useRoute()
const pokedexArea = "hisui"
const pokedexName = "ヒスイ図鑑"

const { id } = route.params;

</script>
<template>
  <DetailsView :pokedexArea="pokedexArea" :pokedexName="pokedexName" :id="id" />
</template>
<style>
</style>