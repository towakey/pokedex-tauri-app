<script setup lang="ts">
  const props = defineProps(["pokedexArea", "pokedexName", "id"])

  const loadPokedex = await useFetch('/api/pokedex?id='+props.id+'&area='+props.pokedexArea+'&type=details', { refresh: true })
  const pokedate = loadPokedex.data.value.pokedex

  const metaTitle = ref(pokedate[1].name+" - "+props.pokedexName)

  var model = ref(0)

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
  <LinkView :pokedexArea="pokedexArea" :pokedexName="pokedexName" :pokedate="pokedate" />
  <NameView :no="pokedate[1].no" :name="pokedate[1].name" :classification="pokedate[1].classification" :height="pokedate[1].height" :weight="pokedate[1].weight" />
  <!-- <TypeView :type1="pokedate[1].type1" :type2="pokedate[1].type2" />
  <StatusChart :statusData="pokedate[1]" />
  <AbilityView :ability1="pokedate[1].ability1" :ability2="pokedate[1].ability2" :dream_ability="pokedate[1].dream_ability" /> -->
  <v-card
    v-if="pokedate[1].status.length > 1"
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
      <TypeView :type1="pokedate[1].status[index].type1" :type2="pokedate[1].status[index].type2" />
      <StatusChart :statusData="pokedate[1].status[index]" />
      <AbilityView :ability1="pokedate[1].status[index].ability1" :ability2="pokedate[1].status[index].ability2" :dream_ability="pokedate[1].status[index].dream_ability" />
    </v-carousel-item>
  </v-carousel>
  <SnsView :siteTitle="metaTitle" />
</template>
<style>
</style>