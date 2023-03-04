<script setup lang="ts">
  const props = defineProps(["pokedexArea", "pokedexName", "id"])

  const loadPokedex = await useFetch('/api/pokedex?id='+props.id+'&area='+props.pokedexArea+'&type=details', { refresh: true })
  const pokedate = loadPokedex.data.value.pokedex

  const metaTitle = ref(pokedate[1].name+" - "+props.pokedexName)

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
  <LinkView :pokedexArea="pokedexArea" :pokedexName="pokedexName" :pokedate="pokedate" />
  <NameView :no="pokedate[1].no" :name="pokedate[1].name" :classification="pokedate[1].classification" :height="pokedate[1].height" :weight="pokedate[1].weight" />
  <TypeView :type1="pokedate[1].type1" :type2="pokedate[1].type2" />
  <StatusChart :statusData="pokedate[1]" />
  <AbilityView :ability1="pokedate[1].ability1" :ability2="pokedate[1].ability2" :dream_ability="pokedate[1].dream_ability" />
  <SnsView :siteTitle="metaTitle" />
</template>