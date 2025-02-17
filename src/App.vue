<template>
  <v-app>
    <AppHeader />
    <v-main class="d-flex align-center justify-center">
      <router-view />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<style lang="scss">
  @import "/src/assets/scss/main.scss";
</style>

<script setup>
  import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
</script>
