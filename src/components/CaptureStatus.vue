<script setup lang="ts">
import { useStorage } from '@vueuse/core'
const props = defineProps(["pokedexArea","pokedex"])
const stat = ref("")

let defval: {[key: string]: string} = {}
for(let val in props.pokedex){
  defval[String(Number(val)+1)]="0"
}
const area = useStorage(props.pokedexArea, defval, undefined, {
  serializer: {
      read: (v: any) => v ? JSON.parse(v) : null,
      write: (v: any) => JSON.stringify(v),
    }
})
stat.value = area.value[props.pokedex.no]
const changeStat = (stats) => {
  area.value[String(props.pokedex.no)] = stats
}
</script>
<template>
  <!-- <p
  v-if="stat == '0'"
  >未発見</p>
  <p
  v-else-if="stat == '1'"
  >発見</p>
  <p
  v-else-if="stat == '2'"
  >捕獲済み</p> -->
  <!-- <p>{{ stat }}</p> -->
  <v-radio-group
  v-model="stat"
  inline
  label="図鑑の状態"
  >
    <v-radio
    label="未発見"
    value="0"
    @click="changeStat('0')"
    ></v-radio>
    <v-radio
    label="発見"
    value="1"
    @click="changeStat('1')"
    ></v-radio>
    <v-radio
    label="捕獲済み"
    value="2"
    @click="changeStat('2')"
    ></v-radio>
  </v-radio-group>
</template>