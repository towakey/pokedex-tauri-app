<script setup lang="ts">
const route = useRoute()
// definePageMeta({
//   title: route,
// })
let prev, next, loadPokedex,pokedate;

const { id } = route.params;
loadPokedex = await useFetch('/api/pokedex?id='+id+'&area=paldea&type=details', { refresh: true })
pokedate = loadPokedex.data.value.pokedex

</script>
<template>
  <div>
    <div>
  <!-- <h1>[{{ prev }}]</h1> -->
  <v-card>
    <v-card-actions>
      <v-btn
        variant = "tonal"
        v-if='pokedate[0] != ""'
        :to='{path: `/pokedex/paldea/${pokedate[0].no}`}'
        no-prefetch
      >{{ pokedate[0].name }}</v-btn>
      <v-spacer />
      <v-btn
        variant = "tonal"
        :to='{path: `/pokedex/paldea`}'
      >図鑑TOP</v-btn>
      <v-spacer />
      <v-btn
        variant = "tonal"
        v-if='pokedate[2] != ""'
        :to='{path: `/pokedex/paldea/${pokedate[2].no}`}'
        no-prefetch
      >{{ pokedate[2].name }}</v-btn>
    </v-card-actions>
  </v-card>
  <v-card>
    <v-card-title><h1>No.{{ pokedate[1].no }} {{ pokedate[1].name }}</h1></v-card-title>
    <v-card-subtitle>{{ pokedate[1].classification }}</v-card-subtitle>
    <v-card-text>
      <h2><!--<v-icon>mdi-human-male-height</v-icon>-->たかさ:{{ pokedate[1].height }}m <!--<v-icon>mdi-scale</v-icon>-->おもさ:{{ pokedate[1].weight }}m</h2>
    </v-card-text>
  </v-card>
  <v-card>
    <v-card-title style="display: flex;">
      <div style="" v-if='pokedate[1].type1 === "ノーマル"' class="type_Normal">{{ pokedate[1].type1 }}</div>
      <div style="" v-else-if='pokedate[1].type1 === "ほのお"' class="type_Fire">{{ pokedate[1].type1 }}</div>
      <div style="" v-else-if='pokedate[1].type1 === "みず"' class="type_Water">{{ pokedate[1].type1 }}</div>
      <div style="" v-else-if='pokedate[1].type1 === "でんき"' class="type_Electric">{{ pokedate[1].type1 }}</div>
      <div style="" v-else-if='pokedate[1].type1 === "くさ"' class="type_Grass">{{ pokedate[1].type1 }}</div>
      <div style="" v-else-if='pokedate[1].type1 === "こおり"' class="type_Ice">{{ pokedate[1].type1 }}</div>
      <div style="" v-else-if='pokedate[1].type1 === "かくとう"' class="type_Fighting">{{ pokedate[1].type1 }}</div>
      <div style="" v-else-if='pokedate[1].type1 === "どく"' class="type_Poison">{{ pokedate[1].type1 }}</div>
      <div style="" v-else-if='pokedate[1].type1 === "じめん"' class="type_Ground">{{ pokedate[1].type1 }}</div>
      <div style="" v-else-if='pokedate[1].type1 === "ひこう"' class="type_Flying">{{ pokedate[1].type1 }}</div>
      <div style="" v-else-if='pokedate[1].type1 === "エスパー"' class="type_Psychic">{{ pokedate[1].type1 }}</div>
      <div style="" v-else-if='pokedate[1].type1 === "むし"' class="type_Bug">{{ pokedate[1].type1 }}</div>
      <div style="" v-else-if='pokedate[1].type1 === "いわ"' class="type_Rock">{{ pokedate[1].type1 }}</div>
      <div style="" v-else-if='pokedate[1].type1 === "ゴースト"' class="type_Ghost">{{ pokedate[1].type1 }}</div>
      <div style="" v-else-if='pokedate[1].type1 === "ドラゴン"' class="type_Dragon">{{ pokedate[1].type1 }}</div>
      <div style="" v-else-if='pokedate[1].type1 === "あく"' class="type_Dark">{{ pokedate[1].type1 }}</div>
      <div style="" v-else-if='pokedate[1].type1 === "はがね"' class="type_Steel">{{ pokedate[1].type1 }}</div>
      <div style="" v-else-if='pokedate[1].type1 === "フェアリー"' class="type_Fairy">{{ pokedate[1].type1 }}</div>
      <div style="" v-if='pokedate[1].type2 !== "" && pokedate[1].type2 === "ノーマル"' class="type_Normal">{{ pokedate[1].type2 }}</div>
      <div style="" v-else-if='pokedate[1].type2 !== "" && pokedate[1].type2 === "ほのお"' class="type_Fire">{{ pokedate[1].type2 }}</div>
      <div style="" v-else-if='pokedate[1].type2 !== "" && pokedate[1].type2 === "みず"' class="type_Water">{{ pokedate[1].type2 }}</div>
      <div style="" v-else-if='pokedate[1].type2 !== "" && pokedate[1].type2 === "でんき"' class="type_Electric">{{ pokedate[1].type2 }}</div>
      <div style="" v-else-if='pokedate[1].type2 !== "" && pokedate[1].type2 === "くさ"' class="type_Grass">{{ pokedate[1].type2 }}</div>
      <div style="" v-else-if='pokedate[1].type2 !== "" && pokedate[1].type2 === "こおり"' class="type_Ice">{{ pokedate[1].type2 }}</div>
      <div style="" v-else-if='pokedate[1].type2 !== "" && pokedate[1].type2 === "かくとう"' class="type_Fighting">{{ pokedate[1].type2 }}</div>
      <div style="" v-else-if='pokedate[1].type2 !== "" && pokedate[1].type2 === "どく"' class="type_Poison">{{ pokedate[1].type2 }}</div>
      <div style="" v-else-if='pokedate[1].type2 !== "" && pokedate[1].type2 === "じめん"' class="type_Ground">{{ pokedate[1].type2 }}</div>
      <div style="" v-else-if='pokedate[1].type2 !== "" && pokedate[1].type2 === "ひこう"' class="type_Flying">{{ pokedate[1].type2 }}</div>
      <div style="" v-else-if='pokedate[1].type2 !== "" && pokedate[1].type2 === "エスパー"' class="type_Psychic">{{ pokedate[1].type2 }}</div>
      <div style="" v-else-if='pokedate[1].type2 !== "" && pokedate[1].type2 === "むし"' class="type_Bug">{{ pokedate[1].type2 }}</div>
      <div style="" v-else-if='pokedate[1].type2 !== "" && pokedate[1].type2 === "いわ"' class="type_Rock">{{ pokedate[1].type2 }}</div>
      <div style="" v-else-if='pokedate[1].type2 !== "" && pokedate[1].type2 === "ゴースト"' class="type_Ghost">{{ pokedate[1].type2 }}</div>
      <div style="" v-else-if='pokedate[1].type2 !== "" && pokedate[1].type2 === "ドラゴン"' class="type_Dragon">{{ pokedate[1].type2 }}</div>
      <div style="" v-else-if='pokedate[1].type2 !== "" && pokedate[1].type2 === "あく"' class="type_Dark">{{ pokedate[1].type2 }}</div>
      <div style="" v-else-if='pokedate[1].type2 !== "" && pokedate[1].type2 === "はがね"' class="type_Steel">{{ pokedate[1].type2 }}</div>
      <div style="" v-else-if='pokedate[1].type2 !== "" && pokedate[1].type2 === "フェアリー"' class="type_Fairy">{{ pokedate[1].type2 }}</div>
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
      <StatusChart :statusData="pokedate[1]" />
    </v-card-text>
  </v-card>
  <v-card>
    <v-card-title>とくせい1 : {{ pokedate[1].ability1 }}</v-card-title>
  </v-card>
  <v-card>
    <v-card-title v-if='pokedate[1].ability2 !== ""'>とくせい2 : {{ pokedate[1].ability2 }}</v-card-title>
  </v-card>
  <v-card>
    <v-card-title v-if='pokedate[1].dream_ability !== ""'>かくれとくせい : {{ pokedate[1].dream_ability }}</v-card-title>
  </v-card>
</div>
</div>
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