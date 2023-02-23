<script setup lang="ts">
definePageMeta({
  title: "全国図鑑",
})
const route = useRoute()
const pokedexListCmd = ["kanto", "johto", "hoenn", "sinnoh", "unova_bw", "unova_b2w2", "central_kalos", "coast_kalos", "mountain_kalos", "alola_sm", "alola_usum", "galar", "hisui", "paldea"]
const pokedexListName = ["カントー図鑑", "ジョウト図鑑", "ホウエン図鑑", "シンオウ図鑑", "イッシュ図鑑(Black White)", "イッシュ図鑑(Black2 White2)", "セントラルカロス図鑑", "コーストカロス図鑑", "マウンテンカロス図鑑", "アローラ図鑑(Sun Moon)", "アローラ図鑑(UltraSun UltraMoon)", "ガラル図鑑", "ヒスイ図鑑", "パルデア図鑑"]
const pokedexList = {}
const pokedexArea = "global"
const pokedexName = "全国図鑑"
let prev, next, loadPokedex,pokedate;

const { id } = route.params;
loadPokedex = await useFetch('/api/pokedex?id='+id+'&area='+pokedexArea+'&type=details', { refresh: true })
pokedate = loadPokedex.data.value.pokedex

var pokedexCheck
for(var val in pokedexListCmd){
  pokedexCheck = await useFetch('/api/pokedex?id='+id+'&area='+pokedexListCmd[val]+'&type=exists')
  pokedexList[pokedexListCmd[val]] = {name: pokedexListName[val], exists: pokedexCheck.data.value.pokedex}
  // console.log(pokedexList[pokedexListCmd[val]])
}

</script>
<template>
  <!-- <h1>[{{ prev }}]</h1> -->
  <LinkView :pokedexArea="pokedexArea" :pokedexName="pokedexName" :pokedate="pokedate" />
  <v-card>
    <v-card-title><h1>No.{{ pokedate[1].no }} {{ pokedate[1].name }}</h1></v-card-title>
    <v-card-subtitle>{{ pokedate[1].classification }}</v-card-subtitle>
    <v-card-text>
      <h2><!--<v-icon>mdi-human-male-height</v-icon>-->たかさ:{{ pokedate[1].height }}m <!--<v-icon>mdi-scale</v-icon>-->おもさ:{{ pokedate[1].weight }}m</h2>
    </v-card-text>
  </v-card>
  <template v-for="(val, key) in pokedexList" :key="key">
    <NuxtLink
      v-if="val.exists.check"
      :to="{path: `/pokedex/${key}/${val.exists.localNo}`}"
    >
      <v-card>
        <v-card-title>{{ val.name }}</v-card-title>
      </v-card>
    </NuxtLink>
    <v-card
      v-if="!val.exists.check"
      style="background-color:silver"
    >
      <v-card-title>{{ val.name }}</v-card-title>
    </v-card>
  </template>
</template>
<style>
</style>