<template>
  <v-container class="bg-surface-variant">
    <v-row>
      <v-col>
        <NuxtLink
          :to="{path: '/webapp/leaguecard_generator'}"
        >
          <v-card>
            <v-card-title
              style="text-align:center"
            >リーグカードジェネレーター</v-card-title>
          </v-card>
        </NuxtLink>
      </v-col>
    </v-row>
  </v-container>
</template>
