<script setup lang="ts">
  const props = defineProps(["pokedexArea"])
  const { data: pokedex} = await useFetch('/api/pokedex', { query: { id: 1, area: props.pokedexArea, type: 'index' } })
  const pokedate = pokedex.value.pokedex
  const Id2Name = pokedexId2Name(props.pokedexArea)
  const metaTitle = ref(Id2Name)

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
  <v-container>
    <NuxtLink
      v-for="list in pokedate" :key="list.id"
      :to="{path: `/pokedex/${pokedexArea}/${list.no}`}"
      class="pokedexMenu"
    >
      <v-card v-if="list.no!=''">
        <v-card-title>No.{{ list.no }} {{ list.name }}</v-card-title>
      </v-card>
    </NuxtLink>
  </v-container>
</template>
<style>
.pokedexMenu{
  text-decoration: none;
}
</style>