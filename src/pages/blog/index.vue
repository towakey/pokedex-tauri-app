<script setup lang="ts">
// export default { modules: ['@nuxt/content'] }
// import { useContent } from "@nuxt/content"
// import ContentList from "@nuxt/content"

// const contentQuery = queryContent()

definePageMeta({
  title: "Blog",
})
// const appConfig = useAppConfig()
// const blogs = appConfig.blogs
useHead({
  title: "Blog",
  meta: [
  {
      hid: 'og:title',
      name: 'og:title',
      content: "Blogs"
    },
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: 'summary'
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: "Blogs"
    }
  ]
})
</script>
<template>
  <v-container>
    <!-- <NuxtLink
    v-for="blog in blogs"
    :key="blog"
    :to="`blog/${blog.no}`"
    >
    <v-card>
      <v-card-title>{{ blog.title }}{{ blog }}</v-card-title>
    </v-card>
    </NuxtLink> -->

    <ContentList path="/blog" v-slot="{ list }">
      <div v-for="article in list" :key="article._path">
        <NuxtLink
        :to="{path: article._path}"
        >
          <v-card>
            <v-card-title>{{ article.title }}</v-card-title>
            <v-card-text>{{ article.description }}</v-card-text>
          </v-card>
        </NuxtLink>
      </div>
    </ContentList>
  </v-container>
</template>