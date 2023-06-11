<script setup lang="ts">
const appConfig = useAppConfig()
const props = defineProps(["ability1", "ability2", "dream_ability", "pokedexArea", "pokedate"])

</script>
<template>
  <v-card
  elevation="0"
  v-if='props.pokedate.ability1 !== ""'>
    <v-card-title>とくせい1 : {{ props.pokedate.ability1 }}</v-card-title>
    <v-card-text>{{ props.pokedate.ability1_description }}</v-card-text>
  </v-card>
  <v-card 
  elevation="0"
  v-if='props.pokedate.ability2 !== ""'>
    <v-card-title>とくせい2 : {{ props.pokedate.ability2 }}</v-card-title>
    <v-card-text>{{ props.pokedate.ability2_description }}</v-card-text>
  </v-card>
  <v-card 
  elevation="0"
  v-if='props.pokedate.dream_ability !== ""'>
    <v-card-title>かくれとくせい : {{ props.pokedate.dream_ability }}</v-card-title>
    <v-card-text>{{ props.pokedate.dream_ability_description }}</v-card-text>
  </v-card>
</template>
