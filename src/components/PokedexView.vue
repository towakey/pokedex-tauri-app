<script setup lang="ts">
import { useStorage } from '@vueuse/core'
const props = defineProps(["pokedexArea"])
// const { data: pokedex} = await useFetch('/api/pokedex', { query: { id: 1, area: props.pokedexArea, type: 'index' }, { refresh: true } })
const { data: pokedex} = await useFetch('/api/pokedex?id=1&area='+props.pokedexArea+'&type=index', { refresh: true })
const pokedate = pokedex.value.pokedex
const Id2Name = pokedexId2Name(props.pokedexArea)
const metaTitle = ref(Id2Name)

const searchTerm = ref()


// const area = localStorageAreaListGet({area: props.pokedexArea, pokedate: pokedate}).value
let defval: {[key: string]: string} = {}
for(let val in pokedate){
  defval[String(Number(pokedate[val].no))]="0"
}
const area = useStorage(props.pokedexArea, defval, undefined, {
  serializer: {
    read: (v: any) => v ? JSON.parse(v) : null,
    write: (v: any) => JSON.stringify(v),
  }
})

onMounted(() => {
  let colors: string
  for(let val in pokedate){
    switch(String(area.value[pokedate[val].no])){
      case "0":
      colors = "#dbdbdb"
      break
      case "1":
      colors = "#c9d8ff"
      break
      case "2":
      colors = "#87a7ff"
      break
      default:
      colors = "#dbdbdb"
    }
    pokedate[val]["color"] = colors
  }
})

const pokedateItems = computed(() => {
  if(searchTerm.value === ''){
    return pokedate
  }else{
    if(props.pokedexArea === 'global'){
      return pokedate.filter(item => item.name.match(searchTerm.value) || item.no.match(searchTerm.value))
    }else{
      return pokedate.filter(item => item.name.match(searchTerm.value) || item.no.match(searchTerm.value) || item.type1.match(searchTerm.value) || item.type2.match(searchTerm.value))
    }
  }
})

const checkColor = (no:number) => {
  let result: string
  switch(String(area.value[no])){
    case "0":
    result = "#dbdbdb"
    break
    case "1":
    result = "yellow"
    break
    case "2":
    result = "blue"
    break
    default:
    result = "black"
  }
  return result
}
const getColor = computed(() => (no:number) => {
  // return checkColor(no)
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
        <v-text-field v-model="searchTerm" label="検索(図鑑No / 名前 / タイプ)" />
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
          class=""
          elevation="0"
          :color="list.color"
          >
          <!-- <v-card
          v-else
          class=""
          elevation="0"
          :color="pokedexColor[list.no-1]"
          > -->
          <!-- <v-card
          v-else
          class=""
          elevation="0"
          :color="getColor(list.no)"
          > -->
            <v-card-title>No.{{ list.no }} {{ list.name }}</v-card-title>
            <!-- <v-card-actions>
              <v-btn>{{ area[list.no] }}</v-btn>
            </v-card-actions> -->
          </v-card>
        </NuxtLink>
      </v-col>
    </v-row>
    <SnsView :siteTitle="metaTitle" />
  </v-container>
</template>
<style>
/* .pokedex-card{ */
  /* width: 450px; */
  /* height: auto; */
/* } */
.gameVersion{
  /* float: right; */
  color: darkgrey;
  font-size: small;
}
</style>