<script setup lang="ts">
definePageMeta({
  title: "ポケモン図鑑",
})
</script>
<template>
  <v-container class="bg-surface-variant">
    <v-row>
      <v-col>
        <NuxtLink
          :to="{path: '/pokedex/global'}"
        >
          <v-card>
            <v-card-title
              style="text-align:center"
            >全国図鑑</v-card-title>
          </v-card>
        </NuxtLink>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <NuxtLink
          :to="{path: '/pokedex/paldea'}"
        >
          <v-card>
            <v-card-title
              style="text-align:center"
            >パルデア図鑑</v-card-title>
          </v-card>
        </NuxtLink>
      </v-col>
      <v-col>
        <NuxtLink
          :to="{path: '/pokedex/galar'}"
        >
          <v-card>
            <v-card-title
              style="text-align:center"
            >ガラル図鑑</v-card-title>
          </v-card>
        </NuxtLink>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <NuxtLink
          :to="{path: '/pokedex/alola_usum'}"
        >
          <v-card>
            <v-card-title
              style="text-align:center"
            >アローラ図鑑(UltraSun UltraMoon)</v-card-title>
          </v-card>
        </NuxtLink>
      </v-col>
      <v-col>
        <NuxtLink
          :to="{path: '/pokedex/alola_sm'}"
        >
          <v-card>
            <v-card-title
              style="text-align:center"
            >アローラ図鑑(Sun Moon)</v-card-title>
          </v-card>
        </NuxtLink>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <NuxtLink
          :to="{path: '/pokedex/central_kalos'}"
        >
          <v-card>
            <v-card-title
              style="text-align:center"
            >セントラルカロス図鑑</v-card-title>
          </v-card>
        </NuxtLink>
      </v-col>
      <v-col>
        <NuxtLink
          :to="{path: '/pokedex/coast_kalos'}"
        >
          <v-card>
            <v-card-title
              style="text-align:center"
            >コーストカロス図鑑</v-card-title>
          </v-card>
        </NuxtLink>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <NuxtLink
          :to="{path: '/pokedex/mountain_kalos'}"
        >
          <v-card>
            <v-card-title
              style="text-align:center"
            >マウンテンカロス図鑑</v-card-title>
          </v-card>
        </NuxtLink>
      </v-col>
      <v-col>
        <NuxtLink
          :to="{path: '/pokedex/unova_b2w2'}"
        >
          <v-card>
            <v-card-title
              style="text-align:center"
            >イッシュ図鑑(Black2 White2)</v-card-title>
          </v-card>
        </NuxtLink>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <NuxtLink
          :to="{path: '/pokedex/unova_bw'}"
        >
          <v-card>
            <v-card-title
              style="text-align:center"
            >イッシュ図鑑(Black White)</v-card-title>
          </v-card>
        </NuxtLink>
      </v-col>
      <v-col>
        <NuxtLink
          :to="{path: '/pokedex/sinnoh'}"
        >
          <v-card>
            <v-card-title
              style="text-align:center"
            >シンオウ図鑑</v-card-title>
          </v-card>
        </NuxtLink>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <NuxtLink
          :to="{path: '/pokedex/hoenn'}"
        >
          <v-card>
            <v-card-title
              style="text-align:center"
            >ホウエン図鑑</v-card-title>
          </v-card>
        </NuxtLink>
      </v-col>
      <v-col>
        <NuxtLink
          :to="{path: '/pokedex/johto'}"
        >
          <v-card>
            <v-card-title
              style="text-align:center"
            >ジョウト図鑑</v-card-title>
          </v-card>
        </NuxtLink>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <NuxtLink
          :to="{path: '/pokedex/kanto'}"
        >
          <v-card>
            <v-card-title
              style="text-align:center"
            >カントー図鑑</v-card-title>
          </v-card>
        </NuxtLink>
      </v-col>
    </v-row>
    <!-- <v-row>
      <v-col>
        <NuxtLink
          :to="{path: '/pokedex/galar'}"
        >
          <v-card>
            <v-card-title
              style="text-align:center"
            >ガラル図鑑</v-card-title>
          </v-card>
        </NuxtLink>
      </v-col>
    </v-row> -->
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
