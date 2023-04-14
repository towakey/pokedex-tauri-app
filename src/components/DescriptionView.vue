<script setup lang="ts">
  defineProps(["description"])
  var verExchange = {
    "red": "赤",
    "green": "緑",
    "blue": "青",
    "pikachu": "ピカチュウ",
    "gold": "金",
    "silver": "銀",
    "crystal": "クリスタル",
    "ruby": "ルビー",
    "sapphire": "サファイア",
    "emerald": "エメラルド",
    "diamond": "ダイアモンド",
    "pearl": "パール",
    "platinum": "プラチナ",
    "black": "ブラック",
    "white": "ホワイト",
    "black2": "ブラック2",
    "white2": "ホワイト2",
    "x": "X",
    "y": "Y",
    "sun": "サン",
    "moon": "ムーン",
    "ultrasun": "ウルトラサン",
    "ultramoon": "ウルトラムーン",
    "sword": "ソード",
    "shield": "シールド",
    "legendsarceus": "Legendsアルセウス",
    "scarlet": "スカーレット",
    "violet": "バイオレット",
  }
</script>
<template>
  <!-- <v-card>
    <v-card-text><h2 v-for="(ver, index) in description" :key="index">{{ verExchange[index] }}:{{ ver }}</h2></v-card-text>
  </v-card> -->
  <v-list lines="two">
    <v-list-item
      v-for="(ver, index) in description" :key="index"
    >
      <v-list-item-title>{{ verExchange[index] }}</v-list-item-title>
      <v-list-item-subtitle class="wrap-text">{{ ver }}</v-list-item-subtitle>
    </v-list-item>
  </v-list>
</template>
