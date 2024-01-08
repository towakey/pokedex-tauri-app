<script setup lang="ts">
  import { useStorage } from '@vueuse/core'
  const props = defineProps(["siteTitle"])
  // const instanceURL = ref(useStorage('mastodonInstanceURL', null))
  const instanceURL = ref()
  // const isShared = ref(!!instanceURL.value)
  const isShared = ref()

  const isSharedComputed = computed(() => isShared.value)

  onMounted(() => {
    instanceURL.value = localStorage.getItem('mastodonInstanceURL')
    isShared.value = !!instanceURL.value
  })

  const saveInstanceURL = () => {
    // localStorage.setItem('mastodonInstanceURL', instanceURL.value)
    // console.log(localStorage.getItem("mastodonInstanceURL"))
    if(instanceURL.value){
      useStorage('mastodonInstanceURL', instanceURL.value)
      isShared.value = !!instanceURL.value
    }
  }
  const resetInstanceURL = () => {
    // localStorage.removeItem('mastodonInstanceURL')
    // useStorage('mastodonInstanceURL', '')
    localStorage.removeItem('mastodonInstanceURL')
    instanceURL.value = ''
    isShared.value = !!instanceURL.value
  }

  const shareOnTwitter = () => {
    const url=window.location.href
    const text=props.siteTitle
    const hashtags=""

    const twitterIntentUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}&hashtags=${encodeURIComponent(hashtags)}`

    window.open(twitterIntentUrl, '_blank', 'width=550,height=420')
  }
  const shareOnMastodon = () => {
    const url=window.location.href
    const text=`${props.siteTitle}\n${url}`
    const hashtags=""

    const mastodonIntentUrl = `${instanceURL.value}/share?text=${encodeURIComponent(text)}`

    window.open(mastodonIntentUrl, '_blank', 'width=550,height=420')
  }
</script>
<template>
  <v-card
  elevation="0"
  >
    <v-card-title overflow-wrap="break-word">
      <!-- <div class="sns_line"> -->
        <a href="tweetLink"
          target="_blank"
          rel="noopener noreferrer"
          class="twitter-share-button"
          @click.prevent="shareOnTwitter()"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1da1f2" class="icon">
            <path
              d="M23.925 4.548c-.884.389-1.83.653-2.828.771a5.14 5.14 0 002.26-2.835 10.28 10.28 0 01-3.268 1.249 5.117 5.117 0 00-8.758 4.666 14.53 14.53 0 01-10.55-5.334 5.077 5.077 0 00-.692 2.567 5.122 5.122 0 002.284 4.251 5.06 5.06 0 01-2.315-.639v.065a5.117 5.117 0 004.097 5.002 5.165 5.165 0 01-2.307.087 5.121 5.121 0 004.783 3.54 10.262 10.262 0 01-6.36 2.19c-.415 0-.823-.024-1.227-.071a14.495 14.495 0 007.873 2.313c9.423 0 14.559-7.798 14.559-14.559 0-.221-.005-.441-.014-.661a10.355 10.355 0 002.544-2.652z"/>
          </svg>
          <span class="twitter-share-button-label">Tweet</span>
        </a>
      <!-- </div> -->
      <!-- <a :href="getMastodonShareURL" target="_blank" rel="noopener noreferrer">
        共有する
        <font-awesome-icon :icon="['fab', 'mastodon']" />
      </a> -->
      <!-- <div class="sns_line"> -->
        <div class="mastodon-share-button">
        <div v-if="!isShared">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M433 179.11c0-97.2-63.71-125.7-63.71-125.7-62.52-28.7-228.56-28.4-290.48 0 0 0-63.72 28.5-63.72 125.7 0 115.7-6.6 259.4 105.63 289.1 40.51 10.7 75.32 13 103.33 11.4 50.81-2.8 79.32-18.1 79.32-18.1l-1.7-36.9s-36.31 11.4-77.12 10.1c-40.41-1.4-83-4.4-89.63-54a102.54 102.54 0 0 1-.9-13.9c85.63 20.9 158.65 9.1 178.75 6.7 56.12-6.7 105-41.3 111.23-72.9 9.8-49.8 9-121.5 9-121.5zm-75.12 125.2h-46.63v-114.2c0-49.7-64-51.6-64 6.9v62.5h-46.33V197c0-58.5-64-56.6-64-6.9v114.2H90.19c0-122.1-5.2-147.9 18.41-175 25.9-28.9 79.82-30.8 103.83 6.1l11.6 19.5 11.6-19.5c24.11-37.1 78.12-34.8 103.83-6.1 23.71 27.3 18.4 53 18.4 175z"/></svg>
          <input type="text" class="mastodon-share-save-text-field" v-model="instanceURL" placeholder="MastodonインスタンスのURL" />
          <button class="mastodon-share-save-button" @click="saveInstanceURL">保存</button>
        </div>
        <div v-else>
          <a href="mastodonShareURL"
            target="_blank"
            ref="noopener noreferrer"
            class="mastodon-share-share-button"
            @click.prevent="shareOnMastodon()"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M433 179.11c0-97.2-63.71-125.7-63.71-125.7-62.52-28.7-228.56-28.4-290.48 0 0 0-63.72 28.5-63.72 125.7 0 115.7-6.6 259.4 105.63 289.1 40.51 10.7 75.32 13 103.33 11.4 50.81-2.8 79.32-18.1 79.32-18.1l-1.7-36.9s-36.31 11.4-77.12 10.1c-40.41-1.4-83-4.4-89.63-54a102.54 102.54 0 0 1-.9-13.9c85.63 20.9 158.65 9.1 178.75 6.7 56.12-6.7 105-41.3 111.23-72.9 9.8-49.8 9-121.5 9-121.5zm-75.12 125.2h-46.63v-114.2c0-49.7-64-51.6-64 6.9v62.5h-46.33V197c0-58.5-64-56.6-64-6.9v114.2H90.19c0-122.1-5.2-147.9 18.41-175 25.9-28.9 79.82-30.8 103.83 6.1l11.6 19.5 11.6-19.5c24.11-37.1 78.12-34.8 103.83-6.1 23.71 27.3 18.4 53 18.4 175z"/></svg> 共有する
          </a>
          <button class="mastodon-share-reset-button" @click="resetInstanceURL">リセット</button>
        </div>
        </div>
      <!-- </div> -->
    </v-card-title>
  </v-card>
</template>
<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
.twitter-share-button {
  display: inline-blockk;
  width: fit-content;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: #1da1f2;
  background-color: white;
  border: 1px solid #1da1f2;
  border-radius: 100px;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color 0.2s, color 0.2s;
}

.twitter-share-button:hover {
  background-color: #1da1f2;
  color: white;
}

.icon {
  height: 20px;
  width: 20px;
  margin-right: 8px;
}

.twitter-share-button-label {
  margin-left: 4px;
}

.mastodon-share-button {
  text-decoration: none;
  border: 1px solid #3c3c3c;
  background-color: #3c3c3c;
  border-radius: 100px;
  padding: 4px 16px;
  display: inline-blockk;
  width: fit-content;
}
.mastodon-share-save-text-field {
  margin-right: 10px;
  color: white;
}
.mastodon-share-save-button {
  background-color: #3c3c3c;
  color: aliceblue;
  border: 1px solid #3c3c3c;
  margin-left: 10px;
  padding-left: 10px;
  padding-right: 10px;
}
.mastodon-share-share-button {
  background-color: #3c3c3c;
  color: aliceblue;
  border: 1px solid #3c3c3c;
  margin-left: 10px;
  padding-left: 1px;
  padding-right: 1px;
  text-decoration: none;
}
.mastodon-share-reset-button {
  background-color: #3c3c3c;
  color: aliceblue;
  border: 1px solid #3c3c3c;
  margin-left: 10px;
  padding-left: 10px;
  padding-right: 10px;
}
.sns_line {
  display: inline-flex;
  margin: 5px;
  overflow: hidden;
}
</style>
