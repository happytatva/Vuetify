<template>
  <v-container>
    <h3>Customized Snackbar Component</h3>
    <v-row>
      <v-col>
        <div class="text-center ma-2">
          <v-btn
            variant="outlined"
            @click="snackbar = true"
          >
            Open Snackbar
          </v-btn>
          <v-snackbar
            v-model="snackbar"
            :timeout="timeout"
            vertical
          >
            {{ text }}

            <template v-slot:actions>
              <v-btn
                color="pink"
                variant="text"
                @click="snackbar = false"
              >
                Close
              </v-btn>
            </template>
          </v-snackbar>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped lang="scss">
</style>
<script>
  export default{
    data: ()=>({
      snackbar: false,
      text: "I am a multi-line snackbar.\nI can have more than one line. This is another line that is quite long.",
      timeout: 2000,
    })
  }
</script>