<script setup lang="ts">
//
</script>

<template>
  <v-app>
    <v-main>
      <v-container
        class="fill-width fill-height align-start justify-start py-0"
        fluid
      >
        <v-row>
          <v-col>
            <router-view :key="$route.fullPath" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
