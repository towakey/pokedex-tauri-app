<script setup lang="ts">
  defineProps(["pokedexArea", "pokedexName", "pokedate"])
</script>
<template>
  <v-card>
    <v-card-actions>
      <v-btn
        variant = "tonal"
        v-if='pokedate[0] != ""'
        :to='{path: `/pokedex/${pokedexArea}/${pokedate[0].no}`}'
        no-prefetch
      >{{ pokedate[0].name }}</v-btn>
      <v-spacer />
      <v-btn
        variant = "tonal"
        :to='{path: `/pokedex/${pokedexArea}`}'
      >{{ pokedexName }}TOP</v-btn>
      <v-spacer />
      <v-btn
        variant = "tonal"
        v-if='pokedate[2] != ""'
        :to='{path: `/pokedex/${pokedexArea}/${pokedate[2].no}`}'
        no-prefetch
      >{{ pokedate[2].name }}</v-btn>
    </v-card-actions>
  </v-card>
</template>
