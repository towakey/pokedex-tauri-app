<script setup lang="ts">
// import { ClientOnly } from '~~/.nuxt/components';

  const props = defineProps(["pokedex", "index"])
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
            {{ pokedex.status[index].name.jpn }}
          </v-card-title>
          <v-card-text>
            <v-row
            v-for="(name, key) in pokedex.status[index].name"
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
          <v-card
            @click="nameDialog = true"
          >
            <v-card-title
            ><h2>{{ pokedex.status[index].name.jpn }}</h2></v-card-title>
          </v-card>
          <p>{{ pokedex.classification }}</p>
        </v-card-title>
        <v-card-text>
          <h2>たかさ<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18.5 1.586L22.914 6L21.5 7.414l-2-2v13.172l2-2L22.914 18L18.5 22.414L14.086 18l1.414-1.414l2 2V5.414l-2 2L14.086 6zM2 2h10v20H2zm2 2v16h6V4z"/></svg>:{{ (''+pokedex.status[index].height).slice(-5) }}m</h2>
          <h2>おもさ<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M256 46c-45.074 0-82 36.926-82 82c0 25.812 12.123 48.936 30.938 64H128L32 480h448l-96-288h-76.938C325.877 176.936 338 153.812 338 128c0-45.074-36.926-82-82-82m0 36c25.618 0 46 20.382 46 46s-20.382 46-46 46s-46-20.382-46-46s20.382-46 46-46m-82.215 202.95h23.5v33.263l33.873-33.264h27.283l-43.883 43.15l48.4 47.974H233.54l-36.255-35.888v35.888h-23.5zm119.934 21.24c4.76 0 8.952.934 12.573 2.806c3.62 1.872 6.938 4.82 9.95 8.85v-10.13h21.972v61.462c0 10.986-3.48 19.368-10.438 25.146c-6.917 5.82-16.968 8.727-30.152 8.727c-4.272 0-8.4-.325-12.39-.976a77.367 77.367 0 0 1-12.024-2.99v-17.03c3.826 2.198 7.57 3.826 11.23 4.884c3.664 1.098 7.347 1.648 11.05 1.648c7.162 0 12.41-1.566 15.746-4.7c3.337-3.132 5.006-8.035 5.006-14.708v-4.7c-3.01 3.986-6.328 6.916-9.95 8.788c-3.62 1.87-7.813 2.808-12.573 2.808c-8.343 0-15.238-3.275-20.69-9.826c-5.453-6.592-8.18-14.974-8.18-25.146c0-10.214 2.727-18.576 8.18-25.086c5.452-6.55 12.347-9.827 20.69-9.827m8.118 15.746c-4.517 0-8.038 1.67-10.56 5.005c-2.523 3.338-3.784 8.058-3.784 14.162c0 6.266 1.22 11.026 3.662 14.28c2.442 3.215 6.003 4.823 10.682 4.823c4.557 0 8.096-1.67 10.62-5.006c2.522-3.337 3.784-8.036 3.784-14.098c0-6.104-1.262-10.824-3.785-14.16c-2.523-3.337-6.062-5.006-10.62-5.006z"/></svg>:{{ (''+pokedex.status[index].weight).slice(-5) }}kg</h2>
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
