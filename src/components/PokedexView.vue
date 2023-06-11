<script setup lang="ts">
  const props = defineProps(["pokedexArea"])
  // const { data: pokedex} = await useFetch('/api/pokedex', { query: { id: 1, area: props.pokedexArea, type: 'index' }, { refresh: true } })
  const { data: pokedex} = await useFetch('/api/pokedex?id=1&area='+props.pokedexArea+'&type=index', { refresh: true })
  const pokedate = pokedex.value.pokedex
  const Id2Name = pokedexId2Name(props.pokedexArea)
  const metaTitle = ref(Id2Name)

  const searchTerm = ref()

  const pokedateItems = computed(() => {
    if(searchTerm.value === ''){
      return pokedate
    }else{
      return pokedate.filter(item => item.name.match(searchTerm.value) || item.no.match(searchTerm.value))
    }
  })

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
    <v-row>
      <v-col>
        <v-text-field v-model="searchTerm" label="検索" />
        <!-- <ul
        v-for="item in pokedateItems" :key="item"
        >
          <li>
            {{ Object.values(item).includes(searchTerm) }}{{ item }}
          </li>
        </ul> -->
      </v-col>
    </v-row>
    <v-row>
      <v-col
      cols="12"
      sm="4"
      v-for="list in pokedateItems" :key="list"
      >
        <NuxtLink
          :to="{path: `/pokedex/${pokedexArea}/${list.no}`}"
          class="link-decoration"
        >
          <v-card
          v-if="list.no!='' && props.pokedexArea == 'global'"
          class="pokedex-card"
          elevation="0"
          color="#e3e1e1"
          >
            <v-card-title>
              <span class="pokemonName">No.{{ list.no }} {{ list.name }}</span>
            </v-card-title>
            <v-card-text>
              <span class="gameVersion">{{ pokedexId2GameVersion(list.no) }}</span>
            </v-card-text>
          </v-card>
          <v-card
          v-else
          class="pokedex-card"
          elevation="0"
          color="#e3e1e1"
          >
            <v-card-title>No.{{ list.no }} {{ list.name }}</v-card-title>
          </v-card>
        </NuxtLink>
      </v-col>
    </v-row>
    <SnsView :siteTitle="metaTitle" />
  </v-container>
</template>
<style>
.link-decoration{
  text-align: center;
  text-decoration: none;
}
.pokedex-card{
  /* width: 450px; */
  height: auto;
}
.gameVersion{
  /* float: right; */
  color: darkgrey;
  font-size: small;
}
</style>