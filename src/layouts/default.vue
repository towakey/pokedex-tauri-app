<script setup lang="ts">
// const title: Ref<string> = useState('title', () => "Pokedex Online")
// const pageTitle = ref('')
var pageTitle = ref('')
const route = useRoute()
useHead({
  title: route.meta.title as string,
})
pageTitle.value = route.meta.title
var drawer: Ref<boolean> = useState('drawer', () => true)
const items = [
  {
    title: 'TOP',
    value: '',
  },
  {
    title: 'ポケモン図鑑',
    value: 'pokedex',
  },
  {
    title: 'Webアプリ',
    value: 'webapp',
  },
  {
    title: 'ブログ',
    value: 'blog',
  },
]
// console.log(head)

// onMounted(()=>{
//   pageTitle = route.meta.title
//   // console.log(head)
// })

const onTitleChanged = (newTitle: string) => {
  console.log("onTitleChanged")
  console.log(newTitle)
  pageTitle.value = newTitle
  console.log(pageTitle)
}
// watch(pageTitle, () => {
//   pageTitle = route.meta.title
//   console.log(pageTitle)
// })

watchEffect(() => {
  route.meta.title && onTitleChanged(route.meta.title as string)
})

// computed(() => {
//   pageTitle = route.meta.title
// })
</script>

<!-- <script>
// import { config } from 'process'

  export default {
    setup(){
      const route = useRoute()
      useHead({
        title: route.meta.title
      })
      title = route.meta.title
      console.log("title:"+route.meta.title)
    },
    data: () => ({
      drawer: false,
      group: null,
      items: [
      {
          title: 'TOP',
          value: '',
        },
        {
          title: 'ポケモン図鑑',
          value: 'pokedex',
        },
        {
          title: 'ブログ',
          value: 'blog',
        },
        // {
        //   title: '全国図鑑',
        //   value: 'bar',
        // },
      ],
      // title: "ポケモン図鑑"
    }),
    watch: {
      group () {
        this.drawer = false
      },
    },
    created () {
      // const route = useRoute()
      // this.title = route.meta.title
    },
    computed: {
      // pageTitle() {
      //   const route = useRoute()
      //   console.log(route.meta)
      //   const title = route.title
      //   return title
      // }
    }
  }
</script> -->
<template>
  <!-- <v-card> -->
    <v-layout>
      <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

      <v-app-bar
        color="primary"
        prominent
      >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>
          <NuxtLink
            :to="{path: `/`}"
          >
            {{ pageTitle }}
          </NuxtLink>
        </v-toolbar-title>
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
            <v-list-item prepend-icon="mdi-magnify">
              {{ item.title }}
            </v-list-item>
          </v-list>
        </NuxtLink>
      </v-navigation-drawer>

      <v-main style="height: 100%;">
        <!-- <v-card-text> -->
          <!-- The navigation drawer will appear from the bottom on smaller size screens. -->
          <slot></slot>
        <!-- </v-card-text> -->
      </v-main>
    </v-layout>
  <!-- </v-card> -->
</template>