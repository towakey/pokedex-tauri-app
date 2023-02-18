<script setup lang="ts">
const route = useRoute()
// definePageMeta({
//   title: route,
// })
const pokedexArea = "unova_bw"
const pokedexName = "イッシュ図鑑"
let prev, next, loadPokedex,pokedate;

const { id } = route.params;
loadPokedex = await useFetch('/api/pokedex?id='+id+'&area='+pokedexArea+'&type=details', { refresh: true })
pokedate = loadPokedex.data.value.pokedex

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
  <TypeView :type1="pokedate[1].type1" :type2="pokedate[1].type2" />
  <v-card>
    <v-card-text>
      <!-- <p>HP:{{ pokedate.hp }}</p>
      <p>こうげき:{{ pokedate.attack }}</p>
      <p>ぼうぎょ:{{ pokedate.defense }}</p>
      <p>とくこう:{{ pokedate.special_attack }}</p>
      <p>とくぼう:{{ pokedate.special_defense }}</p>
      <p>すばやさ:{{ pokedate.speed }}</p> -->
      <StatusChart :statusData="pokedate[1]" />
    </v-card-text>
  </v-card>
  <AbilityView :ability1="pokedate[1].ability1" :ability2="pokedate[1].ability2" :dream_ability="pokedate[1].dream_ability" />
</template>
<style>
</style>