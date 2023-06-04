<script setup lang="ts">
  defineProps(["siteTitle"])
  const shareOnTwitter = (siteTitle) => {
    const url=window.location.href
    const text=siteTitle
    const hashtags=""

    const twitterIntentUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}&hashtags=${encodeURIComponent(hashtags)}`

    window.open(twitterIntentUrl, '_blank', 'width=550,height=420')
  }
</script>
<template>
  <v-card
  elevation="0"
  >
    <v-card-title>
      <a href="tweetLink"
        target="_blank"
        rel="noopener noreferrer"
        class="twitter-share-button"
        @click.prevent="shareOnTwitter(siteTitle)"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1da1f2" class="icon">
          <path
            d="M23.925 4.548c-.884.389-1.83.653-2.828.771a5.14 5.14 0 002.26-2.835 10.28 10.28 0 01-3.268 1.249 5.117 5.117 0 00-8.758 4.666 14.53 14.53 0 01-10.55-5.334 5.077 5.077 0 00-.692 2.567 5.122 5.122 0 002.284 4.251 5.06 5.06 0 01-2.315-.639v.065a5.117 5.117 0 004.097 5.002 5.165 5.165 0 01-2.307.087 5.121 5.121 0 004.783 3.54 10.262 10.262 0 01-6.36 2.19c-.415 0-.823-.024-1.227-.071a14.495 14.495 0 007.873 2.313c9.423 0 14.559-7.798 14.559-14.559 0-.221-.005-.441-.014-.661a10.355 10.355 0 002.544-2.652z"/>
        </svg>
        <span class="twitter-share-button-label">Tweet</span>
      </a>
    </v-card-title>
  </v-card>
</template>
<style scoped>
.twitter-share-button {
  display: inline-flex;
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
</style>
