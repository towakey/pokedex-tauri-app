<script setup lang="ts">
const appConfig = useAppConfig()
const props = defineProps(["pokedexArea", "pokedexName", "id"])

const pokedex = (await useFetch('/api/v2/pokedex?id='+props.id+'&area='+props.pokedexArea+'&type=details', { refresh: true })).data.value.pokedex
const prev = (await useFetch('/api/v2/pokedex?id='+(Number(props.id)-1)+'&area='+props.pokedexArea+'&type=details', { refresh: true })).data.value.pokedex
const next = (await useFetch('/api/v2/pokedex?id='+(Number(props.id)+1)+'&area='+props.pokedexArea+'&type=details', { refresh: true })).data.value.pokedex

// console.log(pokedex)

// const metaTitle = ref(pokedate[1].name+" - "+props.pokedexName)
// const metaTitle = ref(pokedex.name.jpn+" - "+props.pokedexName)
const metaTitle = ref(pokedex.name.jpn+" - "+props.pokedexName)
// const metaImage = ref("https://pokedex-online.jp/img/" + ('0000' + pokedate[1].globalNo).slice( -4 ) + ".png")
const metaImage = ref("https://pokedex-online.jp/img/" + ('0000' + pokedex.globalNo).slice( -4 ) + ".png")

var model = ref(0)

let types

for(let val in pokedex.status){
  // types = (await useFetch('/api/type?game='+appConfig.gameList[props.pokedexArea]+'&attackType=list&defenceType1='+pokedex.status[val].type1.name+'&defenceType2='+pokedex.status[val].type2.name, { refresh: true })).data.value.type
  types = (await useFetch('/api/type?game='+appConfig.gameList[props.pokedexArea]+'&attackType=list&defenceType1='+pokedex.status[val].type1+'&defenceType2='+pokedex.status[val].type2, { refresh: true })).data.value.type
  pokedex.status[val]["type_list"]=types
}


const nextModel = () => {
  // if((pokedate[1].status.length - 1) <= model.value){
  if((pokedex.status.length - 1) <= model.value){
    model.value = 0
  }else{
    model.value++
  }
}
const prevModel = () => {
  if(model.value == 0){
    // model.value = pokedate[1].status.length - 1
    model.value = pokedex.status.length - 1
  }else{
    model.value--
  }
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
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: metaImage
    }
  ]
})

</script>
<template>
  <v-container class="">
    <LinkView :pokedexArea="pokedexArea" :pokedexName="pokedexName" :prev="prev" :next="next" />
  <NameView :pokedex="pokedex" />
  <v-card
    v-if="pokedex.status.length > 1"
    elevation="0"
  >
    <v-card-actions>
      <v-btn
        @click="prevModel()"
      >＜</v-btn>
      <v-spacer />
      <h2>{{ pokedex.status[model].form }}</h2>
      <v-spacer />
      <v-btn
        @click="nextModel()"
      >＞</v-btn>
    </v-card-actions>
  </v-card>
  <v-carousel :show-arrows="false" hide-delimiters v-model="model" height="auto">
    <!-- <v-carousel-item
      v-for="(item, index) in pokedate[1].status" :key="index"
    > -->
    <v-carousel-item
      v-for="(item, index) in pokedex.status" :key="index"
    >
      <!-- <h2>{{ pokedate[1].status[index].form }}</h2> -->
      <!-- <TypeView :pokedexArea="props.pokedexArea" :type1="pokedate[1].status[index].type1.name" :type2="pokedate[1].status[index].type2.name" :pokedate="pokedate[1].status[index]"/> -->
      <TypeView :area="pokedexArea" :pokedex="pokedex.status[index]" />
      <!-- <StatusChart :statusData="pokedate[1].status[index]" /> -->
      <StatusChart :statusData="pokedex.status[index]" />
      <!-- <AbilityView :ability1="pokedate[1].status[index].ability1" :ability2="pokedate[1].status[index].ability2" :dream_ability="pokedate[1].status[index].dream_ability" :pokedexArea="props.pokedexArea" :pokedate="pokedate[1].status[index]" /> -->
      <AbilityView :pokedex="pokedex.status[index]"  />
      <!-- <DescriptionView :description="pokedate[1].status[index].description" /> -->
      <DescriptionView :description="pokedex.status[index].description" />
    </v-carousel-item>
  </v-carousel>
  <!-- <CaptureStatus :pokedexArea="props.pokedexArea" :no="pokedate[1].no" :pokedex="pokedex" /> -->
  <CaptureStatus :pokedexArea="props.pokedexArea" :pokedex="pokedex" />
  <SnsView :siteTitle="metaTitle" />
  </v-container>
</template>
<style>
</style>