<script setup lang="ts">
  defineProps(["type1", "type2"])
</script>
<template>
  <v-card>
    <v-card-title style="display: flex;">
      <div style="" v-if='type1 === "ノーマル"' class="type_Normal">{{ type1 }}</div>
      <div style="" v-else-if='type1 === "ほのお"' class="type_Fire">{{ type1 }}</div>
      <div style="" v-else-if='type1 === "みず"' class="type_Water">{{ type1 }}</div>
      <div style="" v-else-if='type1 === "でんき"' class="type_Electric">{{ type1 }}</div>
      <div style="" v-else-if='type1 === "くさ"' class="type_Grass">{{ type1 }}</div>
      <div style="" v-else-if='type1 === "こおり"' class="type_Ice">{{ type1 }}</div>
      <div style="" v-else-if='type1 === "かくとう"' class="type_Fighting">{{ type1 }}</div>
      <div style="" v-else-if='type1 === "どく"' class="type_Poison">{{ type1 }}</div>
      <div style="" v-else-if='type1 === "じめん"' class="type_Ground">{{ type1 }}</div>
      <div style="" v-else-if='type1 === "ひこう"' class="type_Flying">{{ type1 }}</div>
      <div style="" v-else-if='type1 === "エスパー"' class="type_Psychic">{{ type1 }}</div>
      <div style="" v-else-if='type1 === "むし"' class="type_Bug">{{ type1 }}</div>
      <div style="" v-else-if='type1 === "いわ"' class="type_Rock">{{ type1 }}</div>
      <div style="" v-else-if='type1 === "ゴースト"' class="type_Ghost">{{ type1 }}</div>
      <div style="" v-else-if='type1 === "ドラゴン"' class="type_Dragon">{{ type1 }}</div>
      <div style="" v-else-if='type1 === "あく"' class="type_Dark">{{ type1 }}</div>
      <div style="" v-else-if='type1 === "はがね"' class="type_Steel">{{ type1 }}</div>
      <div style="" v-else-if='type1 === "フェアリー"' class="type_Fairy">{{ type1 }}</div>
      <div style="" v-if='type2 !== "" && type2 === "ノーマル"' class="type_Normal">{{ type2 }}</div>
      <div style="" v-else-if='type2 !== "" && type2 === "ほのお"' class="type_Fire">{{ type2 }}</div>
      <div style="" v-else-if='type2 !== "" && type2 === "みず"' class="type_Water">{{ type2 }}</div>
      <div style="" v-else-if='type2 !== "" && type2 === "でんき"' class="type_Electric">{{ type2 }}</div>
      <div style="" v-else-if='type2 !== "" && type2 === "くさ"' class="type_Grass">{{ type2 }}</div>
      <div style="" v-else-if='type2 !== "" && type2 === "こおり"' class="type_Ice">{{ type2 }}</div>
      <div style="" v-else-if='type2 !== "" && type2 === "かくとう"' class="type_Fighting">{{ type2 }}</div>
      <div style="" v-else-if='type2 !== "" && type2 === "どく"' class="type_Poison">{{ type2 }}</div>
      <div style="" v-else-if='type2 !== "" && type2 === "じめん"' class="type_Ground">{{ type2 }}</div>
      <div style="" v-else-if='type2 !== "" && type2 === "ひこう"' class="type_Flying">{{ type2 }}</div>
      <div style="" v-else-if='type2 !== "" && type2 === "エスパー"' class="type_Psychic">{{ type2 }}</div>
      <div style="" v-else-if='type2 !== "" && type2 === "むし"' class="type_Bug">{{ type2 }}</div>
      <div style="" v-else-if='type2 !== "" && type2 === "いわ"' class="type_Rock">{{ type2 }}</div>
      <div style="" v-else-if='type2 !== "" && type2 === "ゴースト"' class="type_Ghost">{{ type2 }}</div>
      <div style="" v-else-if='type2 !== "" && type2 === "ドラゴン"' class="type_Dragon">{{ type2 }}</div>
      <div style="" v-else-if='type2 !== "" && type2 === "あく"' class="type_Dark">{{ type2 }}</div>
      <div style="" v-else-if='type2 !== "" && type2 === "はがね"' class="type_Steel">{{ type2 }}</div>
      <div style="" v-else-if='type2 !== "" && type2 === "フェアリー"' class="type_Fairy">{{ type2 }}</div>
    </v-card-title>
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