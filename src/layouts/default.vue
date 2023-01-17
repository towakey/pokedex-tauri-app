<!-- <script setup lang="ts">
  const route = useRoute()
  useHead({ title: route.meta.title as string })
</script> -->
<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
      items: [
      {
          title: 'TOP',
          value: '',
        },
        {
          title: 'パルデア図鑑',
          value: 'Paldea',
        },
        // {
        //   title: '全国図鑑',
        //   value: 'bar',
        // },
      ],
      title: "ポケモン図鑑"
    }),
    watch: {
      group () {
        this.drawer = false
      },
    },
    created () {
      // const route = useRoute()
      // this.title = route.meta.title
    }
  }
</script>
<template>
  <v-card>
    <v-layout>
      <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

      <v-app-bar
        color="primary"
        prominent
      >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <!-- <v-btn variant="text" icon="mdi-magnify"></v-btn> -->
        <!-- <v-btn variant="text" icon="mdi-filter"></v-btn> -->
        <!-- <v-btn variant="text" icon="mdi-dots-vertical"></v-btn> -->
      </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        location="left"
        temporary
      >
        <NuxtLink
          v-for="item in items" :key="items.title"
          :to="{path: `/${item.value}`}"
        >
          <v-list nav>
            <v-list-item prepend-icon="mdi-scale">
              {{ item.title }}
            </v-list-item>
          </v-list>
        </NuxtLink>
      </v-navigation-drawer>

      <v-main style="height: 100%;">
        <v-card-text>
          <!-- The navigation drawer will appear from the bottom on smaller size screens. -->
          <slot></slot>
        </v-card-text>
      </v-main>
    </v-layout>
  </v-card>
</template>