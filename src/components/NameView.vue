<script setup lang="ts">
  const props = defineProps(["no", "globalNo", "name", "classification", "height", "weight"])
  const src = "/img/" + ('0000' + props.globalNo).slice( -4 ) + ".png"
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
          <p>No.{{ no }}</p>
          <h2>{{ name }}</h2>
          <p>{{ classification }}</p>
        </v-card-title>
        <v-card-text>
          <h2>たかさ:{{ (''+height).slice(-4) }}m</h2>
          <h2>おもさ:{{ (''+weight).slice(-4) }}kg</h2>
        </v-card-text>
      </v-card>
      <!-- <p>No.{{ no }}</p>
      <h1>{{ name }}</h1>
      <p>{{ classification }}</p>
      <h2>たかさ:{{ (''+height).slice(-4) }}m</h2>
      <h2>おもさ:{{ ('&nbsp;&nbsp;&nbsp;'+weight).slice(-4) }}kg</h2> -->
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
        <!-- <v-img
          :src="`${src}`"
          width="100%"
          height="100%"
          aspectRatio="1"
        ></v-img> -->
      </v-card>
    </v-col>
  </v-row>
</template>
