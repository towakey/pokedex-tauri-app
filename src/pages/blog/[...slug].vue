<script setup lang="ts">
definePageMeta({
  title: "blog",
})
const route = useRoute()
const { id } = route.params;

const { data: article } = useAsyncData("blog", () =>
  queryContent(useRoute().path).findOne()
);

// const { data } = await useAsyncData('', () => queryContent('/blog/'+id).findOne())
// const { data } = await queryContent('blog').findOne()
// console.log(article)

</script>
<template>
  <v-container>
    <!-- <ContentRenderer :value="data" /> -->
    <!-- <ContentDoc path="/blog/3" /> -->
    <ContentDoc />
  </v-container>
</template>