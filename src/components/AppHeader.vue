<template>
  <div class="inner-header">
    <v-container>
      <v-row class="align-center">
        <v-col class="text-left">
          <a href="/" class="d-inline-block mx-2 text-primary font-weight-bold" target="_blank">LOGO</a>
        </v-col>
        <v-col class="text-right">
          <v-btn  
              :ripple="false"
              color="secondary"
              @click.stop="drawer = !drawer"
            >
              Toggle Menu
            </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <v-navigation-drawer
    style="height: calc(100% - 118px); top:68px;"
    v-model="drawer"
    class="text-color"
    temporary
    theme="myCustomLightTheme"
  >
    <v-list-item 
      class="d-flex"
      prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
      title="Guest User"
    ></v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item class="d-flex" to="/" prepend-icon="mdi-home" title="Home" value="home"></v-list-item>
      <v-list-item class="d-flex" to="/select" prepend-icon="mdi-select-multiple" title="Select" value="select"></v-list-item>
      <v-list-item class="d-flex" to="/snackbar" prepend-icon="mdi-alert-box" title="Snackbar" value="snackbar"></v-list-item>
      <v-list-item class="d-flex" to="/autocomplete" prepend-icon="mdi-auto-fix" title="Autocomplete" value="autocomplete"></v-list-item>
      <v-list-item class="d-flex" to="/datepicker" prepend-icon="mdi-calendar-range" title="Datepicker" value="datepicker"></v-list-item>
      <v-list-item class="d-flex" to="/file-upload" prepend-icon="mdi-file-upload" title="File Upload" value="file upload"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped lang="scss">
  @import "../assets/scss/colors";
  .inner-header {
    background-color: $black;
  }
</style>
<script>
  export default {
    data () {
      return {
        drawer: null,
      }
    },
  }
</script>