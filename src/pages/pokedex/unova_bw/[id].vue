<script setup lang="ts">
definePageMeta({
  title: "イッシュ図鑑(Black White)",
})
const route = useRoute()
const pokedexArea = "unova_bw"
const pokedexName = "イッシュ図鑑"

const { id } = route.params;
const loadPokedex = await useFetch('/api/pokedex?id='+id+'&area='+pokedexArea+'&type=details', { refresh: true })
const pokedate = loadPokedex.data.value.pokedex

const metaTitle = ref(pokedate[1].name+" - "+pokedexName)

useHead({
  title: metaTitle,
  meta: [
  {
      hid: 'og:title',
      name: 'og:title',
      content: metaTitle
    },
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: 'summary'
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: metaTitle
    }
  ]
})
</script>
<template>
  <DetailsView :pokedexArea="pokedexArea" :pokedexName="pokedexName" :pokedate="pokedate" :siteTitle="metaTitle" />
</template>
<style>
</style>