<script setup lang="ts">
const appConfig = useAppConfig()

const props = defineProps(["pokedexArea", "type1", "type2", "pokedate"])
var typeDialog = ref(false)

const typeList: string[] = [
    "ノーマル",
    "ほのお",
    "みず",
    "でんき",
    "くさ",
    "こおり",
    "かくとう",
    "どく",
    "じめん",
    "ひこう",
    "エスパー",
    "むし",
    "いわ",
    "ゴースト",
    "ドラゴン",
  ]

if( props.pokedexArea == 'johto' || props.pokedexArea == 'hoenn' || props.pokedexArea == 'sinnoh' || props.pokedexArea == 'unova_bw' || props.pokedexArea == 'unova_b2w2' ){
  typeList.push('あく')
  typeList.push('はがね')
}else if( props.pokedexArea == 'central_kalos' || props.pokedexArea == 'coast_kalos' || props.pokedexArea == 'mountain_kalos' || props.pokedexArea == 'alola_sm' || props.pokedexArea == 'alola_usum' || props.pokedexArea == 'galar' || props.pokedexArea == 'isle_of_armor' || props.pokedexArea == 'crown_tundra' || props.pokedexArea == 'hisui'  || props.pokedexArea == 'paldea' ){
  typeList.push('あく')
  typeList.push('はがね')
  typeList.push('フェアリー')
}
let damage0 = ref([])
let damage025 = ref([])
let damage05 = ref([])
let damage1 = ref([])
let damage2 = ref([])
let damage4 = ref([])


