<script setup lang="ts">
  const props = defineProps(["pokedexArea", "pokedexName", "id"])

  const loadPokedex = await useFetch('/api/pokedex?id='+props.id+'&area='+props.pokedexArea+'&type=details', { refresh: true })
  const pokedate = loadPokedex.data.value.pokedex

  const metaTitle = ref(pokedate[1].name+" - "+props.pokedexName)

  var model = ref(0)

  // console.log(props.pokedexArea)

  const gameList: { [key: string]: string } = {
    "kanto": "Red_Green_Blue_Yellow",
    "johto": "Gold_Silver_Crystal",
    "hoenn": "Ruby_Sapphire_Emerald",
    "sinnoh": "Diamond_Pearl_Platinum",
    "unova_bw": "Black_White",
    "unova_b2w2": "Black2_White2",
    "central_kalos": "X_Y",
    "coast_kalos": "X_Y",
    "mountain_kalos": "X_Y",
    "alola_sm": "Sun_Moon",
    "alola_usum": "UltraSun_UltraMoon",
    "galar": "Sword_Shield",
    "isle_of_armor": "Sword_Shield",
    "crown_tundra": "Sword_Shield",
    "hisui": "LegendsArceus",
    "paldea": "Scarlet_Violet",
  }
  let types
  let ability:any

  for(let val in pokedate[1].status){
    types = await useFetch('/api/type?game='+gameList[props.pokedexArea]+'&attackType=list&defenceType1='+pokedate[1].status[val].type1.name+'&defenceType2='+pokedate[1].status[val].type2.name, { refresh: true })
    pokedate[1].status[val]["type_list"]=types.data.value.type

    if(pokedate[1].status[val].ability1!==""){
      ability = await useFetch('/api/ability?game='+gameList[props.pokedexArea]+'&ability='+pokedate[1].status[val].ability1, { refresh: true })
      pokedate[1].status[val]["ability1_description"] = ability.data.value.ability
    }else{
      pokedate[1].status[val]["ability1_description"] = ""
    }

    if(pokedate[1].status[val].ability2!==""){
      ability = await useFetch('/api/ability?game='+gameList[props.pokedexArea]+'&ability='+pokedate[1].status[val].ability2, { refresh: true })
      pokedate[1].status[val]["ability2_description"] = ability.data.value.ability
    }else{
      pokedate[1].status[val]["ability2_description"] = ""
    }

    if(pokedate[1].status[val].dream_ability!==""){
      ability = await useFetch('/api/ability?game='+gameList[props.pokedexArea]+'&ability='+pokedate[1].status[val].dream_ability, { refresh: true })
      pokedate[1].status[val]["dream_ability_description"] = ability.data.value.ability
    }else{
      pokedate[1].status[val]["dream_ability_description"] = ""
    }

  }

  const nextModel = () => {
    if((pokedate[1].status.length - 1) <= model.value){
      model.value = 0
    }else{
      model.value++
    }
  }
  const prevModel = () => {
    if(model.value == 0){
      model.value = pokedate[1].status.length - 1
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
    }
  ]
})

</script>
<template>
  <v-container class="">
  <LinkView :pokedexArea="pokedexArea" :pokedexName="pokedexName" :pokedate="pokedate" />
  <NameView :no="pokedate[1].no" :name="pokedate[1].name" :classification="pokedate[1].classification" :height="pokedate[1].height" :weight="pokedate[1].weight" />
  <!-- <TypeView :type1="pokedate[1].type1" :type2="pokedate[1].type2" />
  <StatusChart :statusData="pokedate[1]" />
  <AbilityView :ability1="pokedate[1].ability1" :ability2="pokedate[1].ability2" :dream_ability="pokedate[1].dream_ability" /> -->
  <v-card
    v-if="pokedate[1].status.length > 1"
    elevation="0"
  >
    <v-card-actions>
      <v-btn
        @click="prevModel()"
      >＜</v-btn>
      <v-spacer />
      <h2>{{ pokedate[1].status[model].form }}</h2>
      <v-spacer />
      <v-btn
        @click="nextModel()"
      >＞</v-btn>
    </v-card-actions>
  </v-card>
  <v-carousel :show-arrows="false" hide-delimiters v-model="model" height="auto">
    <v-carousel-item
      v-for="(item, index) in pokedate[1].status" :key="index"
    >
      <!-- <h2>{{ pokedate[1].status[index].form }}</h2> -->
      <TypeView :pokedexArea="props.pokedexArea" :type1="pokedate[1].status[index].type1.name" :type2="pokedate[1].status[index].type2.name" :pokedate="pokedate[1].status[index]"/>
      <StatusChart :statusData="pokedate[1].status[index]" />
      <AbilityView :ability1="pokedate[1].status[index].ability1" :ability2="pokedate[1].status[index].ability2" :dream_ability="pokedate[1].status[index].dream_ability" :pokedexArea="props.pokedexArea" :pokedate="pokedate[1].status[index]" />
      <DescriptionView :description="pokedate[1].status[index].description" />
    </v-carousel-item>
  </v-carousel>
  <SnsView :siteTitle="metaTitle" />
  </v-container>  
</template>
<style>
</style>