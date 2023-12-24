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
  <v-container class="">
    <v-row>
      <v-col cols="12" sm="6">
        <NuxtLink
          :to="{path: '/pokedex/global'}"
          class="pokedexLink"
        >
          <v-card elevation="0" color="#e3e1e1" class="pokedex-card">
            <v-card-title>全国図鑑</v-card-title>
            <v-card-text>
              <p>図鑑総数 1008匹</p>
              <p></p>
            </v-card-text>
          </v-card>
        </NuxtLink>
      </v-col>
      <v-col cols="12" sm="6">
        <NuxtLink
          :to="{path: '/pokedex/blueberry'}"
          class="pokedexLink"
        >
          <v-card elevation="0" color="#e3e1e1" class="pokedex-card">
            <v-card-title>ブルーベリー図鑑</v-card-title>
            <v-card-text>
              <p>図鑑総数 242匹</p>
              <p>ポケットモンスタースカーレット/バイオレット</p>
            </v-card-text>
          </v-card>
        </NuxtLink>
      </v-col>
      <v-col cols="12" sm="6">
        <NuxtLink
          :to="{path: '/pokedex/kitakami'}"
          class="pokedexLink"
        >
          <v-card elevation="0" color="#e3e1e1" class="pokedex-card">
            <v-card-title>キタカミ図鑑</v-card-title>
            <v-card-text>
              <p>図鑑総数 200匹</p>
              <p>ポケットモンスタースカーレット/バイオレット</p>
            </v-card-text>
          </v-card>
        </NuxtLink>
      </v-col>
      <v-col cols="12" sm="6">
        <NuxtLink
          :to="{path: '/pokedex/paldea'}"
          class="pokedexLink"
        >
          <v-card elevation="0" color="#e3e1e1" class="pokedex-card">
            <v-card-title>パルデア図鑑</v-card-title>
            <v-card-text>
              <p>図鑑総数 400匹</p>
              <p>ポケットモンスタースカーレット/バイオレット</p>
            </v-card-text>
          </v-card>
        </NuxtLink>
      </v-col>
      <v-col cols="12" sm="6">
        <NuxtLink
          :to="{path: '/pokedex/hisui'}"
          class="pokedexLink"
        >
          <v-card elevation="0" color="#e3e1e1" class="pokedex-card">
            <v-card-title>ヒスイ図鑑</v-card-title>
            <v-card-text>
              <p>図鑑総数 242匹</p>
              <p>ポケモン Legendsアルセウス</p>
            </v-card-text>
          </v-card>
        </NuxtLink>
      </v-col>
      <v-col cols="12" sm="6">
        <NuxtLink
          :to="{path: '/pokedex/isle_of_armor'}"
          class="pokedexLink"
        >
          <v-card elevation="0" color="#e3e1e1" class="pokedex-card">
            <v-card-title>ヨロイ島図鑑</v-card-title>
            <v-card-text>
              <p>図鑑総数 211匹</p>
              <p>ポケットモンスターソード/シールド</p>
            </v-card-text>
          </v-card>
        </NuxtLink>
      </v-col>
      <v-col cols="12" sm="6">
        <NuxtLink
          :to="{path: '/pokedex/crown_tundra'}"
          class="pokedexLink"
        >
          <v-card elevation="0" color="#e3e1e1" class="pokedex-card">
            <v-card-title>カンムリ雪原図鑑</v-card-title>
            <v-card-text>
              <p>図鑑総数 210匹</p>
              <p>ポケットモンスターソード/シールド</p>
            </v-card-text>
          </v-card>
        </NuxtLink>
      </v-col>
      <v-col cols="12" sm="6">
        <NuxtLink
          :to="{path: '/pokedex/galar'}"
          class="pokedexLink"
        >
          <v-card elevation="0" color="#e3e1e1" class="pokedex-card">
            <v-card-title>ガラル図鑑</v-card-title>
            <v-card-text>
              <p>図鑑総数 400匹</p>
              <p>ポケットモンスターソード/シールド</p>
            </v-card-text>
          </v-card>
        </NuxtLink>
      </v-col>
      <v-col cols="12" sm="6">
        <NuxtLink
          :to="{path: '/pokedex/alola_usum'}"
          class="pokedexLink"
        >
          <v-card elevation="0" color="#e3e1e1" class="pokedex-card">
            <v-card-title>アローラ図鑑(UltraSun UltraMoon)</v-card-title>
            <v-card-text>
              <p>図鑑総数 403匹</p>
              <p>ポケットモンスターウルトラサン/ウルトラムーン</p>
            </v-card-text>
          </v-card>
        </NuxtLink>
      </v-col>
      <v-col cols="12" sm="6">
        <NuxtLink
          :to="{path: '/pokedex/alola_sm'}"
          class="pokedexLink"
        >
          <v-card elevation="0" color="#e3e1e1" class="pokedex-card">
            <v-card-title>アローラ図鑑(Sun Moon)</v-card-title>
            <v-card-text>
              <p>図鑑総数 302匹</p>
              <p>ポケットモンスターサン/ムーン</p>
            </v-card-text>
          </v-card>
        </NuxtLink>
      </v-col>
      <v-col cols="12" sm="6">
        <NuxtLink
          :to="{path: '/pokedex/central_kalos'}"
          class="pokedexLink"
        >
          <v-card elevation="0" color="#e3e1e1" class="pokedex-card">
            <v-card-title>セントラルカロス図鑑</v-card-title>
            <v-card-text>
              <p>図鑑総数 151匹</p>
              <p>ポケットモンスターX/Y</p>
            </v-card-text>
          </v-card>
        </NuxtLink>
      </v-col>
      <v-col cols="12" sm="6">
        <NuxtLink
          :to="{path: '/pokedex/coast_kalos'}"
          class="pokedexLink"
        >
          <v-card elevation="0" color="#e3e1e1" class="pokedex-card">
            <v-card-title>コーストカロス図鑑</v-card-title>
            <v-card-text>
              <p>図鑑総数 153匹</p>
              <p>ポケットモンスターX/Y</p>
            </v-card-text>
          </v-card>
        </NuxtLink>
      </v-col>
      <v-col cols="12" sm="6">
        <NuxtLink
          :to="{path: '/pokedex/mountain_kalos'}"
          class="pokedexLink"
        >
          <v-card elevation="0" color="#e3e1e1" class="pokedex-card">
            <v-card-title>マウンテンカロス図鑑</v-card-title>
            <v-card-text>
              <p>図鑑総数 151匹</p>
              <p>ポケットモンスターX/Y</p>
            </v-card-text>
          </v-card>
        </NuxtLink>
      </v-col>
      <v-col cols="12" sm="6">
        <NuxtLink
          :to="{path: '/pokedex/unova_b2w2'}"
          class="pokedexLink"
        >
          <v-card elevation="0" color="#e3e1e1" class="pokedex-card">
            <v-card-title>イッシュ図鑑(Black2 White2)</v-card-title>
            <v-card-text>
              <p>図鑑総数 300匹</p>
              <p>ポケットモンスターブラック2/ホワイト2</p>
            </v-card-text>
          </v-card>
        </NuxtLink>
      </v-col>
      <v-col cols="12" sm="6">
        <NuxtLink
          :to="{path: '/pokedex/unova_bw'}"
          class="pokedexLink"
        >
          <v-card elevation="0" color="#e3e1e1" class="pokedex-card">
            <v-card-title>イッシュ図鑑(Black White)</v-card-title>
            <v-card-text>
              <p>図鑑総数 155匹</p>
              <p>ポケットモンスターブラック/ホワイト</p>
            </v-card-text>
          </v-card>
        </NuxtLink>
      </v-col>
      <v-col cols="12" sm="6">
        <NuxtLink
          :to="{path: '/pokedex/sinnoh'}"
          class="pokedexLink"
        >
          <v-card elevation="0" color="#e3e1e1" class="pokedex-card">
            <v-card-title>シンオウ図鑑</v-card-title>
            <v-card-text>
              <p>図鑑総数 210匹</p>
              <p>ポケットモンスターダイアモンド/パール/プラチナ</p>
            </v-card-text>
          </v-card>
        </NuxtLink>
      </v-col>
      <v-col cols="12" sm="6">
        <NuxtLink
          :to="{path: '/pokedex/hoenn'}"
          class="pokedexLink"
        >
          <v-card elevation="0" color="#e3e1e1" class="pokedex-card">
            <v-card-title>ホウエン図鑑</v-card-title>
            <v-card-text>
              <p>図鑑総数 202匹</p>
              <p>ポケットモンスタールビー/サファイア/エメラルド</p>
            </v-card-text>
          </v-card>
        </NuxtLink>
      </v-col>
      <v-col cols="12" sm="6">
        <NuxtLink
          :to="{path: '/pokedex/johto'}"
          class="pokedexLink"
        >
          <v-card elevation="0" color="#e3e1e1" class="pokedex-card">
            <v-card-title>ジョウト図鑑</v-card-title>
            <v-card-text>
              <p>図鑑総数 251匹</p>
              <p>ポケットモンスター金/銀/クリスタル</p>
            </v-card-text>
          </v-card>
        </NuxtLink>
      </v-col>
      <v-col cols="12" sm="6">
        <NuxtLink
          :to="{path: '/pokedex/kanto'}"
          class="pokedexLink"
        >
          <v-card elevation="0" color="#e3e1e1" class="pokedex-card">
            <v-card-title>カントー図鑑</v-card-title>
            <v-card-text>
              <p>図鑑総数 151匹</p>
              <p>ポケットモンスター赤/緑/青/ピカチュウ</p>
            </v-card-text>
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
.pokedex-card{
  /* width: 450px; */
  height: 100px;
}
</style>