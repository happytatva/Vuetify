<template>
  <v-container>
    <v-empty-state
      headline="Whoops, 404"
      title="Page not found"
      text="The page you were looking for does not exist"
      image="https://vuetifyjs.b-cdn.net/docs/images/logos/v.png"
    ></v-empty-state>
    <v-btn to="/" class="d-inline-flex" variant="flat">Get me out here</v-btn>
  </v-container>
</template>