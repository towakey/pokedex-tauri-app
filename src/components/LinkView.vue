<script setup lang="ts">
  // defineProps(["pokedexArea", "pokedexName", "pokedate"])
  defineProps(["pokedexArea", "pokedexName", "prev", "next"])
</script>
<template>
  <v-card
  elevation="0"
  >
    <v-card-actions>
      <v-btn
        variant = "tonal"
        v-if='prev.result'
        :to='{path: `/pokedex/${pokedexArea}/${prev.no}`}'
        no-prefetch
      >{{ prev.name.jpn }}</v-btn>
      <v-spacer />
      <v-btn
        variant = "tonal"
        :to='{path: `/pokedex/${pokedexArea}`}'
      >{{ pokedexName }}TOP</v-btn>
      <v-spacer />
      <v-btn
        variant = "tonal"
        v-if='next.result'
        :to='{path: `/pokedex/${pokedexArea}/${next.no}`}'
        no-prefetch
      >{{ next.name.jpn }}</v-btn>
    </v-card-actions>
  </v-card>
</template>
