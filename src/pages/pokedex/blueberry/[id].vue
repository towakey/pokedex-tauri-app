<script setup lang="ts">
definePageMeta({
  title: "ブルーベリー図鑑",
})
const route = useRoute()
const pokedexArea = "blueberry"
const pokedexName = "ブルーベリー図鑑"

const { id } = route.params;

</script>
<template>
  <DetailsView :pokedexArea="pokedexArea" :pokedexName="pokedexName" :id="id" />
</template>
<style>
</style>