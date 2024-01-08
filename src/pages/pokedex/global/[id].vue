<script setup lang="ts">
definePageMeta({
  title: "全国図鑑",
})
const route = useRoute()
const pokedexListCmd = ["kanto", "johto", "hoenn", "sinnoh", "unova_bw", "unova_b2w2", "central_kalos", "coast_kalos", "mountain_kalos", "alola_sm", "alola_usum", "galar", "isle_of_armor", "crown_tundra", "hisui", "paldea", "kitakami", "blueberry"]
const pokedexListName = ["カントー図鑑", "ジョウト図鑑", "ホウエン図鑑", "シンオウ図鑑", "イッシュ図鑑(Black White)", "イッシュ図鑑(Black2 White2)", "セントラルカロス図鑑", "コーストカロス図鑑", "マウンテンカロス図鑑", "アローラ図鑑(Sun Moon)", "アローラ図鑑(UltraSun UltraMoon)", "ガラル図鑑", "ヨロイ島図鑑", "カンムリ雪原図鑑", "ヒスイ図鑑", "パルデア図鑑", "キタカミ図鑑", "ブルーベリー図鑑"]
const pokedexList = {}
const pokedexArea = "global"
const pokedexName = "全国図鑑"

const { id } = route.params;
const pokedex = (await useFetch('/api/v2/pokedex?id='+id+'&area='+pokedexArea+'&type=details', { refresh: true })).data.value.pokedex
const prev = (await useFetch('/api/v2/pokedex?id='+(Number(id)-1)+'&area='+pokedexArea+'&type=details', { refresh: true })).data.value.pokedex
const next = (await useFetch('/api/v2/pokedex?id='+(Number(id)+1)+'&area='+pokedexArea+'&type=details', { refresh: true })).data.value.pokedex
const metaTitle = ref(pokedex.name.jpn+" - "+pokedexName)

var pokedexCheck
for(var val in pokedexListCmd){
  pokedexCheck = (await useFetch('/api/v2/pokedex?id='+id+'&area='+pokedexListCmd[val]+'&type=exists')).data.value.pokedex
  pokedexList[pokedexListCmd[val]] = {name: pokedexListName[val], exists: pokedexCheck}
}

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
  <LinkView :pokedexArea="pokedexArea" :pokedexName="pokedexName" :prev="prev" :next="next" />
  <NameView :pokedex="pokedex" :index="'0'"/>
  <template v-for="(val, key) in pokedexList" :key="key">
    <NuxtLink
      v-if="val.exists.check"
      :to="{path: `/pokedex/${key}/${val.exists.no}`}"
      style="text-decoration: none;"
    >
      <v-card>
        <v-card-title>{{ val.name }} No.{{ val.exists.no }}</v-card-title>
      </v-card>
    </NuxtLink>
    <v-card
      v-if="!val.exists.check"
      style="background-color:silver"
    >
      <v-card-title>{{ val.name }}</v-card-title>
    </v-card>
  </template>
  <SnsView :siteTitle="metaTitle" />
</template>
<style>
</style>