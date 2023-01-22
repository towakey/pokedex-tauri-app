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
    <v-card-title style="display: flex;">
      <div style="" v-if='pokedate.type1 === "ノーマル"' class="type_Normal">{{ pokedate.type1 }}</div>
      <div style="" v-else-if='pokedate.type1 === "ほのお"' class="type_Fire">{{ pokedate.type1 }}</div>
      <div style="" v-else-if='pokedate.type1 === "みず"' class="type_Water">{{ pokedate.type1 }}</div>
      <div style="" v-else-if='pokedate.type1 === "でんき"' class="type_Electric">{{ pokedate.type1 }}</div>
      <div style="" v-else-if='pokedate.type1 === "くさ"' class="type_Grass">{{ pokedate.type1 }}</div>
      <div style="" v-else-if='pokedate.type1 === "こおり"' class="type_Ice">{{ pokedate.type1 }}</div>
      <div style="" v-else-if='pokedate.type1 === "かくとう"' class="type_Fighting">{{ pokedate.type1 }}</div>
      <div style="" v-else-if='pokedate.type1 === "どく"' class="type_Poison">{{ pokedate.type1 }}</div>
      <div style="" v-else-if='pokedate.type1 === "じめん"' class="type_Ground">{{ pokedate.type1 }}</div>
      <div style="" v-else-if='pokedate.type1 === "ひこう"' class="type_Flying">{{ pokedate.type1 }}</div>
      <div style="" v-else-if='pokedate.type1 === "エスパー"' class="type_Psychic">{{ pokedate.type1 }}</div>
      <div style="" v-else-if='pokedate.type1 === "むし"' class="type_Bug">{{ pokedate.type1 }}</div>
      <div style="" v-else-if='pokedate.type1 === "いわ"' class="type_Rock">{{ pokedate.type1 }}</div>
      <div style="" v-else-if='pokedate.type1 === "ゴースト"' class="type_Ghost">{{ pokedate.type1 }}</div>
      <div style="" v-else-if='pokedate.type1 === "ドラゴン"' class="type_Dragon">{{ pokedate.type1 }}</div>
      <div style="" v-else-if='pokedate.type1 === "あく"' class="type_Dark">{{ pokedate.type1 }}</div>
      <div style="" v-else-if='pokedate.type1 === "はがね"' class="type_Steel">{{ pokedate.type1 }}</div>
      <div style="" v-else-if='pokedate.type1 === "フェアリー"' class="type_Fairy">{{ pokedate.type1 }}</div>
      <div style="" v-if='pokedate.type2 !== "" && pokedate.type2 === "ノーマル"' class="type_Normal">{{ pokedate.type2 }}</div>
      <div style="" v-else-if='pokedate.type2 !== "" && pokedate.type2 === "ほのお"' class="type_Fire">{{ pokedate.type2 }}</div>
      <div style="" v-else-if='pokedate.type2 !== "" && pokedate.type2 === "みず"' class="type_Water">{{ pokedate.type2 }}</div>
      <div style="" v-else-if='pokedate.type2 !== "" && pokedate.type2 === "でんき"' class="type_Electric">{{ pokedate.type2 }}</div>
      <div style="" v-else-if='pokedate.type2 !== "" && pokedate.type2 === "くさ"' class="type_Grass">{{ pokedate.type2 }}</div>
      <div style="" v-else-if='pokedate.type2 !== "" && pokedate.type2 === "こおり"' class="type_Ice">{{ pokedate.type2 }}</div>
      <div style="" v-else-if='pokedate.type2 !== "" && pokedate.type2 === "かくとう"' class="type_Fighting">{{ pokedate.type2 }}</div>
      <div style="" v-else-if='pokedate.type2 !== "" && pokedate.type2 === "どく"' class="type_Poison">{{ pokedate.type2 }}</div>
      <div style="" v-else-if='pokedate.type2 !== "" && pokedate.type2 === "じめん"' class="type_Ground">{{ pokedate.type2 }}</div>
      <div style="" v-else-if='pokedate.type2 !== "" && pokedate.type2 === "ひこう"' class="type_Flying">{{ pokedate.type2 }}</div>
      <div style="" v-else-if='pokedate.type2 !== "" && pokedate.type2 === "エスパー"' class="type_Psychic">{{ pokedate.type2 }}</div>
      <div style="" v-else-if='pokedate.type2 !== "" && pokedate.type2 === "むし"' class="type_Bug">{{ pokedate.type2 }}</div>
      <div style="" v-else-if='pokedate.type2 !== "" && pokedate.type2 === "いわ"' class="type_Rock">{{ pokedate.type2 }}</div>
      <div style="" v-else-if='pokedate.type2 !== "" && pokedate.type2 === "ゴースト"' class="type_Ghost">{{ pokedate.type2 }}</div>
      <div style="" v-else-if='pokedate.type2 !== "" && pokedate.type2 === "ドラゴン"' class="type_Dragon">{{ pokedate.type2 }}</div>
      <div style="" v-else-if='pokedate.type2 !== "" && pokedate.type2 === "あく"' class="type_Dark">{{ pokedate.type2 }}</div>
      <div style="" v-else-if='pokedate.type2 !== "" && pokedate.type2 === "はがね"' class="type_Steel">{{ pokedate.type2 }}</div>
      <div style="" v-else-if='pokedate.type2 !== "" && pokedate.type2 === "フェアリー"' class="type_Fairy">{{ pokedate.type2 }}</div>
    </v-card-title>
  </v-card>
  <v-card>
    <v-card-text>
      <!-- <p>HP:{{ pokedate.hp }}</p>
      <p>こうげき:{{ pokedate.attack }}</p>
      <p>ぼうぎょ:{{ pokedate.defense }}</p>
      <p>とくこう:{{ pokedate.special_attack }}</p>
      <p>とくぼう:{{ pokedate.special_defense }}</p>
      <p>すばやさ:{{ pokedate.speed }}</p> -->
      <StatusChart :statusData="pokedate" />
    </v-card-text>
  </v-card>
  <v-card>
    <v-card-title>とくせい1 : {{ pokedate.ability1 }}</v-card-title>
  </v-card>
  <v-card>
    <v-card-title v-if='pokedate.ability2 !== ""'>とくせい2 : {{ pokedate.ability2 }}</v-card-title>
  </v-card>
  <v-card>
    <v-card-title v-if='pokedate.dream_ability !== ""'>かくれとくせい : {{ pokedate.dream_ability }}</v-card-title>
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
.type_Normal{
  text-align: center;
  background: gainsboro;
  width: 100%;
}
.type_Fire{
  text-align: center;
  background: red;
  width: 100%;
}
.type_Water{
  text-align: center;
  background: blue;
  width: 100%;
}
.type_Electric{
  text-align: center;
  background: yellow;
  width: 100%;
}
.type_Grass{
  text-align: center;
  background: green;
  width: 100%;
}
.type_Ice{
  text-align: center;
  background: deepskyblue;
  width: 100%;
}
.type_Fighting{
  text-align: center;
  background: darkorange;
  width: 100%;
}
.type_Poison{
  text-align: center;
  background: darkmagenta;
  width: 100%;
}
.type_Ground{
  text-align: center;
  background: chocolate;
  width: 100%;
}
.type_Flying{
  text-align: center;
  background: dodgerblue;
  width: 100%;
}
.type_Psychic{
  text-align: center;
  background: deeppink;
  width: 100%;
}
.type_Bug{
  text-align: center;
  background: limegreen;
  width: 100%;
}
.type_Rock{
  text-align: center;
  background: saddlebrown;
  width: 100%;
}
.type_Ghost{
  text-align: center;
  background: slateblue;
  width: 100%;
}
.type_Dragon{
  text-align: center;
  background: royalblue;
  width: 100%;
}
.type_Dark{
  text-align: center;
  background: indigo;
  width: 100%;
}
.type_Steel{
  text-align: center;
  background: lightsteelblue;
  width: 100%;
}
.type_Fairy{
  text-align: center;
  background: violet;
  width: 100%;
}
</style>