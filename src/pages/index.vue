<script setup lang="ts">
definePageMeta({
  title: "Pokedex Online",
})
</script>
<template>
  <v-container class="">
    <v-row>
      <v-col>
        <NuxtLink
          :to="{path: '/pokedex'}"
          class="link-decoration"
        >
          <v-card>
            <v-card-title
              style="text-align:center"
            >ポケモン図鑑</v-card-title>
          </v-card>
        </NuxtLink>
      </v-col>
      <v-col>
        <NuxtLink
          :to="{path: '/webapp'}"
          class="link-decoration"
        >
          <v-card>
            <v-card-title
              style="text-align:center"
            >WEBアプリ</v-card-title>
          </v-card>
        </NuxtLink>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <a href="/blog"
        class="link-decoration"
        >
          <v-card>
            <v-card-title
              style="text-align:center"
            >ブログ</v-card-title>
          </v-card>
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>
