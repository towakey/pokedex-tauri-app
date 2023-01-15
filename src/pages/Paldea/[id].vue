<script setup lang="ts">
const route = useRoute();
// const { id } = route.query;
const { id } = route.params;
const { data: pokedex} = await useFetch('/api/pokedex', { query: { id: id, area: 'paldea', type: 'details' } })
const pokedate = pokedex.value.pokedex
definePageMeta({
  title: "this.id",
})
</script>
<template>
  <!-- <h1>details.vue[{{ pokedex }}]</h1> -->
  <v-card>
    <v-card-title>No.{{ pokedate.no }} {{ pokedate.name }}</v-card-title>
    <v-card-subtitle>{{ pokedate.classification }}</v-card-subtitle>
    <v-card-text>
      <p>タイプ1 : {{ pokedate.type1 }}</p>
      <p>タイプ2 : {{ pokedate.type2 }}</p>
      <p>とくせい1 : {{ pokedate.ability1 }}</p>
      <p>とくせい2: {{ pokedate.ability2 }}</p>
      <p>かくれとくせい: {{ pokedate.dream_ability }}</p>
    </v-card-text>
  </v-card>
</template>