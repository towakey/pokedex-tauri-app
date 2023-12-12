<script setup lang="ts">
  // const props = defineProps(["no", "globalNo", "name", "classification", "height", "weight"])
  const props = defineProps(["pokedex"])
  const src = "/img/" + ('0000' + props.pokedex.globalNo).slice( -4 ) + ".png"
</script>
<template>
  <v-row>
    <v-col
    lg="6"
    sm="6"
    xs="6"
    >
      <v-card
      elevation="0"
      width="100%"
      height="100%"
      >
        <v-card-title
        width="auto"
        >
          <p>No.{{ pokedex.no }}</p>
          <h2>{{ pokedex.name.jpn }}</h2>
          <p>{{ pokedex.classification }}</p>
        </v-card-title>
        <v-card-text>
          <h2>たかさ:{{ (''+pokedex.height).slice(-4) }}m</h2>
          <h2>おもさ:{{ (''+pokedex.weight).slice(-4) }}kg</h2>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col
    lg="6"
    sm="6"
    xs="6"
    >
      <v-card
      elevation="0"
      width="100%"
      height="100%"
      >
        <v-img
          :src="`${src}`"
        ></v-img>
      </v-card>
    </v-col>
  </v-row>
</template>
