<script setup lang="ts">
definePageMeta({
  title: "ポケモン図鑑",
})
const metaTitle = ref("ポケモン図鑑 一覧")
useHead({
  title: metaTitle,
  meta: [
  {
      hid: 'og:title',
      name: 'og:title',
      content: metaTitle
    },
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: 'summary'
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: metaTitle
    }
  ]
})
</script>
<template>
  <v-container class="bg-surface-variant">
    <v-row>
      <v-col>
        <NuxtLink
          :to="{path: '/pokedex/global'}"
          class="pokedexLink"
        >
          <v-card>
            <v-card-title>全国図鑑</v-card-title>
          </v-card>
        </NuxtLink>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <NuxtLink
          :to="{path: '/pokedex/paldea'}"
          class="pokedexLink"
        >
          <v-card>
            <v-card-title>パルデア図鑑</v-card-title>
          </v-card>
        </NuxtLink>
      </v-col>
      <v-col>
        <NuxtLink
          :to="{path: '/pokedex/hisui'}"
          class="pokedexLink"
        >
          <v-card>
            <v-card-title>ヒスイ図鑑</v-card-title>
          </v-card>
        </NuxtLink>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <NuxtLink
          :to="{path: '/pokedex/isle_of_armor'}"
          class="pokedexLink"
        >
          <v-card>
            <v-card-title>ヨロイ島図鑑</v-card-title>
          </v-card>
        </NuxtLink>
      </v-col>
      <v-col>
        <NuxtLink
          :to="{path: '/pokedex/crown_tundra'}"
          class="pokedexLink"
        >
          <v-card>
            <v-card-title>カンムリ雪原図鑑</v-card-title>
          </v-card>
        </NuxtLink>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <NuxtLink
          :to="{path: '/pokedex/galar'}"
          class="pokedexLink"
        >
          <v-card>
            <v-card-title>ガラル図鑑</v-card-title>
          </v-card>
        </NuxtLink>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <NuxtLink
          :to="{path: '/pokedex/alola_usum'}"
          class="pokedexLink"
        >
          <v-card>
            <v-card-title>アローラ図鑑(UltraSun UltraMoon)</v-card-title>
          </v-card>
        </NuxtLink>
      </v-col>
      <v-col>
        <NuxtLink
          :to="{path: '/pokedex/alola_sm'}"
          class="pokedexLink"
        >
          <v-card>
            <v-card-title>アローラ図鑑(Sun Moon)</v-card-title>
          </v-card>
        </NuxtLink>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <NuxtLink
          :to="{path: '/pokedex/central_kalos'}"
          class="pokedexLink"
        >
          <v-card>
            <v-card-title>セントラルカロス図鑑</v-card-title>
          </v-card>
        </NuxtLink>
      </v-col>
      <v-col>
        <NuxtLink
          :to="{path: '/pokedex/coast_kalos'}"
          class="pokedexLink"
        >
          <v-card>
            <v-card-title>コーストカロス図鑑</v-card-title>
          </v-card>
        </NuxtLink>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <NuxtLink
          :to="{path: '/pokedex/mountain_kalos'}"
          class="pokedexLink"
        >
          <v-card>
            <v-card-title>マウンテンカロス図鑑</v-card-title>
          </v-card>
        </NuxtLink>
      </v-col>
      <v-col>
        <NuxtLink
          :to="{path: '/pokedex/unova_b2w2'}"
          class="pokedexLink"
        >
          <v-card>
            <v-card-title>イッシュ図鑑(Black2 White2)</v-card-title>
          </v-card>
        </NuxtLink>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <NuxtLink
          :to="{path: '/pokedex/unova_bw'}"
          class="pokedexLink"
        >
          <v-card>
            <v-card-title>イッシュ図鑑(Black White)</v-card-title>
          </v-card>
        </NuxtLink>
      </v-col>
      <v-col>
        <NuxtLink
          :to="{path: '/pokedex/sinnoh'}"
          class="pokedexLink"
        >
          <v-card>
            <v-card-title>シンオウ図鑑</v-card-title>
          </v-card>
        </NuxtLink>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <NuxtLink
          :to="{path: '/pokedex/hoenn'}"
          class="pokedexLink"
        >
          <v-card>
            <v-card-title>ホウエン図鑑</v-card-title>
          </v-card>
        </NuxtLink>
      </v-col>
      <v-col>
        <NuxtLink
          :to="{path: '/pokedex/johto'}"
          class="pokedexLink"
        >
          <v-card>
            <v-card-title>ジョウト図鑑</v-card-title>
          </v-card>
        </NuxtLink>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <NuxtLink
          :to="{path: '/pokedex/kanto'}"
          class="pokedexLink"
        >
          <v-card>
            <v-card-title>カントー図鑑</v-card-title>
          </v-card>
        </NuxtLink>
      </v-col>
    </v-row>
  </v-container>
</template>
<style>
.pokedexLink{
  text-align:center;
  text-decoration: none;
}
</style>