<script setup lang="ts">
  const props = defineProps(["ability1", "ability2", "dream_ability", "pokedexArea", "pokedate"])

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

</script>
<template>
  <v-card v-if='props.pokedate.ability1 !== ""'>
    <v-card-title>とくせい1 : {{ props.pokedate.ability1 }}</v-card-title>
    <v-card-text>{{ props.pokedate.ability1_description }}</v-card-text>
  </v-card>
  <v-card v-if='props.pokedate.ability2 !== ""'>
    <v-card-title>とくせい2 : {{ props.pokedate.ability2 }}</v-card-title>
    <v-card-text>{{ props.pokedate.ability2_description }}</v-card-text>
  </v-card>
  <v-card v-if='props.pokedate.dream_ability !== ""'>
    <v-card-title>かくれとくせい : {{ props.pokedate.dream_ability }}</v-card-title>
    <v-card-text>{{ props.pokedate.dream_ability_description }}</v-card-text>
  </v-card>
</template>
