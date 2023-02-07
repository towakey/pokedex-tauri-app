<template>
  <v-container class="bg-surface-variant">
    <v-row>
      <!-- <v-col>
        <NuxtLink
          :to="{path: '/pokedex/global'}"
        >
          <v-card>
            <v-card-title
              style="text-align:center"
            >全国図鑑</v-card-title>
          </v-card>
        </NuxtLink>
      </v-col> -->
      <v-col>
        <a href="/pokedex/paldea">
          <v-card>
            <v-card-title
              style="text-align:center"
            >パルデア図鑑</v-card-title>
          </v-card>
        </a>
      </v-col>
    </v-row>
    <!-- <v-row no-gutters>
      <v-col>
        <v-card class=".v-col-auto">
          <v-card-title>カント―図鑑</v-card-title>
        </v-card>
      </v-col>
      <v-col>
        <v-card class=".v-col-auto">
          <v-card-title>ジョウト図鑑</v-card-title>
        </v-card>
      </v-col>
    </v-row> -->
  </v-container>
</template>
<script>
export default defineComponent({
  setup() {
    
  },
})
</script>
