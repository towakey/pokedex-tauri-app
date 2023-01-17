<script setup lang="ts">
const route = useRoute();
// definePageMeta({
//   title: route,
// })
// const { id } = route.query;
const { id } = route.params;
const { data: pokedex} = await useFetch('/api/pokedex', { query: { id: id, area: 'paldea', type: 'details' } })
const pokedate = pokedex.value.pokedex
</script>
<template>
  <!-- <h1>details.vue[{{ pokedex }}]</h1> -->
  <v-card>
    <v-card-title>No.{{ pokedate.no }} {{ pokedate.name }}</v-card-title>
    <v-card-subtitle>{{ pokedate.classification }}</v-card-subtitle>
    <v-card-text>
      <p><v-icon>mdi-human-male-height</v-icon>たかさ:{{ pokedate.height }}m</p>
      <p><v-icon>mdi-scale</v-icon>おもさ:{{ pokedate.weight }}m</p>
    </v-card-text>
  </v-card>
  <v-card>
    <v-card-title class="type1"
     v-if="!pokedate.type2"
    >
      {{ pokedate.type1 }}
    </v-card-title>
    <v-card-title class="type2"
     v-else
    >
      {{ pokedate.type1 }}  {{ pokedate.type2 }}
    </v-card-title>
  </v-card>
  <v-card>
    <v-card-text>
      <p>HP:{{ pokedate.hp }}</p>
      <p>こうげき:{{ pokedate.attack }}</p>
      <p>ぼうぎょ:{{ pokedate.defense }}</p>
      <p>とくこう:{{ pokedate.special_attack }}</p>
      <p>とくぼう:{{ pokedate.special_defense }}</p>
      <p>すばやさ:{{ pokedate.speed }}</p>
    </v-card-text>
  </v-card>
  <v-card>
    <v-card-text>
      <p>とくせい1 : {{ pokedate.ability1 }}</p>
      <p>とくせい2: {{ pokedate.ability2 }}</p>
      <p>かくれとくせい: {{ pokedate.dream_ability }}</p>
    </v-card-text>
  </v-card>
</template>
<style>
.type1{
  text-align: center;
  background: green;
}
.type2{
  text-align: center;
  background: linear-gradient(to right, green 0%, green 50%, indigo 50%,  indigo 100%);
}
</style>