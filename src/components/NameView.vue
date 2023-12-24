<script setup lang="ts">
// import { ClientOnly } from '~~/.nuxt/components';

  // const props = defineProps(["no", "globalNo", "name", "classification", "height", "weight"])
  const props = defineProps(["pokedex"])
  var nameDialog = ref(false)
  const src = "/img/" + ('0000' + props.pokedex.globalNo).slice( -4 ) + ".png"
  const langList: { [key: string]: string } = {
    "jpn": "日本語",
    "eng": "英語",
    "ger": "ドイツ語",
    "fra": "フランス語",
    "kor": "韓国語",
    "chs": "中国語",
    "cht": "中国語",
  }
</script>
<template>
  <ClientOnly>
    <v-dialog
      v-model="nameDialog"
    >
      <v-container>
        <v-card>
          <v-card-title>
            {{ pokedex.name.jpn }}
          </v-card-title>
          <v-card-text>
            <v-row
            v-for="(name, key) in pokedex.name"
            :key="name"
            >
              <v-col>
                {{ langList[key] }}
              </v-col>
              <v-col>
                {{ name }}
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-item>
            <v-btn block @click="nameDialog = false">とじる</v-btn>
          </v-card-item>
        </v-card>
      </v-container>
    </v-dialog>
  </ClientOnly>
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
          <!-- <h2>{{ pokedex.name.jpn }}</h2> -->
          <v-card
            @click="nameDialog = true"
          >
            <v-card-title><h2>{{ pokedex.name.jpn }}</h2></v-card-title>
          </v-card>
          <!-- <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-title><h2>{{ pokedex.name.jpn }}</h2></v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-list>
                  <v-list-item
                    v-for="(name, key) in pokedex.name"
                    :key="name"
                  >
                    <v-list-item-title>
                      {{ key }} : {{ name }}
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels> -->
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
