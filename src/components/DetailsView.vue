<script setup lang="ts">
  defineProps(["pokedexArea", "pokedexName", "pokedate", "siteTitle"])
</script>
<template>
  <LinkView :pokedexArea="pokedexArea" :pokedexName="pokedexName" :pokedate="pokedate" />
  <NameView :no="pokedate[1].no" :name="pokedate[1].name" :classification="pokedate[1].classification" :height="pokedate[1].height" :weight="pokedate[1].weight" />
  <TypeView :type1="pokedate[1].type1" :type2="pokedate[1].type2" />
  <StatusChart :statusData="pokedate[1]" />
  <AbilityView :ability1="pokedate[1].ability1" :ability2="pokedate[1].ability2" :dream_ability="pokedate[1].dream_ability" />
  <SnsView :siteTitle="siteTitle" />
</template>