for(let val in typeList){
  // const types = await useFetch('/api/type?game='+gameList[props.pokedexArea]+'&attackType='+typeList[val]+'&defenceType1='+props.type1+'&defenceType2='+props.type2, { refresh: true })
  const types = props.pokedate.type_list
  if(types[typeList[val]] == "0"){
    damage0.value[damage0.value.length]=ref(typeList[val])
  }else if(types[typeList[val]] == "0.25"){
    damage025.value[damage025.value.length]=ref(typeList[val])
  }else if(types[typeList[val]] == "0.5"){
    damage05.value[damage05.value.length]=ref(typeList[val])
  }else if(types[typeList[val]] == "1"){
    damage1.value[damage1.value.length]=ref(typeList[val])
  }else if(types[typeList[val]] == "2"){
    damage2.value[damage2.value.length]=ref(typeList[val])
  }else if(types[typeList[val]] == "4"){
    damage4.value[damage4.value.length]=ref(typeList[val])
  }
}
</script>
<template>
  <v-card
    @click="typeDialog = true"
  >
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
  <ClientOnly>
  <v-dialog
    v-model="typeDialog"
  >
    <v-container>
    <v-card>
      <v-card-item>
        <h2>こうかはばつぐんだ(4倍)</h2>
        <div
          v-for="val in damage4"
          :key="val"
          style="display: inline-block;"
        >
        <div v-if='val.value === "ノーマル"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Normal">{{ val.value }}</div>
          <div v-else-if='val.value === "ほのお"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Fire">{{ val.value }}</div>
          <div v-else-if='val.value === "みず"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Water">{{ val.value }}</div>
          <div v-else-if='val.value === "でんき"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Electric">{{ val.value }}</div>
          <div v-else-if='val.value === "くさ"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Grass">{{ val.value }}</div>
          <div v-else-if='val.value === "こおり"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Ice">{{ val.value }}</div>
          <div v-else-if='val.value === "かくとう"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Fighting">{{ val.value }}</div>
          <div v-else-if='val.value === "どく"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Poison">{{ val.value }}</div>
          <div v-else-if='val.value === "じめん"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Ground">{{ val.value }}</div>
          <div v-else-if='val.value === "ひこう"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Flying">{{ val.value }}</div>
          <div v-else-if='val.value === "エスパー"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Psychic">{{ val.value }}</div>
          <div v-else-if='val.value === "むし"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Bug">{{ val.value }}</div>
          <div v-else-if='val.value === "いわ"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Rock">{{ val.value }}</div>
          <div v-else-if='val.value === "ゴースト"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Ghost">{{ val.value }}</div>
          <div v-else-if='val.value === "ドラゴン"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Dragon">{{ val.value }}</div>
          <div v-else-if='val.value === "あく"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Dark">{{ val.value }}</div>
          <div v-else-if='val.value === "はがね"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Steel">{{ val.value }}</div>
          <div v-else-if='val.value === "フェアリー"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Fairy">{{ val.value }}</div>
        </div>

        <h2>こうかはばつぐんだ(2倍)</h2>
        <div
          v-for="val in damage2"
          :key="val"
          style="display: inline-block;"
        >
          <div v-if='val.value === "ノーマル"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Normal">{{ val.value }}</div>
          <div v-else-if='val.value === "ほのお"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Fire">{{ val.value }}</div>
          <div v-else-if='val.value === "みず"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Water">{{ val.value }}</div>
          <div v-else-if='val.value === "でんき"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Electric">{{ val.value }}</div>
          <div v-else-if='val.value === "くさ"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Grass">{{ val.value }}</div>
          <div v-else-if='val.value === "こおり"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Ice">{{ val.value }}</div>
          <div v-else-if='val.value === "かくとう"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Fighting">{{ val.value }}</div>
          <div v-else-if='val.value === "どく"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Poison">{{ val.value }}</div>
          <div v-else-if='val.value === "じめん"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Ground">{{ val.value }}</div>
          <div v-else-if='val.value === "ひこう"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Flying">{{ val.value }}</div>
          <div v-else-if='val.value === "エスパー"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Psychic">{{ val.value }}</div>
          <div v-else-if='val.value === "むし"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Bug">{{ val.value }}</div>
          <div v-else-if='val.value === "いわ"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Rock">{{ val.value }}</div>
          <div v-else-if='val.value === "ゴースト"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Ghost">{{ val.value }}</div>
          <div v-else-if='val.value === "ドラゴン"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Dragon">{{ val.value }}</div>
          <div v-else-if='val.value === "あく"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Dark">{{ val.value }}</div>
          <div v-else-if='val.value === "はがね"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Steel">{{ val.value }}</div>
          <div v-else-if='val.value === "フェアリー"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Fairy">{{ val.value }}</div>
        </div>

        <h2>こうかはふつう</h2>
        <div
          v-for="val in damage1"
          :key="val"
          style="display: inline-block;"
        >
        <div v-if='val.value === "ノーマル"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Normal">{{ val.value }}</div>
          <div v-else-if='val.value === "ほのお"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Fire">{{ val.value }}</div>
          <div v-else-if='val.value === "みず"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Water">{{ val.value }}</div>
          <div v-else-if='val.value === "でんき"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Electric">{{ val.value }}</div>
          <div v-else-if='val.value === "くさ"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Grass">{{ val.value }}</div>
          <div v-else-if='val.value === "こおり"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Ice">{{ val.value }}</div>
          <div v-else-if='val.value === "かくとう"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Fighting">{{ val.value }}</div>
          <div v-else-if='val.value === "どく"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Poison">{{ val.value }}</div>
          <div v-else-if='val.value === "じめん"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Ground">{{ val.value }}</div>
          <div v-else-if='val.value === "ひこう"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Flying">{{ val.value }}</div>
          <div v-else-if='val.value === "エスパー"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Psychic">{{ val.value }}</div>
          <div v-else-if='val.value === "むし"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Bug">{{ val.value }}</div>
          <div v-else-if='val.value === "いわ"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Rock">{{ val.value }}</div>
          <div v-else-if='val.value === "ゴースト"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Ghost">{{ val.value }}</div>
          <div v-else-if='val.value === "ドラゴン"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Dragon">{{ val.value }}</div>
          <div v-else-if='val.value === "あく"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Dark">{{ val.value }}</div>
          <div v-else-if='val.value === "はがね"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Steel">{{ val.value }}</div>
          <div v-else-if='val.value === "フェアリー"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Fairy">{{ val.value }}</div>
        </div>

        <h2>こうかはいまひとつ(0.5倍)</h2>
        <div
          v-for="val in damage05"
          :key="val"
          style="display: inline-block;"
        >
        <div v-if='val.value === "ノーマル"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Normal">{{ val.value }}</div>
          <div v-else-if='val.value === "ほのお"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Fire">{{ val.value }}</div>
          <div v-else-if='val.value === "みず"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Water">{{ val.value }}</div>
          <div v-else-if='val.value === "でんき"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Electric">{{ val.value }}</div>
          <div v-else-if='val.value === "くさ"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Grass">{{ val.value }}</div>
          <div v-else-if='val.value === "こおり"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Ice">{{ val.value }}</div>
          <div v-else-if='val.value === "かくとう"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Fighting">{{ val.value }}</div>
          <div v-else-if='val.value === "どく"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Poison">{{ val.value }}</div>
          <div v-else-if='val.value === "じめん"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Ground">{{ val.value }}</div>
          <div v-else-if='val.value === "ひこう"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Flying">{{ val.value }}</div>
          <div v-else-if='val.value === "エスパー"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Psychic">{{ val.value }}</div>
          <div v-else-if='val.value === "むし"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Bug">{{ val.value }}</div>
          <div v-else-if='val.value === "いわ"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Rock">{{ val.value }}</div>
          <div v-else-if='val.value === "ゴースト"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Ghost">{{ val.value }}</div>
          <div v-else-if='val.value === "ドラゴン"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Dragon">{{ val.value }}</div>
          <div v-else-if='val.value === "あく"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Dark">{{ val.value }}</div>
          <div v-else-if='val.value === "はがね"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Steel">{{ val.value }}</div>
          <div v-else-if='val.value === "フェアリー"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Fairy">{{ val.value }}</div>
        </div>

        <h2>こうかはいまひとつ(0.25倍)</h2>
        <div
          v-for="val in damage025"
          :key="val"
          style="display: inline-block;"
        >
        <div v-if='val.value === "ノーマル"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Normal">{{ val.value }}</div>
          <div v-else-if='val.value === "ほのお"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Fire">{{ val.value }}</div>
          <div v-else-if='val.value === "みず"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Water">{{ val.value }}</div>
          <div v-else-if='val.value === "でんき"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Electric">{{ val.value }}</div>
          <div v-else-if='val.value === "くさ"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Grass">{{ val.value }}</div>
          <div v-else-if='val.value === "こおり"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Ice">{{ val.value }}</div>
          <div v-else-if='val.value === "かくとう"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Fighting">{{ val.value }}</div>
          <div v-else-if='val.value === "どく"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Poison">{{ val.value }}</div>
          <div v-else-if='val.value === "じめん"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Ground">{{ val.value }}</div>
          <div v-else-if='val.value === "ひこう"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Flying">{{ val.value }}</div>
          <div v-else-if='val.value === "エスパー"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Psychic">{{ val.value }}</div>
          <div v-else-if='val.value === "むし"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Bug">{{ val.value }}</div>
          <div v-else-if='val.value === "いわ"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Rock">{{ val.value }}</div>
          <div v-else-if='val.value === "ゴースト"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Ghost">{{ val.value }}</div>
          <div v-else-if='val.value === "ドラゴン"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Dragon">{{ val.value }}</div>
          <div v-else-if='val.value === "あく"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Dark">{{ val.value }}</div>
          <div v-else-if='val.value === "はがね"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Steel">{{ val.value }}</div>
          <div v-else-if='val.value === "フェアリー"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Fairy">{{ val.value }}</div>
        </div>

        <h2>こうかはない</h2>
        <div
          v-for="val in damage0"
          :key="val"
          style="display: inline-block;"
        >
        <div v-if='val.value === "ノーマル"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Normal">{{ val.value }}</div>
          <div v-else-if='val.value === "ほのお"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Fire">{{ val.value }}</div>
          <div v-else-if='val.value === "みず"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Water">{{ val.value }}</div>
          <div v-else-if='val.value === "でんき"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Electric">{{ val.value }}</div>
          <div v-else-if='val.value === "くさ"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Grass">{{ val.value }}</div>
          <div v-else-if='val.value === "こおり"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Ice">{{ val.value }}</div>
          <div v-else-if='val.value === "かくとう"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Fighting">{{ val.value }}</div>
          <div v-else-if='val.value === "どく"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Poison">{{ val.value }}</div>
          <div v-else-if='val.value === "じめん"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Ground">{{ val.value }}</div>
          <div v-else-if='val.value === "ひこう"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Flying">{{ val.value }}</div>
          <div v-else-if='val.value === "エスパー"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Psychic">{{ val.value }}</div>
          <div v-else-if='val.value === "むし"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Bug">{{ val.value }}</div>
          <div v-else-if='val.value === "いわ"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Rock">{{ val.value }}</div>
          <div v-else-if='val.value === "ゴースト"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Ghost">{{ val.value }}</div>
          <div v-else-if='val.value === "ドラゴン"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Dragon">{{ val.value }}</div>
          <div v-else-if='val.value === "あく"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Dark">{{ val.value }}</div>
          <div v-else-if='val.value === "はがね"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Steel">{{ val.value }}</div>
          <div v-else-if='val.value === "フェアリー"' style="margin: 5px;padding: 5px;border-radius: 10px;" class="type_Fairy">{{ val.value }}</div>
        </div>

        <v-btn block @click="typeDialog = false">とじる</v-btn>
      </v-card-item>
    </v-card>
  </v-container>
  </v-dialog>
</ClientOnly>
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