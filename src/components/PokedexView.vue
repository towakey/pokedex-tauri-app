<script setup lang="ts">
import { useStorage } from '@vueuse/core'
const props = defineProps(["pokedexArea"])
const pokedex = (await useFetch('/api/v2/pokedex?id=1&area='+props.pokedexArea+'&type=index', { refresh: true })).data.value.pokedex
const Id2Name = pokedexId2Name(props.pokedexArea)
const metaTitle = ref(Id2Name)

const searchTerm = ref()


let defval: {[key: string]: string} = {}
for(let val in pokedex){
  defval[String(Number(pokedex[val].no))]="0"
}
const area = useStorage(props.pokedexArea, defval, undefined, {
  serializer: {
    read: (v: any) => v ? JSON.parse(v) : null,
    write: (v: any) => JSON.stringify(v),
  }
})

onMounted(() => {
  let colors: string
  for(let val in pokedex){
    switch(String(area.value[pokedex[val].no])){
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
    pokedex[val]["color"] = colors
  }
})

const pokedateItems = computed(() => {
  if(searchTerm.value === ''){
    return pokedex
  }else{
    if(props.pokedexArea === 'global'){
      return pokedex.filter(item => String(item.name.jpn).match(searchTerm.value) || String(item.no).match(searchTerm.value))
    }else{
      // return pokedate.filter(item => item.name.match(searchTerm.value) || item.no.match(searchTerm.value) || item.type1.match(searchTerm.value) || item.type2.match(searchTerm.value))
      // return pokedex.filter(item => item.name.jpn.match(searchTerm.value) || item.no.match(searchTerm.value) || item.type1.match(searchTerm.value) || item.type2.match(searchTerm.value))
      return pokedex.filter(item => String(item.name.jpn).match(searchTerm.value) || String(item.no).match(searchTerm.value))
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
        <v-text-field
          v-if="pokedexArea === 'global'"
          v-model="searchTerm" label="検索(図鑑No / 名前)" />
        <v-text-field
          v-else
          v-model="searchTerm" label="検索(図鑑No / 名前)" />
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
            <div
            class="d-flex flex-no-wrap justify-space-between"
            style="float: left;"
            >
              <v-avatar
              class="ms-2"
              size="100"
              style="/*background-color: aqua;*/"
              >
                <v-img :src='`${"/img/" + ("0000"+list.id).slice(-4)+".png"}`'></v-img>
              </v-avatar>
              <div
              style="/*background-color: aqua;*/"
              >
                <v-card-title
                >No.{{ list.id }} {{ list.name.jpn }}</v-card-title>
                <v-card-text>{{ pokedexId2GameVersion(list.id) }}</v-card-text>
              </div>
            </div>
          </v-card>
          <v-card
          v-else
          class=""
          elevation="0"
          :color="list.color"
          >
            <div
            class="d-flex flex-no-wrap justify-space-between"
            style="float: left;"
            >
              <v-avatar
              class="ms-2"
              size="100"
              style="/*background-color: aqua;*/"
              >
                <v-img :src='`${"/img/" + ("0000"+list.globalNo).slice(-4)+".png"}`'></v-img>
              </v-avatar>
              <div
              style="/*background-color: aqua;*/"
              >
                <v-card-title
                >No.{{ list.no }} {{ list.name.jpn }}</v-card-title>
                <v-card-text></v-card-text>
              </div>
            </div>
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